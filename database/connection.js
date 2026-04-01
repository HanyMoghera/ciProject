import mongoose from "mongoose";

const databaseConnection = mongoose
  .connect("mongodb://127.0.0.1:27017/nti-test")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

export default databaseConnection;
