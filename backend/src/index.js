import express from "express"
import dotenv from "dotenv"
import path from "path";
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import { connectDB } from "./database/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { app,server } from "./utils/socket.js"
dotenv.config()
const PORT=process.env.PORT
const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*catch", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}


server.listen(7000,()=>{
console.log("Server is running on PORT:"+PORT)
connectDB()
})