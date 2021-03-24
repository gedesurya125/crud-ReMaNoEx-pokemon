const Pokemon = require('../models/pokemon.model');



exports.create = (req, res) => {
  const newPokemon = new Pokemon(req.body);

  //chec if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'please provide all field'
    })
  }else{
    Pokemon.create(newPokemon, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        messaga: 'pokemon added successfully',
        data: modelRes
      })
    })
  }
}

exports.findAll = (req, res) => {
  Pokemon.findAll((err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'all pokemon fetched succesfully',
      data: modelRes
    })
  })
}

exports.findById = (req, res) => {
  Pokemon.findById(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'Pokemon found',
      data: modelRes
    })
  })
}

exports.update = (req, res) => {
  //check if req body id empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all field',
      data: null
    })
  }else{
    const newPokemon = new Pokemon(req.body);
    console.log(newPokemon);
    Pokemon.update(newPokemon, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'pokemon update succesfully',
        data: modelRes
      })
    })
  }
 
}

exports.delete = (req, res) => {
  Pokemon.delete(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'pokemon deleted succesfully',
      data: modelRes
    })
  })
}