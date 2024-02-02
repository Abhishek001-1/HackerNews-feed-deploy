import React, { useState, useEffect } from "react";
import { Table, message, Button, Layout, Menu } from "antd";
import axios from "axios";
import Header from '../components/Layouts/Header';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState("User Name");
  //fetching news
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        );

        const topArticles = response.data.slice(0, 90);

        const articleRequests = topArticles.map((articleId) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`)
        );

        const articleResponses = await Promise.all(articleRequests);
        const articleData = articleResponses.map((res) => ({
          ...res.data,
          isRead: false,
          deleted: false,
        }));
        
        // Sorted articles in reverse chronological order
        const sortedArticles = articleData.sort((a, b) => b.time - a.time);
        
        setArticles(sortedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handleDelete = (record) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === record.id ? { ...article, deleted: true } : article
      )
    );
    message.success("Article Deleted!");
  };

  const handleMarkRead = (record) => {
    setArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === record.id ? { ...article, isRead: !article.isRead } : article
      )
    );
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <span style={{ backgroundColor: record.isRead ? "#aaffaa" : "white" }}>{text}</span>
      ),
    },
    {
      title: "Author",
      dataIndex: "by",
      key: "author",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      render: (text, record) => (
        <div style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
        </div>
      ),
    },
    
    {
      title: "Hacker News URL",
      dataIndex: "id",
      key: "hackerNewsUrl",
      render: (text) => (
        <a href={`https://news.ycombinator.com/item?id=${text}`} target="_blank" rel="noopener noreferrer">
          {/* Hacker News Discussion */}
          <i class="fa fa-external-link" aria-hidden="true"></i>
        </a>
      ),
    },
    {
      title: "Posted On",
      dataIndex: "time",
      key: "time",
      render: (text) => new Date(text * 1000).toLocaleString(),
    },
    {
      title: "Upvotes",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Comments",
      dataIndex: "descendants",
      key: "descendants",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            type="primary"
            onClick={() => {
              handleMarkRead(record);
            }}
          >
            {record.isRead ? "Unmark Read" : "Mark Read"}
          </Button>
          <Button
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={() => {
              handleDelete(record);
            }}
          >
            Delete
          </Button>
        </div>
      ),
    }
    
  ];

  return (
    <Layout>
      <Header currentUser={currentUser} />
      <Layout.Content>
        <div>
          <Table columns={columns} dataSource={articles.filter(article => !article.deleted)} pagination={{ pageSize: 30, showSizeChanger: false }}  />
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
