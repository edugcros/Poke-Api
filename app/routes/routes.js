var express = require('express');
const router = express.Router();
const pokecontroller = require('../controllers/pokeController');


router.get('/api/', pokecontroller.index);


module.exports = router;