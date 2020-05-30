class Game {
    constructor(){
    
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
    
    }
    
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form();
        form.display();
      }
    
      player1 = createSprite(100,200);
      player1.addImage("player1.png",p1img);
      player2 = createSprite(100,200);
      player2.addImage("player2.png",p2img);
      player3 = createSprite(100,200);
      player3.addImage("player3.png",p3img);
      player4 = createSprite(100,200);
      player4.addImage("player4.png",p4img);
     
    }
    
    play(){
      form.hide();
     
      Player.getPlayerInfo();
      player.GetplayersAtEnd();
       if(allPlayers !== undefined){
        background(rgb(198,135,103));
        image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);

        var index = 0;

        var x = 175 ;
        var y;
    
        for(var plr in allPlayers){
          index = index + 1 ;
              
          x = x + 200;
          
          y = displayHeight - allPlayers[plr].distance;
         // players[index-1].x = x;
          //players[index-1].y = y;
            
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            players[index - 1].shapeColor = "pink";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y;
          }
        }
    
      }
    
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
    
      if(player.distance > 3860){
        gameState = 2;
        player.rank+=1;
        Player.updateplayersatend(player.rank);
    
      }
    
      drawSprites();
    }
    
    end(){
      console.log("Game Ended");
      console.log("rank of the"+ player.name+"is"+player.rank);
     
    }
   }
   