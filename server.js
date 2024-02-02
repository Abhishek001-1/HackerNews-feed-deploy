const path = require('path')
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");

dotenv.config();

connectDb();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/users", require("./routes/userRoute"));

const ___dirname = path.resolve()

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(___dirname, '/client/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(___dirname, 'client', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
