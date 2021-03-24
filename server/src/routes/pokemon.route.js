const express = require ('express');
const router = express.Router();

const pokemonController =  require('../controllers/pokemon.controller');

//find all pokemon
router.get("/", pokemonController.findAll );

//insert new pokemon
router.post("/", pokemonController.create);

//find pokemon by id
router.get("/:id", pokemonController.findById);

//Update pokemon by id
router.put("/", pokemonController.update);

//Delete pokemon
router.delete("/:id", pokemonController.delete);

module.exports = router;