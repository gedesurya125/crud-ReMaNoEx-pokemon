//=====================Sekarang Buat route dari fileUpload Controller
const express = require('express');
const router = express.Router();
const FileUploadController = require('../controllers/fileUpload.controller');
router.put("/update/pokemon/img/:id", FileUploadController.create);

module.exports = router;