import express from "express";
import middlewares from "./middlewares";
import server from "./server";

const app = express();

middlewares(app);
server(app);
