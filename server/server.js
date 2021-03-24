const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const pokemonRouter = require('./src/routes/pokemon.route');
const elementRouter = require('./src/routes/element.route');
const relPokemonElementRouter = require('./src/routes/relPokemonElement.route');
const customRouter = require('./src/routes/custom.route');
const UploadImageRouter = require('./src/routes/uploadImage.route');

const app = express();
const port = process.env.port || 5000;


//applying middleware
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')))//serve static public folder



//test root route
app.get("/", (req, res) => res.send(`Hello World from server at port : ${port}`));



//Add Router
app.use("/api/pokemon", pokemonRouter);
app.use("/api/element", elementRouter);
app.use("/api/relation", relPokemonElementRouter);
app.use("/api/customsearch", customRouter);
app.use("/api/upload", UploadImageRouter);

//Multer Router for file upload


app.listen(port, () => {
  console.log(`SERVER IS LISTENING AT PORT : ${port}`)
})


