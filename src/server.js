import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
import connection from './config/connectDB';
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})