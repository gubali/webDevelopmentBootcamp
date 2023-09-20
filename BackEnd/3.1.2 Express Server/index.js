import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req.rawHeaders);
})

app.post('/register', (req, res) => {
  res.send('register');
  res.sendStatus(201)
  console.log(req.rawHeaders);
})

app.put('/user/asif', (req, res) => {
  res.send('contact');
  res.status(200);
})
app.delete('/user/asif', (req, res) => {
  res.send('delete');
  res.status(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})