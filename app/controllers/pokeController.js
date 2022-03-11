const fetch = require('node-fetch');
const controller = {}


   controller.index= (req, res) => {
        fetch(' https://pokeapi.co/api/v2/pokemon')
            .then(resp => resp.json())
            .then(data => {res.json(data);    
                }) 
    }

module.exports = controller;