import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import route from "./routes/book.routes.js"
import { configDotenv } from "dotenv"
import userRouter from "./routes/user.route.js"

configDotenv()

const server = express()

server.use(cors({
    origin: "*", // Allow requests from Vite frontend
  credentials: true, // Allow credentials (cookies) to be sent
}))
server.use(express.json())
server.use("/books", route)
server.use("/user", userRouter)
mongoose.connect(process.env.CONNECTION_STRING)

.then(() => {
    console.log("up and running")
    server.listen(3000)

})