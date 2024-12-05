const express = require("express");
const app = express();
const cors = require("cors");
const socket = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socket(server);

app.use(cors());


server.listen