# HackerNews Feed Project

Welcome to the HackerNews Feed project! This project aims to provide a simplified version of the popular HackerNews website, allowing users to view the top 90 articles in reverse chronological order.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js
- React.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/HackerNews-Feed.git
2. **Navigate to the project directory:**
   ```bash
   cd HackerNews-Feed

3. **Install npm modules:**
   ```bash
   npm install

### Running the server

1. **Start the server by running the following command:**

   ```bash
   node server.js
   
*Ensure you have set the MONGO_URL environment variable with your MongoDB connection string.*

### Running the Frontend

1. **Navigate to the src folder:**
   ```bash
   cd client/src
2. **Start the frontend by running:**
   ```bash
    node index.js
   
 *This will launch the frontend application.*

### Accessing the App
   *Open your browser and navigate to http://localhost:your-port (replace your-port with the port where your server is running).*

### Features :
  ** Objective :**
    The main goal of this project is to create a simplified HackerNews clone that displays the top 90 articles in reverse chronological order.
 **Requirements:**
- Each news item includes fields such as URL, Hacker News URL, posted on, upvotes, and comments.
- A script crawls the first three pages, extracts news items, and adds them to the database. If an item exists, it updates the upvote and comment counts.
- Users can sign up or log in to the dashboard.
- A dashboard displays all news items in reverse chronological order.
- Users can mark a news item as read or delete it. Deleted items are not shown in their panel but are not removed from the database.


## Contributing :
 Feel free to contribute to the project by opening issues or submitting pull requests. Your feedback and contributions are highly appreciated.

## License :
 This project is licensed under the MIT License - see the LICENSE file for details.

Happy hacking!
  
