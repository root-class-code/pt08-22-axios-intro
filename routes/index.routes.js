const axios = require("axios");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/nasa", (req, res, next) => {
  axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=y8EK2B8phjr4h5YVs8MbT1J0UsOxzEZTm8PDmXYe')
    .then((result) => {
      let photos = result.data.photos
      res.render('nasa.hbs', {photos})
    })
    .catch(() =>{
      console.log('Nasa error')
    })
});

module.exports = router;
