const path = require("path");
const express = require("express");
const history = require("connect-history-api-fallback");

const app = express(),
  DIST_DIR = path.join(__dirname, "build"),
  HTML_FILE = path.join(DIST_DIR, "index.html"),
  APP_PORT = process.env.PORT || 7700;

app.use(history());
app.set("port", APP_PORT);
app.use(express.static(DIST_DIR));
app.get("*", (req, res) => res.sendFile(HTML_FILE));

app.listen(app.get("port"));
console.log(`Listening at http://localhost:${APP_PORT}`);
