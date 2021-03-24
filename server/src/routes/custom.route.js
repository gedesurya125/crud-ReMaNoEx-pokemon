const express = require('express');
const router = express.Router();
const relPokemonElementController = require('../controllers/relPokemonElement.controler');

//custom search
//localhost:5000/customsearch/...
//FIND all by pokemon Id
router.get("/pokemon/:id", relPokemonElementController.findByPokemonId);

//FIND all by element Id
router.get("/element/:id", relPokemonElementController.findByElementId);

//Find all pokemons id and its element
router.get("/elementofpokemon", relPokemonElementController.findAllPokemonElement);

//Find pokemon's owned element by pokemon_id 
router.get("/elementofpokemon/:id", relPokemonElementController.findPokemonElement);


module.exports = router;