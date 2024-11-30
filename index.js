const app = require("./server");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const connectDB = require("./utills/connectDb");

dotenv.config({
  path: "config/config.env",
});

// Database connection
connectDB();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
