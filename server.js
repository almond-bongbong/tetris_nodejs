const express = require('express');
const app = express();
const port = 8081;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.use(express.static(__dirname + "/public"));

const router = require('./router/main')(app);