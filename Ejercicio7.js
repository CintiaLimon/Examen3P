var serie = [1,2,3,4]

function setup() {
  createCanvas(400, 400);
  rota(3)
}


function rota(k){
  for(var x = 0; x<k; x++){
    serie.unshift(serie.pop())
  }
  console.log(serie)
}
