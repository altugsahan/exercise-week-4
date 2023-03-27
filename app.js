const express = require('express');
const app = express();
const port = 1234;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/:exercise', (req, res) => {
  const exercise = req.params.exercise;
  res.render(exercise);
});

app.get('./public/script.js', function(req, res) {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + './script.js');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
