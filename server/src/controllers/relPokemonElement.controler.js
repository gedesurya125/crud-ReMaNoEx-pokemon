const RelPokemonElement = require('../models/relPokemonElement.model.js');

//Fetch all data from pokemon_element_tb
exports.findAll = (req, res) => {
  RelPokemonElement.findAll((err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'relation elemen pokemon fetched succesfully',
      data: modelRes
    })
  })
}

//Find all record from pokemon_element_tb by id
exports.findById = (req, res) => {
  RelPokemonElement.findById(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: `all data sucessfully fetched by id ${req.params.id}`,
      data: modelRes
    })
  })
}

//Create relation 
exports.create = (req, res) => {
  //check if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all data',
      data: null
    })
  }else{
    const newRel = new RelPokemonElement(req.body);
    RelPokemonElement.create(newRel, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'relation created successfully',
        data: modelRes
      })
    })
  }
}

//Update relation
exports.update = (req, res) => {
  //check if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all data',
      data: null
    })
  }else{
    console.log(req.body);
    const newRel = new RelPokemonElement(req.body);
    console.log(`new rel is : ${newRel}`);
    RelPokemonElement.update(newRel, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'relation updated succesfully',
        data: modelRes
      })
    })
  }
}

//Delete relation record by it's database id
exports.delete = (req, res) => {
  RelPokemonElement.delete(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'relational deleted succesfully',
      data: modelRes
    })
  })
}


//custom search
//FIND all by pokemon Id
exports.findByPokemonId = (req, res) => {
  RelPokemonElement.findByPokemonId(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'data found',
      data: modelRes
    })
  })
}

//FIND all by element Id
exports.findByElementId = (req,res) => {
  RelPokemonElement.findByElementId(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'data found',
      data: modelRes
    })
  })
}

//Find all pokemons id and its element
exports.findAllPokemonElement = (req, res) => {
  RelPokemonElement.findAllPokemonElement((err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'all pokemon and its element fetched succesfully',
      data: modelRes
    })
  })
}

//Find pokemon's owned element by pokemon_id 
exports.findPokemonElement = (req, res) => {
  RelPokemonElement.findPokemonElement(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'data found',
      data: modelRes
    })
  })
}

