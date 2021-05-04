var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var f = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-20,width,20);

  for (var k = 0; k <=780; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2 - 17, 10, divisionHeight-25));
    console.log("division here")
  }

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
        
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
   plinkos.push(new Plinko(j,375));
  }
  
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,475));
  }

  

  


}
 


function draw() {
  background("black");
  textSize(20);
  Engine.update(engine);

 
  
  ground.display();




  

  
  for (var i = 0; i < plinkos.length; i++) {
  plinkos[i].display();   
  }
   
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
    console.log("division display here")
  }

   if(frameCount%90 === 0){
  particles.push(new Particle(random(10,800), 10, 10, 10))
     
  }
if(particles!=null){
   for(var p = 0; p < particles.length; p++){ 
      particles[p].display(random(0,255), random(0,255), random(0,255));
  }
}


  
  
 


  
}