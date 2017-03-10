const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();
const PORT = process.env.PORT || 9000;
const ENV = process.env.NODE_ENV || 'development';

console.log('Node ENV:', ENV);

app.use(bodyParser.json());
// Server Loggin
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// Routes
//app.use('/', routes);
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', '/index.html'));
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
