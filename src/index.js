const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const open = require("open");

const PORT = 9001;

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/public/index.html`);
});

io.on("connection", function(socket) {
  console.log("A user connected.");

  socket.on("message", function (msg) {
    io.emit("message", msg)
  })
});

http.listen(PORT, function() {
  const url = `http://127.0.0.1:${PORT}`;
  console.log(`Soul chatter activated: ${url}`);
  open(url);
});
