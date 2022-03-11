var express = require('express');
const nunjucks = require('nunjucks');
const fetch = require('node-fetch');
var	app = express();


const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: false}));

//Motor de plantilla
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

//Directorio Public
app.use('/', express.static('public'));
app.use('/', express.static(__dirname + '/public'));

// Routes
app.use(require(`./app/routes/routes`))

app.get('/', function(req, res) {    
    res.render('index.html',{title: "Backend Pokemon"})
});

app.get('/p1' ,(req, res) =>{ 
    fetch('https://pokeapi.co/api/v2/pokemon') 
    .then(response => response.json())
    .then(data => res.render('p1.html',{data:data}))  
}); 

app.get('/p2/:name', function(req, res) {
fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`)
.then(response => response.json())
.then(poke => res.render('p2.html',{poke:poke}))    
});

//listen 
app.listen(PORT, () => {
    console.log(`SERVER RUNNING IN http://localhost:${PORT}!`);
  
})