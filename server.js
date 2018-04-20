const express = require('express');
const app = express();
const port = 4000;
const router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

const server = app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.use(express.static('public'));