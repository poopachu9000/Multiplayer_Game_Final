class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    main = createSprite(200,500);
    main.addAnimation("running",main_run);
    main.addAnimation("fall",main_fall);
    main.addAnimation("hurt",main_hurt);
    main.addAnimation("jump",main_jump)
    main.addAnimation("main_idle",main_idle)
    main.addAnimation("running2",main_run2);
    main.addAnimation("fall2",main_fall2);
    main.addAnimation("hurt2",main_hurt2);
    main.addAnimation("jump2",main_jump2)
    main.addAnimation("main_idle2",main_idle2)
    main.scale = 3;
    
    player2 = createSprite(800,500);
    player2.addAnimation("alien_run", alien_run);
    player2.addAnimation("alien_roll", alien_roll);
    player2.addAnimation("alien_idle", alien_idle);
    player2.addAnimation("alien_bite", alien_bite);
    player2.addAnimation("alien_run2", alien_run2);
    player2.addAnimation("alien_roll2", alien_roll2);
    player2.addAnimation("alien_idle2", alien_idle2);
    player2.addAnimation("alien_bite2", alien_bite2);
    player2.scale = 3;
    players=[main,player2];

    player.health =20;
bug = createSprite(600,200,20,20)
bug.addAnimation("bugIMG",bugIMG);
bug.scale = 2;
        }
    
    play(){
        switch(image1ref){
            
            case 1: 
            if(GO<0){
            main.changeAnimation("main_idle",main_idle);
            }
            break;
            
            case 2:
                if(GO<0){
                    main.changeAnimation("running", main_run);
                }
                break;
              case 3:
                if(GO<0){
            main.changeAnimation("jump",main_jump);
                }
            break;
            case 4:
                if(GO<0){
                    main.changeAnimation("fall", main_fall);
                }
                    break;
            case 5: main.changeAnimation("hurt", main_hurt);
            break;
            case 6: 
            if(GO<0){
            main.changeAnimation("main_idle2",main_idle2);
            }
            break;
            case 7: 
            if(GO<0){
            main.changeAnimation("running2",main_run2);
            }
            break;
            case 8: 
            if(GO<0){
            main.changeAnimation("jump2",main_jump2);
            }
            break;
            case 9: 
            if(GO<0){
            main.changeAnimation("fall2",main_fall2);
            }
            break;
            case 10: main.changeAnimation("hurt2", main_hurt2);
            break;
        }
        switch(image2ref){
            case 1: player2.changeAnimation("alien_idle",alien_idle);
            break;
            case 2: player2.changeAnimation("alien_run", alien_run);
            break;
            case 3: player2.changeAnimation("alien_roll",alien_roll);
            break;
            case 4: player2.changeAnimation("alien_bite",alien_bite);
            break;
            case 5: player2.changeAnimation("alien_idle2",alien_idle2);
            break;
            case 6: player2.changeAnimation("alien_run2", alien_run2);
            break;
            case 7: player2.changeAnimation("alien_roll2",alien_roll2);
            break;
            case 8: player2.changeAnimation("alien_bite2",alien_bite2);
            break;
        }
        player.getImage1();
        player.getImage2();
        player.getBugX();
        player.getBugY();

                form.hide();

                Player.getPlayerInfo();
                 image(back1, 0, 0, 1000, 800);
                 var x =0;
                 var y=0;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500-allPlayers[plr].height;
                  
                     players[index -1].x = x;
                     players[index - 1].y = y;
     

                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                         textSize(25);
                         fill("white");
                         text("Player 1 :" +(allPlayers.player1.health + allPlayers.player2.health),50,50);
                    //    text("Player 2 :" + allPlayers.player2.health, 50, 100);
                 
                 }
                 
                 if(GO > 0){
                    main.changeAnimation("hurt", main_hurt);
                 image1ref = 5;
                  player.updateImage1(image1ref);
GO -=.1
                 }
               
                 if(main.isTouching(bug)){
                     console.log("touch")
                    player.health =player.health-1;
                 player.update();
                GO = .5;
                    
                
                }
