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
  var peg=/[a-zA-Z]+/;
  var ans=data.match(reg);
  var dans=data.match(peg)
  console.log(ans[0]);
  console.log(dans[0])
  var initNum=Number(ans[0]);
  var finNum=0;
  var st1="";
  var st2="";
  var co="";
  if(dans[0]=="gal"){
  co="L";
  st1="Gallon";
    st2="Litre";
    finNum=initNum*3.78541;
  }
  else if(dans[0]=="L")
  {
    st1="Litre";
    st2="Gallon";
    co="gal";
    finNum=initNum/3.78541;
    
  }
  else if(dans[0]=="lbs"){
  st1="Pound";
    st2="Kilograms"
    co="kg"
    finNum=initNum*0.453592
  }
  else if(dans[0]=="kg"){
    st2="Pounds";
    st1="Kilograms"
    co="lbs"
    finNum=initNum/0.453592
  }
  else if(dans[0]=="mi"){
 st1="Miles";
    st2="Kilometers";
    co="km";
    finNum=initNum* 1.60934;
  
  }
  else if(dans[0]=="km"){
     st2="Miles";
    st1="Kilometers";
    co="mi";
    finNum=initNum/ 1.60934;
  }
  
  else{
    res.json({error:"error input bruh"})
  }
  
  res.json({
  initNum: initNum, initUnit: dans[0], returnNum: finNum, returnUnit: co, string: initNum.toString()+" "+st1+ " converts to "+finNum.toString()+" " +st2
  
  
  })

})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
