var thickness,wall;

var bullet,speed,weight;

var damage;

function setup(){
  createCanvas(1600,800);
  
  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,height/2);
  
  thickness = Math.round(random(22,83));
  
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
   
 
   console.log(speed);
   console.log(weight);
   console.log(thickness);
  
 
}

function draw(){
  background("white");
   damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  
  bullet.velocityX = speed ;
  
  
  bullet.shapeColor = "brown"; 
  
    
    if(damage < 10){
    
    wall.shapeColor = "red";
    
  
    } 
  
  if(damage > 10 ){
    
    wall.shapeColor = "green";
    
  }
  

  
  if(bullet.x - wall.x > bullet.width/2 + wall.width/2){
    
    
    bullet.velocityX = 0;  
    
  }
  
   
  
  
  
  text("Damage : " + damage,1300,50);
  
  
  drawSprites();
}



function collided(wall,bullet){
  
 
  
  
  
  
  
}







