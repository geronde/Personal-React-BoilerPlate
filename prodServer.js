const webpack = require('webpack')
const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback');
import webpackDevMiddleware from "webpack-dev-middleware";  
import webpackHotMiddleware from "webpack-hot-middleware";  
import * as config from "./webpack.dev.config.js";

const app          = express(),  
      DIST_DIR     = path.join(__dirname, "build"),
      HTML_FILE    = path.join(DIST_DIR, "index.html"),
      PORT         = 7700;


      app.use(history());
      app.set("port", process.env.PORT || PORT);
      app.use(express.static(DIST_DIR));
      app.get("*", (req, res) => res.sendFile(HTML_FILE));

app.listen(app.get("port"));
console.log(`Listening at http://localhost:${PORT}`)
