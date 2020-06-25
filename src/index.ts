import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import './database'
import routes from './routes/intex'

// create express app
const app = express();
app.use(bodyParser.json());
app.use(routes)

app.listen(3000);
console.log("Servidor rodando na porta http://localhost:3000")