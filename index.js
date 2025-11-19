// import express from "express"
// import dotenv from "dotenv"
// import connectDb from "./config/db.js"
// import cookieParser from "cookie-parser"
// import cors from "cors"
// import authRouter from "./routes/auth.routes.js"
// import userRouter from "./routes/user.routes.js"
// import postRouter from "./routes/post.routes.js"
// import loopRouter from "./routes/loop.routes.js"
// import storyRouter from "./routes/story.routes.js"
// import messageRouter from "./routes/message.routes.js"
// import { app, server } from "./socket.js"
// dotenv.config()

// const port=process.env.PORT || 5000
// app.use(cors({
//      origin: [
//         "http://localhost:5173",
//         "https://mern-frontend-46k6mwim4-harshal-chavans-projects-6c598929.vercel.app"
//     ],
    
    
//     credentials:true
// }))
// app.options("*", cors());
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api/auth",authRouter)
// app.use("/api/user",userRouter)
// app.use("/api/post",postRouter)
// app.use("/api/loop",loopRouter)
// app.use("/api/story",storyRouter)
// app.use("/api/message",messageRouter)


// server.listen(port , ()=>{
//     connectDb()
//     console.log("server started")
// })




import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.routes.js";
import loopRouter from "./routes/loop.routes.js";
import storyRouter from "./routes/story.routes.js";
import messageRouter from "./routes/message.routes.js";

dotenv.config();

// MAIN EXPRESS APP
const app = express();
const server = http.createServer(app);

// SOCKET.IO CONFIG
const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:5173",
            "https://mern-frontend-46k6mwim4-harshal-chavans-projects-6c598929.vercel.app"
        ],
        methods: ["GET", "POST"],
        credentials: true
    }
});

// ONLINE USER MAP
const userSocketMap = {};
export const getSocketId = (receiverId) => userSocketMap[receiverId];

// SOCKET CONNECTION HANDLER
io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId !== undefined) {
        userSocketMap[userId] = socket.id;
    }

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

// CORS SETTINGS FOR REST API
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://mern-frontend-46k6mwim4-harshal-chavans-projects-6c598929.vercel.app",
        "https://mern-frontend-pi-ruddy.vercel.app"
    ],
    credentials: true
}));

// app.options("*", cors());

// MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/loop", loopRouter);
app.use("/api/story", storyRouter);
app.use("/api/message", messageRouter);

// START SERVER
const port = process.env.PORT || 5000;
server.listen(port, () => {
    connectDb();
    console.log("Server started on port", port);
});

export { app, server, io };
