const multer = require('multer');
const Pokemon =  require('../models/pokemon.model');
const pokemonPhotoUrl = './public/img/pokemon';
let fileName ='';

//Upload pokemon image Multer initialization
const pokemonImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, pokemonPhotoUrl)
  },
  filename: (req, file, cb) => {

    console.log(`file = ${file.mimetype}`);
    //select file extension
    let fileExtension = '';
    switch (file.mimetype) {
      case 'image/png': fileExtension = '.png'
      break;

      case 'image/gif': fileExtension = '.gif'
      break;
      
      case 'image/jpeg': fileExtension = '.jpeg'
      break;

      case 'image/jpg': fileExtension = '.jpg'
      break;

      default:
        break;
    }


    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    //menggabungkan nama file dan unique suffix
    fileName = file.fieldname + '-' + uniqueSuffix + fileExtension;
    //returning filename
    cb(null, fileName);   
  }
});
const uploadPokemonImage = multer({storage:pokemonImageStorage}).single('photo'); //define name attribute

//=============== Export Controller ============================
exports.create = (req, res) => {
  //File saving to related directory
  uploadPokemonImage(req, res, err => {
    if(err instanceof multer.MulterError){
      console.log('Multer Error Occured When Uploading')
    }else if (err){
      console.log(`An Unknown error when uploading = ${err}`);
    }else{
      console.log('file upload succes');

      //File Url created to database
      Pokemon.updatePhotoUrl(req.params.id, 'http://localhost:5000/public/img/pokemon/' + fileName, (err,modelRes) => {
        err ? res.send(`Error from fileUpload.controller.js = ${err}`) : res.json({
          error: false,
          message: 'filename save to databases succes',
          data: modelRes
        })
      } )

    }
    


  });

}