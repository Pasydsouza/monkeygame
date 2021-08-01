var back, b_img;
var monkey,monkey_;
var banana, banana_;
var rock,rock_;
var invi;
var score=0;
var gameState = 'play';
var rockGroup;
var earnGroup;

function preload()
{
  
 b_img = loadImage('bac.jpg'); 
  
  rock_ = loadImage('stone.png'); 
  
  banana_ = loadImage('banana.png'); 
  
 monkey_ = loadAnimation ('Monkey_01.png','Monkey_02.png','Monkey_03.png','Monkey_04.png','Monkey_05.png','Monkey_06.png','Monkey_07.png','Monkey_08.png','Monkey_09.png','Monkey_10.png');

}

function setup()
{
 createCanvas(500,500)

 back=createSprite(375,150,10,10);
 back.addImage('back',b_img);  
 back.scale = 1.3;
  
 monkey= createSprite(70,360,10,10);
  monkey.addAnimation('monkey',monkey_);  
 monkey.scale = 0.17;
  
  invi = createSprite(250,435,500,50);
  invi.visible = false; 
  
  rockGroup= new Group();
  earnGroup= new Group();
  
}

function draw()
{
 background('#59c414');
                       
 eat()
 obstacle()
  
  back.velocityX = -5;
  if (back.x<120)
  {
   back.x = 300;   
  }
  
if (keyDown("space")&& monkey.y >= 350)
{
  monkey.velocityY = -18.5;
}

// GRAVITY
monkey.velocityY = monkey.velocityY + 0.8;
  
   if (monkey.isTouching(rockGroup))
    {
      monkey.scale = monkey.scale-0.02;
      rockGroup.destroyEach();
      score = score-1;
    }
  
  if (monkey.isTouching(earnGroup))
    {
      monkey.scale = monkey.scale+0.02;
      earnGroup.destroyEach();
      score = score+1;
    }
  
  monkey.collide(invi);
 drawSprites();
  text("Score:"+score,350,30);
}

function eat ()
{
  if (frameCount%150===0){
 banana=createSprite(550,random(180,250),10,10);
 banana.addImage('banana',banana_);
 banana.scale = 0.07;
 banana.velocityX = -5; 
    earnGroup.add(banana);
  }
}

function obstacle ()
{
  
  if (frameCount%132===0){
 rock=createSprite(550,400,10,10);
 rock.addImage('rock',rock_);
 rock.scale = 0.07;
 rock.velocityX = -5; 
    rock.scale = random(0.15,0.09) 
    rockGroup.add(rock);
  }
}