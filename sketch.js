
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables para cada objeto del juego 
var ball,groundObj,leftSide,rightSide;
var world;
var radius = 40;

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
  	world = engine.world;

	//crear los cuerpos aquí(ball, groundObj, leftSide, rightSide).
	//comienza creando las opciones de tu objeto bola de papel(ball)
	//Paso 3 de tu proyecto

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(60, 665,12, ball_options);
	World.add(world,ball);

	var lados_options={

		isStatic:true
	}

	



	//Paso 6 de tu proyecto
	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1350,600,20,120);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  //crea aqui la opcion para mostrar tu objeto de pelota circular a partir de una ellipse(ball.position.x,ball.position.y,radius,radius)
  ellipse(ball.position.x,ball.position.y,20);

  //Pon el paso 5 para que tus ibjetos ground se muestren groundObj, leftSide, rightSide con la función display()
  
 groundObj.display();
 leftSide.display();
 rightSide.display();

}

/*Realiza aquí la funció KeyPressed para aplicar la fuerza a tu ball como en el paso 2 de tus pistas de tu proyecto.
Recuerda los parametros para aplicar fuerza son el objeto, la posición del objeto y la fuerza aplicada puede ser solo en x o y o en ambos,
analiza que en esta ocación quieres que la pelota se mueva a la derecha en y digamos de abajo hacia arriba*/
function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.7,y:-0.05});

		
		
	}

}


