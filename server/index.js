const express = require('express');
const bodyParser = require('body-parser');
const books_controller = require('./controllers/books_controller.js')

const app = express();

app.use(bodyParser.json());  //top level middleware
app.use(express.static(__dirname + "/../build"));


app.get('/api/books', books_controller.read);
app.post('/api/books', books_controller.create);
app.put('/api/books/:id', books_controller.update);
app.delete('/api/books/:id', books_controller.delete);


const port = 3000;
app.listen(port, () => 
{
    console.log(`Server listening on port: ${port}`);
});