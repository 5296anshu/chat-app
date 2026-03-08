import { io } from "socket.io-client";

const socket = io({
  path: "/api/sockets",
});

export default socket;