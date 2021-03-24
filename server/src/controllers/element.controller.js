const Element = require('../models/element.model');

exports.create = (req, res) => {
  //check if req.body is empty
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all data',
      data: null
    })
  }else{
    const newElement = new Element(req.body);
    Element.create(newElement, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'element succesfully created',
        data: modelRes
      })
    })
  }
}

exports.findAll = (req, res) => {
  Element.findAll((err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'all element succesfully fetched',
      data: modelRes
    })
  })
}

exports.findById = (req, res) => {
  Element.findById(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'element found',
      data: modelRes
    })
  })
}

exports.update = (req, res) => {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).json({
      error: true,
      message: 'please provide all data',
      data: null
    })
  }else{
    const newElement = new Element(req.body);
    Element.update(newElement, (err, modelRes) => {
      err ? res.send(err) : res.json({
        error: false,
        message: 'an element successfully updated',
        data: modelRes
      })
    })
  }
}

exports.delete = (req, res) => {
  Element.delete(req.params.id, (err, modelRes) => {
    err ? res.send(err) : res.json({
      error: false,
      message: 'element succesfully deleted',
      data: modelRes
    })
  })
}