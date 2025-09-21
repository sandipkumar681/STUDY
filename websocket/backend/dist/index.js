import http from "http";
import { WebSocketServer } from "ws";
const server = http.createServer((request, response) => {
    console.log(new Date(), "Receeived request from", request);
    response.end(`Hello from HTTP Server! New Time=${new Date().toLocaleTimeString()}`);
});
const wss = new WebSocketServer({ server });
let activeUsers = 0;
wss.on("connection", (ws) => {
    ws.on("error", (err) => {
        console.log(err);
    });
    ws.on("message", (data) => {
        console.log("Message on Web Socket", data);
    });
    console.log("Active users", ++activeUsers);
});
server.listen(8080, () => {
    console.log(new Date(), "Server listening at port 8080");
});
//# sourceMappingURL=index.js.map