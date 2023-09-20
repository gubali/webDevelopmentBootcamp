import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = '';
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next) {
  console.log("request method" + req.method);
  console.log("request url" + req.url);
  next();
}

function bandNameGenerater(req, res, next) {
  console.log(req.body);
  bandName = "Street Name is :" + req.body["street"] + "'/n'"+ "Pet name is : " + req.body["pet"];
  next();

}

app.use(bandNameGenerater);
app.use(logger);
app.use(morgan('tiny'));
app.use((req, res, next) => {
  console.log("request log", req.res);
  next();
})

app.get('/', (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
})

app.post('/submit', (req, res) => {
  res.send(`<h1>Your Band Name is </h1><h2>${bandName}</h2>`)
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})