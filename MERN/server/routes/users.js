var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  main().then(()=>{
    console.log("DB Connected !!")
  })
  .catch(err => console.log(err));
  res.send('respond with a resource');
});
async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/test');
  await mongoose.connect('mongodb+srv://vmurali:vmurali@cluster0.0xis1ld.mongodb.net/?retryWrites=true&w=majority');
}
module.exports = router;
