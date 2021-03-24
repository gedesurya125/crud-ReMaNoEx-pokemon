const dbConn = require('../../config/db.config');


const tableName= "element_tb";
const Element = function(element){
  this.id = element.id
  this.name = element.name
}

//insert new element
Element.create = (element, result) => {
  dbConn.query(`INSERT INTO ${tableName} value (?,?)`, 
  [null, element.name])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//find all element
Element.findAll = (result) => {
  dbConn.query(`SELECT * FROM ${tableName}`)
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//find element by id
Element.findById = (id, result) => {
  dbConn.query(`SELECT * FROM ${tableName} WHERE id=?`,
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null))
}

//upadate element
Element.update = (element, result) => {
  dbConn.query(`UPDATE ${tableName} SET name=? WHERE id=?`,
  [element.name, element.id])
  .then(res => result(null, res))
  .catch(err => result(err, null));
}

//Delete an element by id
Element.delete = (id, result) => {
  dbConn.query(`DELETE FROM ${tableName} WHERE id=?`, 
  [id])
  .then(res => result(null, res))
  .catch(err => result(err, null))
}

module.exports = Element;