global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
const express = require("express");
const sitesController = require("./controllers-layer/sites-controller");
const morgan = require('morgan');
const cors = require("cors");

require("dotenv").config();
const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use("/api", sitesController);



server.listen(3001, () => console.log("Listening..."));
