const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');


const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public'));

//Express Hbs Engine
hbs.registerPartials(__dirname +'/views/parciales');
app.set('view engine', 'hbs');


//Rutas
app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Daniel',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

/*app.get('/', (req, res) => {
    
  let salida = {
    nombre: 'Daniel',
    edad: 29,
    url: req.url
};

    res.send(salida);
  //res.send('Hello World');

});*/
 
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});