
var num = "";
var num2 = "";
var action = "";
var result = null;
var isFraction = false;
var haveJustCalculated = false;


function numBtnClicked(value){
  if(num == "" && num2 !="")
    document.getElementById('windowText').textContent = "";
  if(num=="" && value=="0")
    {alert("number cannot start with 0");}
  else if(num.length>9)
      {alert("number cannot have more than 10 digits")}
  else {
    num += value;
    haveJustCalculated = false;
    document.getElementById('windowText').textContent = num;}
}

function btnClicked(value){
  if(num =="" && !haveJustCalculated){
    alert("input a number first")
  }
  else if(num2 !="")
    {
      equalClicked();
      action = value;
      isFraction = false;
    }
  else{
  action = value;
  isFraction = false;

  num2 = num;
  num = "";
  document.getElementById('windowText').textContent = action;
}
}

function equalClicked(){
  if(num!="" && num2!="" && action!=""){
    switch(action){
      case "+": result = Number(num2) + Number(num); break;
      case "x": result = Number(num2) * Number(num); break;
      case "-": result = Number(num2) - Number(num); break;
      case "/": result = Number(num2) / Number(num); break;
    }
    if(result % 1 != 0)
    {num2 = result.toFixed(3).toString();}
    else{
      num2 = result.toFixed(0).toString();
    }
    document.getElementById('windowText').textContent = num2;
    haveJustCalculated = true;
    isFraction = false;
    num = "";
  }
}

function clearClicked(value){
  num = "";
  action = "";
  num2 = "";
  document.getElementById('windowText').textContent = num;
  isFraction = false;
}

function dotClicked(value){
  if(num=="")
  {alert("number cannot start with .");}
  else if (isFraction)
  {alert("wrong format");}
  else if(num.length>9){
  alert("number cannot have more than 10 digits");
  }
  else{
    isFraction = true;
    num += value;
    document.getElementById('windowText').textContent = num;
}
}
