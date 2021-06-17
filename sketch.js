var n1,n2

function setup() {
  createCanvas(400, 400);
  num1=createInput();
  num1.position(50,60)
  num2=createInput();
  num2.position(200,60)
  b1=createButton("add")
  b1.position(10,200)
  b1.mousePressed(add)
  b2=createButton("multiply")
  b2.position(100,200)
  b2.mousePressed(mul)
  b3=createButton("substract")
  b3.position(200,200)
  b3.mousePressed(subs)
  b4=createButton("divide")
  b4.position(300,200)
  b4.mousePressed(divide)
  textAlign(CENTER);
  textSize(15);
  
}

function add(){
  console.log(n1+n2)
}
function mul(){
  console.log(n1*n2)
}
function subs(){
  console.log(n1-n2)
}
function divide(){
  console.log(n1/n2)
}
function draw() {
  background(220);
  text("number1", 70,50)
  n1=parseInt(num1.value())
  text("number2", 270,50)
  n2=parseInt(num2.value())
}