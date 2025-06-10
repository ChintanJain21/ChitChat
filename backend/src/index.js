import express from "express"
import dotenv from "dotenv"
const app =express()
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./database/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config()
const PORT=process.env.PORT

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser())
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth",authRoutes)
app.use("/api/message",messageRoutes)
app.listen(7000,()=>{
console.log("Server is running on PORT:"+PORT)
connectDB()
})