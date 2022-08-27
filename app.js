const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const ButtonClickCountRoute = require("./route/buttonClick");

io.on("connection", (socket) => {
  console.log("socket is active to be connected");

  socket.on("click", (payload) => {
    io.emit("click", payload);
  });
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send({ status: "Alive" }));
app.use("/api", ButtonClickCountRoute);

server.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