if(bugYref <-10 || bugYref > 600 || bugXref <0 || bugXref >600){
    console.log("OP")
    if(moveRand>0){
        bugYref = 30;
    }
    if(moveRand<0){
        bugYref = 500;
    }
       bugXref = random(30,600);
   
}

                 if (keyIsDown(DOWN_ARROW) && player.index === 2) {
                    // player.x += 10
                    if(dir === 0){
                             image2ref = 4;
                             player.updateImage2(image2ref);  
                    }                 
                    if(dir === 1){
                        image2ref = 8;
                        player.updateImage2(image2ref);  
               }                 
if(player2.isTouching(bug)){
    moveRand = 0;
    randCount = 10;
    bugYref = 30;
    bugXref = random(30,600);
}


                     player.update();
                 }
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                   // player.x += 10
                   

                    player.distance -= 11
                    if(player.index==1){
                        dir = 0;
                        if(player.height<100){
                            image1ref = 2;
                        player.updateImage1(image1ref);
                        }
                        }
                        if(player.index==2){
                            dir = 0;
       
                            image2ref = 2;

                            player.updateImage2(image2ref);                   
                             }
                    player.update();
                }
      
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                  //  player.x -= 10
                    player.distance += 10
                    if(player.index==1){
                       dir = 1;
                        if(player.height<100){
                        image1ref = 7;
                        player.updateImage1(image1ref);
                        }
                        }
                        if(player.index==2){
                            dir = 1;
                            image2ref = 6;
                         player.updateImage2(image2ref);    
                                                }
                    player.update();
                }
                if (keyIsDown(UP_ARROW) && player.index !== null && player.fall === 0) {
                    //  player.x -= 10
                    if(player.index==1 ){
                        if(dir === 0){
                          image1ref = 3;
                        player.updateImage1(image1ref);
                        }else{
                            image1ref = 8;
                            player.updateImage1(image1ref);
                        }
                    }
                    if(player.index==2){
                        if(dir === 0){
                        image2ref = 3;
                        player.updateImage2(image2ref);  
                        }
                        if(dir === 1){
                            image2ref = 7;
                            player.updateImage2(image2ref);  
                            }
                                         }
                      player.height += 20
                      player.update();
                  }

                  if (player.index !== null) {
                  if(player.height>100){
player.height-=7
player.update();
                } else{
                    //Error in not switching to idle seems to be linked to switching tabs
                        if(player.index==2 && keyIsDown(LEFT_ARROW) == false && keyIsDown(RIGHT_ARROW) == false && keyIsDown(DOWN_ARROW) == false){
                            if(dir === 0){
                                image2ref = 1;
                                player.updateImage2(image2ref);   
                                               }
                                               if(dir === 1){
                                                image2ref = 5;
                                                player.updateImage2(image2ref);   
                                               }  
                                                 }
                        if(player.index==1 && keyIsDown(LEFT_ARROW) == false && keyIsDown(RIGHT_ARROW) == false ){
                            if(dir === 0){
                                image1ref = 1;
                                player.updateImage1(image1ref);   
                                               }
                                               if(dir === 1){
                                                image1ref = 6;
                                                player.updateImage1(image1ref);   
                                               }
                        }
                        
                    player.fall = 0;
                    down=0;
                }
                if(player.height>100 && keyIsDown(UP_ARROW) == false){
                    player.fall = 1;
                                    }
                if(player.height>350){
                    player.fall = 1;
                }
            }

if(player.fall === 1){
    if(dir === 0){
    image1ref = 4;
    player.updateImage1(image1ref);
    }
    if(dir === 1){
        image1ref = 9;
        player.updateImage1(image1ref);
        }
}

        if(player.index ===1){
                 if (frameCount % 15 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = random(4,8);
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("part1",part1);
                         break;
                         case 2: fruits.addImage("part2", part2);
                         break;
                         case 3: fruits.addImage("part3", part3);
                         break;
                         case 4: fruits.addImage("part4", part4);
                         break;
                         case 5: fruits.addImage("part5", part5);
                         break;
                         case 6: fruits.addImage("part6",part6);
                         break;
                         case 7: fruits.addImage("part7", part7);
                         break;
                         case 8: fruits.addImage("part8", part8);
                         break;
                         case 9: fruits.addImage("part9", part9);
                         break;
                         case 10: fruits.addImage("part10", part10);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }
                }

                if(player.index ===2){
                    if (frameCount % 30 === 0) {
                        fruits = createSprite(random(100, 1000), 0, 50, 50);
                        fruits.scale = 3;
                        fruits.velocityY = random(4,8);;
                        var rand = Math.round(random(1,4));
                        switch(rand){
                            case 1: fruits.addImage("ast1",ast1);
                            break;
                            case 2: fruits.addImage("ast2", ast2);
                            break;
                            case 3: fruits.addImage("ast3", ast3);
                            break;
                            case 4: fruits.addImage("ast4", ast4);
                            break;
                        }
                        fruitGroup.add(fruits);
                        
                    }
                   }
                
                  if (player.index ===1) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(player2)) {
                            // fruitGroup.get(i).destroy();
                            fruitGroup.get(i).destroy();
                        
                             
                             }
                        if (fruitGroup.get(i).isTouching(players)) {
                           // fruitGroup.get(i).destroy();
                            if(keyIsDown(DOWN_ARROW) && player.index !== null){
                            player.health =player.health+20;
                            
                           fruitGroup.get(i).destroy();
                            
                            }
                            player.update();
                            
                        }
                        
                    }
                }
             
                if (player.index ===2) {
                    for (var i = 0; i < fruitGroup.length; i++) {
                        if (fruitGroup.get(i).isTouching(player2)) {
                           // fruitGroup.get(i).destroy();
                            if(keyDown(DOWN_ARROW)){
                                player.health += 30;
                            }else{
                                player.health =player.health-20;

                            }
                           fruitGroup.get(i).destroy();
                            
                            }
                            player.update();
                            
                        
                        
                    }
                }
                if(frameCount % randCount === 0){
                    
                    bugXref += moveRand;
                    player.updateBugX(bugXref);
                }
                if(frameCount % 100 === 0){   
                    moveRand = Math.round(random(-12,12));
                randCount = Math.round(random(1,3))
                }
                if(frameCount % randCount2 === 0){
                    
                    bugYref += moveRand;
                    player.updateBugY(bugYref);
                }
                if(frameCount % 200 === 0){

                randCount2 = Math.round(random(1,3))
                }
        if(player.health <-15){
            gameState = 2;
game.update(2);
        
        }
        if (frameCount % 3 === 0 && player.index === 1) {
            player.health =player.health-1;
            player.update();
        }

    }

    end(){
       
    }
}
