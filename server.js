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
  
  if(dans=="gal"){
  
  
  }
  else if(dans=="L")
  {
  }
  else if(dans=="lbs"){
  
  }
  else if(dans=="kg"){
  }
  else if(dans=="mi"){
 
  
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
