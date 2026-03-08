import { Server } from "socket.io";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!(res.socket as any).server.io) {
    const io = new Server((res.socket as any).server, {
      path: "/api/sockets",
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);
        
      socket.on("message", (msg) => {
        if (msg.senderId === "A") {
      io.to("B").emit("message", msg);
    }

        // io.emit("message", msg); // broadcast to all clients
      });
    });

    (res.socket as any).server.io = io;
  }
  res.end();
}