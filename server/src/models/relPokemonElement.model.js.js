const dbConn = require('../../config/db.config');
const relTable = "pokemon_element_tb";

const RelPokemonElement = function(rel){
  this.id = rel.id;
  this.pokemon_id = rel.pokemon_id;
  this.element_id = rel.element_id;
};

RelPokemonElement.findAll = (result) => {
  dbConn.query(`SELECT * FROM ${relTable}`)
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//FIND all by database record id
RelPokemonElement.findById = (id, result) => {
  dbConn.query(`SELECT * FROM ${relTable} WHERE id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}


//set pokemon and its d=id in new record
RelPokemonElement.create = (rel, result) => {
  dbConn.query(`INSERT INTO ${relTable} VALUE (?,?,?)`,
  [null, rel.pokemon_id, rel.element_id])
  .then(res => result(null, res))
  .catch(err => result(err, null))
}

RelPokemonElement.update = (rel, result) => {
  console.log(rel);
  dbConn.query(`UPDATE ${relTable} set pokemon_id=?, element_id=? WHERE id=?`,
  [rel.pokemon_id, rel.element_id, rel.id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//DELETE relational by it's database id
RelPokemonElement.delete = (id, result) => {
  dbConn.query(`DELETE FROM ${relTable} WHERE id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}


//==========Custom Search=============
//FIND all BY pokemon_id
RelPokemonElement.findByPokemonId = (id, result) => {
  dbConn.query(`SELECT * FROM ${relTable} WHERE pokemon_id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null))
}

//FIND all BY element_id
RelPokemonElement.findByElementId = (id, result) => {
  dbConn.query(`SELECT * FROM ${relTable} WHERE element_id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, res));
}

//Find all pokemons id and its element
RelPokemonElement.findAllPokemonElement = (result) => {
  dbConn.query(`SELECT pokemon_element_tb.id, pokemon_element_tb.pokemon_id, element_tb.name FROM element_tb INNER JOIN pokemon_element_tb ON element_tb.id = pokemon_element_tb.element_id`)
  .then(res => result(null, res))
  .catch(err => result(err,null));
}

//Find pokemon's owned element by pokemon_id //diferent path
RelPokemonElement.findPokemonElement = (id, result) => {
  dbConn.query(`SELECT pokemon_element_tb.id, pokemon_element_tb.pokemon_id, element_tb.name FROM element_tb INNER JOIN pokemon_element_tb ON element_tb.id = pokemon_element_tb.element_id WHERE pokemon_element_tb.pokemon_id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}



module.exports = RelPokemonElement;