import express from "express";
import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
console.log(req, res)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
