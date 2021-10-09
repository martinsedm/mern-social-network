global.config = require(process.env.NODE_ENV === "production" ? "./config-prod.json" : "./config-dev.json");
import express from "express";
const  {readdirSync} = require("fs");
const morgan = require('morgan');
const cors = require("cors");
const authRoute = require("./routes/auth");

require("dotenv").config();
const server = express();

server.use(cors());
server.use(morgan("dev"));

server.use(express.json({limit: "6mb"}));

// autoload routes.
readdirSync('./routes').map((route)=> server.use("/api",require(`./routes/${route}`)));

const port = process.env.PORT || 3001;

server.listen(port, () => console.log(`Listening to port ${port}...`));
