import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './route1.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://vansh:vanshseth%402004@auth.pyxmqul.mongodb.net/myDatabaseName?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected successfully");
    app.use("/", router);
    app.listen(3002, function() {
      console.log("Express server is running on port 3002");
    });
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
