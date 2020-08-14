function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  relacion(10,5)
}

function relacion(a,b){
  if (a>b) {
    console.log (1)
  } else if(a<b){
    console.log (-1)
  } else if (a==b){
    console.log (0)
  }
}
