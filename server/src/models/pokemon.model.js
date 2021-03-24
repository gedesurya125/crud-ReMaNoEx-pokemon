const dbConn = require('../../config/db.config');

//membuat object pokemon
const Pokemon = function(pokemon){
  this.id = pokemon.id;
  this.name = pokemon.name;
  this.str = pokemon.str;
  this.def = pokemon.def;
  this.photo = pokemon.photo;
};

//CREATE
Pokemon.create = (newPokemon, result) => {
  dbConn.query(
    "INSERT INTO pokemon_tb value (?,?,?,?,?)",
    [null, newPokemon.name, newPokemon.str, newPokemon.def, newPokemon.photo]
  ).then(res => {
    result(null, res);
  }).catch(err => {
    result(err, null);
  })
}

//READ - FIND ALL pokemon
Pokemon.findAll = (result) => {
  dbConn.query("SELECT * FROM pokemon_tb")
  .then(res => {
    result(null, res);
  }).catch(err => {
    result(err, null);
  })
}

//READ - FIND POKEMON BY ID
Pokemon.findById = (id, result) => {
  dbConn.query("SELECT * FROM pokemon_tb WHERE id=?", 
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
};

//UPDATE - pokemon TO table pokemon_id
Pokemon.update = (pokemon, result) => {
  dbConn.query("UPDATE pokemon_tb set name=?, str=?, def=?, photo=? WHERE id=?",
  [pokemon.name, pokemon.str, pokemon.def, pokemon.photo, pokemon.id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//UPDATE - pokemon photo based on pokemon_id -used in mullter getting file
Pokemon.updatePhotoUrl = (id, photoUrl, result) => {
  dbConn.query("UPDATE pokemon_tb set photo=? WHERE id=?",
  [photoUrl, id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//DELETE - pokemon from pokemon_tb
Pokemon.delete = (id, result) => {
  dbConn.query("DELETE FROM pokemon_tb WHERE id=?",
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
};

module.exports = Pokemon;