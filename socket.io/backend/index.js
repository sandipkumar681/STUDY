import { Server } from "socket.io";
import http from "http";

const server = http.createServer((req, res) => {
  return res
    .writeHead(400, { "content-type": "application/json" })
    .end(JSON.stringify({ message: "Hi Sandip" }));
});

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(`New user connected ${socket.id}`);

  socket.on("user-message", (message) => {
    io.emit("server-message", `${socket.id}: ${message}`);
  });

  socket.join(socket.id);

  socket.on("personal-message", ({ userId, message }) => {
    console.log(`Sending to ${userId}: ${message}`);
    io.to(userId).emit("personal-message", `From ${socket.id}: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected!`);
    socket.broadcast.emit(`${socket.id} has disconnected!`);
  });
});

server.listen(8000, () => {
  console.log(`Backend is listning on port 8000`);
});
