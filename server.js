// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bp=require('body-parser');
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/convert',function(req,res,next){

  var data=req.query.str;
  var reg=/[0-9]+/;
  var peg=/[a-z A-Z]+/;
  var ans=data.match(reg);
  var dans=data.match(peg)
  console.log(ans[0]);
  console.log(dans[0])
  var initNum=ans[0].toNumber();
  var finNum=0;
  var st1="";
  var st2="";
  var co="";
  if(dans=="gal"){
  co="L";
  st1="Gallon";
    st2="Litre";
    finNum=initNum*3.78541;
  }
  else if(dans=="L")
  {
    st1="Litre";
    st2="Gallon";
    co="gal";
    finNum=initNum/3.78541;
    
  }
  else if(dans=="lbs"){
  st1="Pound";
    st2="Kilograms"
    co="kg"
    finNum=initNum*0.453592
  }
  else if(dans=="kg"){
    st2="Pound";
    st1="Kilograms"
    co="lbs"
    finNum=initNum/0.453592
  }
  else if(dans=="mi"){
 st1="Miles";
    st2="Kilometers";
    co="mi
  
  }
  else if(dans=="km"){
  }
  
  else{
  }
  

})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
