var express = require('express');
var router = express.Router();
router.use(express.urlencoded({extended:false}))
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
    });
 /* axios.get('https://countriesnow.space/api/v0.1/countries').then(resp=>{
    console.log(resp.data);
  }
    /*let cityData = response.data;
    res.render('index', {data: cityData}); //how to get this in index/#4
    }).catch(function (error){
      //handle error
      console.log(error);
    }).then(function (){

    });*/
//)});*/

module.exports = router;

