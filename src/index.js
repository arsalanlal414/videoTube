import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
const app = express()
dotenv.config({
  path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !! ", err);
})

// app.listen(process.env.PORT, ()=> console.log("server is listening at port 5000"))











/*
import express from "express"
import mongoose from "mongoose";
const app = express()

const DB_NAME = "chai-backend"

;(
  async ()=>{
    try {
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })
    } catch (error) {
      console.log("error connecting db",error);
      process.exit(1)
    }
  }
)()

*/

