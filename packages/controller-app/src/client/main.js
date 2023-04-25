import "./style.css";

const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = (data) => {
  const msg = data.data;
  console.log('received "%s"', msg);
}

window.__ws = ws;
