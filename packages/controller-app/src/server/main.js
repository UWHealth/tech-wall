import express from 'express';
import ViteExpress from 'vite-express';
import { WebSocketServer } from 'ws';

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite!");
});


const server = ViteExpress.listen(app, 3000, () => {

  console.log("Server is listening on port 3000...")
});

const wss = new WebSocketServer({server});

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});
