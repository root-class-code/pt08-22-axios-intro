const router = require("express").Router();
const BBModel = require('../models/BB.model')

/* GET home page */
router.get("/characters", (req, res, next) => {
    BBModel.find()
        .then((result) => {
            res.render('characters.hbs', {result})
        })
        .catch(() => {
            console.log('Character find failed')
        })
});

module.exports = router;
