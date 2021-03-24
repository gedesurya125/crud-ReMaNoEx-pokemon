const express = require('express');
const router = express.Router();
const relPokemonElementController = require('../controllers/relPokemonElement.controler');

//Fetch all data from pokemon_element_tb
router.get("/", relPokemonElementController.findAll);

//Find all record from pokemon_element_tb by id
router.get("/:id", relPokemonElementController.findById);

//Create Relation
router.post("/", relPokemonElementController.create);

//Update relation
router.put("/", relPokemonElementController.update);

//Delete relation record by it's database id
router.delete("/:id", relPokemonElementController.delete);


module.exports = router;