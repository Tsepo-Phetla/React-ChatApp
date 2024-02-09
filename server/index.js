const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
require("dotenv").config();


app.use(cors());
app.use(express.json())



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define your server port
const PORT = process.env.PORT || 3000;

// Start your server
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});


const server = app.listen(process.env.PORT,()=> {
    console.log('Server Started on Port ${process.env.PORT}');
});