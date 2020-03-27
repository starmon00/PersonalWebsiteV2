var express = require("express");
var router = express.Router();

router.get("/image", function(req, res, next) {
    res.sendFile("Under_Construction_Bear.png", { root: './public/images'});
});

router.get("/message", function(req, res, next) {
    res.send("Sorry, we're currently under construction. Please check back later!");
});

module.exports = router;