import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/index";

const app=express();
dotenv.config()
app.use(bodyParser.json())
app.use("/api/v1",router)

const port=process.env.PORT
const database=process.env.DATABASE_URL

app.listen(port,()=>{
    console.log(`port running on...${port}`)
})

mongoose.connect(database).then(()=>{
    console.log(`database successfuly connected`)
})
.catch((error)=>{
  console.log(`database error ${error}`)

})

export default app;