const express = require('express');
const router = express.Router();

const elementController = require('../controllers/element.controller');

//insert new element
router.post("/", elementController.create);

//find all element
router.get("/", elementController.findAll);

//find element by id
router.get("/:id", elementController.findById);

//update element by id
router.put("/", elementController.update);

//delete element by id
router.delete("/:id", elementController.delete);
  
module.exports = router;