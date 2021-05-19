var player, playerImage;
var backgroundImage, Background;
var pickaxe, pickaxeGroup, pickaxeImage, pickaxeGroup1, pickaxeGroup2;
var gameState = "STORY"
var spaceCount = 0
var monkeyImage, monkeyGroup, monkeyGroup1, monkeyGroup2;
var Score = 0;
var Score2 = 0;
var Score3 = 0;
var HP = 15;
var maxPickaxes = 120;
var maxPickaxes1 = 110;
var maxPickaxes2 = 100;
var wolf, wolfImage, wolfGroup, wolfGroup1, wolfGroup2;
var berry, berryImage, berryGroup, berryGroup1, berryGroup2;
var boss1, bossImage
var boss1HP = 100;
var boss2, boss2Image;
var boss2HP = 150;
var boss3, boss3Image;
var boss3HP = 200;
var bossMusic, winMusic;
var resetButton, resetImg;
var Timer = 20;
var Timer1 = 20;
var Timer2 = 20;
var HP2 = 15;
var HP3 = 15;
var banana, bananaImage, bananaGroup, bananaGroup1;
var boss2Weapon, boss2WeaponIMG, ropeGroup;
var grenade, grenadeImage, grenadeGroup;
var powerUp, powerUpImg, powerUpGroup, powerUpGroup1;
var killCounter = 1;
var killCounter1 = 1;

function preload() {
  playerImage = loadImage("Images/player1.png");
  backgroundImage = loadImage("Images/jungle.jpg");
  pickaxeImage = loadImage("Images/pickaxe1.png")
  monkeyImage = loadImage("Images/Monkey.png")
  wolfImage = loadImage("Images/wolf.png");
  berryImage = loadImage("Images/berry.png");
  bossImage = loadImage("Images/boss1.png");
  bossMusic = loadSound("Images/Defeat.mp3");
  winMusic = loadSound("Images/Win.mp3");
  bananaImage = loadImage("Images/boss1Weapon.png");
  powerUpImg = loadImage("Images/powerUp.png");
  boss2Image = loadImage("Images/Boss2.png");
  boss2WeaponIMG = loadImage("Images/boss2Weapon.png")
  boss3Image = loadImage("Images/boss3.png");
  grenadeImage = loadImage("Images/boss3Weapon.png");
}

function setup() {
  createCanvas(1000, 400);

  pickaxeGroup = new Group();
  monkeyGroup = new Group();
  wolfGroup = new Group();
  berryGroup = new Group();
  bananaGroup = new Group();
  wolfGroup1 = new Group();
  berryGroup1 = new Group();
  monkeyGroup1 = new Group();
  powerUpGroup = new Group();
  ropeGroup = new Group();
  wolfGroup2 = new Group();
  monkeyGroup2 = new Group();
  berryGroup2 = new Group();
  powerUpGroup1 = new Group();
  grenadeGroup = new Group();

  Background = createSprite(0, 0);
  Background.addImage(backgroundImage);
  Background.scale = 1.5
  Background.velocityX = -5;
  Background.visible = false;

  player = createSprite(100, 200, 50, 50);
  player.addImage(playerImage);
  player.scale = 0.4
  player.visible = false;

  boss1 = createSprite(800, 0, 50, 50);
  boss1.addImage(bossImage);
  boss1.scale = 0.6;
  boss1.visible = false;

  boss2 = createSprite(200, 0, 50, 50);
  boss2.addImage(boss2Image);
  boss2.scale = 0.6;
  boss2.visible = false;

  boss3 = createSprite(200, 0, 50, 50);
  boss3.addImage(boss3Image);
  boss3.scale = 0.6;
  boss3.visible = false;
}

function draw() {
  background(255, 255, 255);


  if (spaceCount === 0) {
    gameState = "TIPS"
  }

  if (gameState === "TIPS") {
    background(0);

    drawSprites();
    textSize(32)
    fill("red")
    text("Crio's Great Rescue", 300, 50);
    text("Collect Jellies to Stay Alive", 200, 100);
    text("Stay away from the Monkeys", 200, 150);
    text("Collect The Power Ups for a Special Ability", 200, 200);
    text("Fight Bosses at the end of each level", 200, 250);
    text("What  are you waiting for ,GO RESCUE CRIO!!", 200, 300);

    textSize(18);
    fill("blue");
    text("Press Space  key to Start the Game", 650, 50)

    if (keyCode === 32) {
      gameState = "PLAY"
    }
  }

  if (gameState === "PLAY") {
    background(0);

    /*********Level 1 starts  */
    Background.visible = true;
    player.visible = true;

    if (frameCount % 60 === 0) {
      var monkey = createSprite(100, 200, 30, 30);
      monkey.x = Math.round(random(800, 950))
      monkey.y = Math.round(random(50, 260));
      monkey.addImage(monkeyImage);
      monkey.scale = 0.4
      monkey.velocityX = -5
      monkey.lifetime = 130
      monkeyGroup.add(monkey)
    }

    if (frameCount % 150 === 0) {
      var wolf = createSprite(100, 200, 30, 30);
      wolf.x = Math.round(random(800, 950))
      wolf.y = Math.round(random(50, 260));
      wolf.addImage(wolfImage);
      wolf.scale = 0.4
      wolf.velocityX = -8
      wolf.lifetime = 130
      wolfGroup.add(wolf)
    }

    if (frameCount % 300 === 0) {
      var berry = createSprite(100, 200, 30, 30);
      berry.x = Math.round(random(500, 700))
      berry.y = Math.round(random(50, 260));
      berry.addImage(berryImage);
      berry.scale = 0.2
      berry.velocityX = -2
      berry.lifetime = 110
      berryGroup.add(berry)
    }

    if (Background.x < 400) {
      Background.x = width / 2
      Background.x = Background.width / 2;
    }

    if (Background.velocityX === -5) {
      Score++
    }

    if (mouseX > 500) {
      player.x = 200;
      player.y = 150;
    }

    if (mouseX <= 500) {
      player.x = World.mouseX;
      player.y = World.mouseY;
    }

    if (mouseY >= 275) {
      player.x = 200;
      player.y = 150;

    }

    //Boss Appeares
    if (Score >= 750) {
      // bossMusic.play();
      background.velocityX = 0;
      berryGroup.destroyEach();
      boss1.visible = true;

      wolfGroup.destroyEach();
      monkeyGroup.destroyEach();

      if (frameCount % 45 === 0) {
        boss1.x = Math.round(random(500, 950))
        boss1.y = Math.round(random(50, 250))

        banana = createSprite(boss1.x, boss1.y, 30, 30);
        banana.addImage(bananaImage);
        banana.scale = 0.2
        banana.velocityX = -8
        banana.lifetime = 110
        bananaGroup.add(banana)
      }
    }

    // game Controls
    if (keyDown("SPACE")) {
      createPickaxes();
    }

    if (pickaxeGroup.isTouching(monkeyGroup)) {
      monkeyGroup.destroyEach();
      killCounter = killCounter + 1
    }

    if (pickaxeGroup.isTouching(boss1)) {
      boss1HP = boss1HP - 10
      pickaxeGroup.destroyEach();

    }

    if (pickaxeGroup.isTouching(wolfGroup)) {
      wolfGroup.destroyEach();
      killCounter = killCounter + 1
    }

    if (pickaxeGroup.isTouching(berryGroup)) {
      berryGroup.destroyEach();
      HP = HP + 3;
    }

    if (wolfGroup.isTouching(player)) {
      HP = HP - 2
      wolfGroup.destroyEach();
    }

    if (monkeyGroup.isTouching(player)) {
      Score = 0
      monkeyGroup.destroyEach();
    }

    if (bananaGroup.isTouching(player)) {
      bananaGroup.destroyEach();
      HP = HP - 3
    }


    if (killCounter % 10 === 0) {
      killCounter = 1;
      maxPickaxes = maxPickaxes + 10
    }
    //Level1 Win Screen
    if (boss1HP <= 0) {

      background(0);
      winMusic.play();
      wolfGroup.visible = false;
      berryGroup.visible = false;
      monkeyGroup.visible = false;
      boss1.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;
      Score = 0;

      textSize(32);
      fill("red");
      text("Level 1 Cleared", 450, 250)
      text("You Win", 450, 150)
      text("Timer:" + Timer, 450, 100)


      if (frameCount % 10 === 0) {
        Timer--

      }

      if (Timer <= 0) {
        gameState = "PLAY2"
        winMusic.stop();
      }
    }

    //Level2 Lose Screen
    if (HP <= 0 || maxPickaxes <= 0) {

      background(0);
      bossMusic.play();
      wolfGroup.visible = false;
      berryGroup.visible = false;
      monkeyGroup.visible = false;
      boss1.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;

      textSize(32);
      fill("red");
      text("You Lose", 500, 250);
      text("Timer:" + Timer, 500, 150)

      if (frameCount % 10 === 0) {
        Timer--

      }

      if (Timer === 0) {
        gameState = "PLAY"
        bossMusic.stop();
        boss1HP = 100
        maxPickaxes = 120;
        HP = 15;
        Score = 0;
        player.visible = true;
        wolfGroup.visible = true;
        berryGroup.visible = true;
        monkeyGroup.visible = true;
      }
    }
    drawSprites();

    fill("yellow")
    text("Score:" + Score, 550, 50)
    text("HP:" + HP, 400, 50)
    text("MaxPickaxes:" + maxPickaxes, 750, 50)
    text("Level 1", 250, 50)
    text("Kills:" + killCounter, 100, 350)

    if (Score >= 750) {
      text("BossHP:" + boss1HP, boss1.x - 50, boss1.y - 75)
    }
  }

  if (gameState === "PLAY2") {
    background(255, 255, 255);


    boss1.destroy();
    maxPickaxes = 110;
    HP = 15;
    Score2++;

    player.visible = true;
    wolfGroup.visible = true;
    berryGroup.visible = true;
    monkeyGroup.visible = true;
    /*********Level 2 starts  */
    Background.visible = true;

    if (frameCount % 50 === 0) {
      var monkey = createSprite(100, 200, 30, 30);
      monkey.x = Math.round(random(800, 950))
      monkey.y = Math.round(random(50, 260));
      monkey.addImage(monkeyImage);
      monkey.scale = 0.4
      monkey.velocityX = -5
      monkey.lifetime = 130
      monkeyGroup1.add(monkey)
    }

    if (frameCount % 125 === 0) {
      var wolf = createSprite(100, 200, 30, 30);
      wolf.x = Math.round(random(800, 950))
      wolf.y = Math.round(random(50, 260));
      wolf.addImage(wolfImage);
      wolf.scale = 0.4
      wolf.velocityX = -8
      wolf.lifetime = 130
      wolfGroup1.add(wolf)
    }

    if (frameCount % 350 === 0) {
      var berry = createSprite(100, 200, 30, 30);
      berry.x = Math.round(random(500, 700))
      berry.y = Math.round(random(50, 260));
      berry.addImage(berryImage);
      berry.scale = 0.2
      berry.velocityX = -2
      berry.lifetime = 110
      berryGroup1.add(berry)
    }

    if (frameCount % 400 === 0) {
      var powerUp = createSprite(100, 200, 30, 30);
      powerUp.x = Math.round(random(500, 700))
      powerUp.y = Math.round(random(50, 260));
      powerUp.addImage(powerUpImg);
      powerUp.scale = 0.2
      powerUp.velocityX = -2
      powerUp.lifetime = 110
      powerUpGroup.add(powerUp);
    }


    if (Background.x < 400) {
      Background.x = width / 2
      Background.x = Background.width / 2;
    }

    if (HP >= 0) {
      Score++
    }

    if (mouseX > 500) {
      player.x = 200;
      player.y = 150;
    }

    if (mouseX <= 500) {
      player.x = World.mouseX;
      player.y = World.mouseY;
    }

    if (mouseY >= 275) {
      player.x = 200;
      player.y = 150;

    }

    //Boss2  Appeares
    if (Score2 >= 900) {
      boss2.visible = true;
      background.velocityX = 0;
      berryGroup1.destroyEach();
      wolfGroup1.destroyEach();
      monkeyGroup1.destroyEach();
      powerUpGroup.destroyEach();


      if (frameCount % 65 === 0) {
        boss2.x = Math.round(random(500, 950))
        boss2.y = Math.round(random(50, 250))

        boss2Weapon = createSprite(boss2.x, boss2.y, 30, 30);
        boss2Weapon.addImage(boss2WeaponIMG);
        boss2Weapon.scale = 0.4
        boss2Weapon.velocityX = -8
        boss2Weapon.lifetime = 110
        ropeGroup.add(boss2Weapon)
      }
    }
    // game Controls
    if (keyDown("SPACE")) {
      createPickaxes();
      maxPickaxes1--
    }

    if (pickaxeGroup.isTouching(monkeyGroup1)) {
      monkeyGroup1.destroyEach();
      killCounter1 = killCounter1 + 1
    }

    if (pickaxeGroup.isTouching(wolfGroup1)) {
      wolfGroup1.destroyEach();
      killCounter1 = killCounter1 + 1
    }

    if (pickaxeGroup.isTouching(berryGroup1)) {
      berryGroup1.destroyEach();
      HP2 = HP2 + 3;
    }

    if (pickaxeGroup.isTouching(powerUpGroup)) {
      powerUpGroup.destroyEach();
      HP2 = HP2 + 5;
      Score2 = Score2 + 100;
    }

    if (pickaxeGroup.isTouching(boss2)) {
      pickaxeGroup.destroyEach();
      boss2HP = boss2HP - 12
      HP2 = HP2 + 2;

    }

    if (wolfGroup1.isTouching(player)) {
      HP2 = HP2 - 2
      wolfGroup1.destroyEach();
    }

    if (monkeyGroup1.isTouching(player)) {
      Score2 = 0
      monkeyGroup1.destroyEach();
    }

    if (ropeGroup.isTouching(player)) {
      HP2 = HP2 - 5
      ropeGroup.destroyEach();
    }

    if (killCounter1 % 10 == 0) {
      killCounter1 = 1;
      maxPickaxes1 = maxPickaxes1 + 10
    }
    //Level1 Win Screen
    if (boss2HP <= 0) {

      background(0);
      winMusic.play();
      wolfGroup.visible = false;
      berryGroup.visible = false;
      monkeyGroup.visible = false;
      boss2.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;
      ropeGroup.destroyEach();

      textSize(32);
      fill("red");
      text("Level 2 Cleared", 450, 250)
      text("You Win", 450, 150)
      text("Timer:" + Timer1, 450, 100)


      if (frameCount % 10 === 0) {
        Timer1--

      }

      if (Timer1 <= 0) {
        winMusic.stop();

        gameState = "PLAY3"
        /* gameState="PLAY2"
           boss1HP=100
           maxPickaxes=75;
           HP=15;
           Score=0;
           player.visible=true;
           wolfGroup.visible=true;
           berryGroup.visible=true;
           monkeyGroup.visible=true;*/
      }
    }

    //Level2 Lose Screen
    if (HP2 <= 0 || maxPickaxes1 <= 0) {

      background(0);
      bossMusic.play();
      wolfGroup1.visible = false;
      berryGroup1.visible = false;
      monkeyGroup1.visible = false;
      boss2.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;
      ropeGroup.destroyEach();

      textSize(32);
      fill("red");
      text("You Lose", 500, 250);
      text("Timer:" + Timer1, 500, 150)

      if (frameCount % 10 === 0) {
        Timer1--

      }

      if (Timer1 <= 0) {
        background(255, 255, 255)
        bossMusic.stop();
        gameState = "PLAY3"

        player.visible = true;
        wolfGroup1.visible = true;
        berryGroup1.visible = true;
        monkeyGroup1.visible = true;
        powerUpGroup.visible = true;
      }
    }
    drawSprites();

    fill("yellow")
    text("Score:" + Score2, 550, 50)
    text("HP:" + HP2, 400, 50)
    text("MaxPickaxes:" + maxPickaxes1, 750, 50)
    text("Level 2", 250, 50)
    text("Kills:" + killCounter1, 100, 350)

    if (Score2 >= 900) {
      text("BossHP:" + boss2HP, boss2.x - 50, boss2.y - 75);
    }
  }


  if (gameState === "PLAY3") {
    background(255, 255, 255);


    boss1.destroy();
    boss2.destroy();
    maxPickaxes1 = 110;
    Score3++;

    player.visible = true;
    wolfGroup.visible = true;
    berryGroup.visible = true;
    monkeyGroup.visible = true;
    /*********Level 2 starts  */
    Background.visible = true;

    if (frameCount % 45 === 0) {
      var monkey = createSprite(100, 200, 30, 30);
      monkey.x = Math.round(random(800, 950))
      monkey.y = Math.round(random(50, 260));
      monkey.addImage(monkeyImage);
      monkey.scale = 0.4
      monkey.velocityX = -5
      monkey.lifetime = 130
      monkeyGroup2.add(monkey)
    }

    if (frameCount % 100 === 0) {
      var wolf = createSprite(100, 200, 30, 30);
      wolf.x = Math.round(random(800, 950))
      wolf.y = Math.round(random(50, 260));
      wolf.addImage(wolfImage);
      wolf.scale = 0.4
      wolf.velocityX = -8
      wolf.lifetime = 130
      wolfGroup2.add(wolf)
    }

    if (frameCount % 350 === 0) {
      var berry = createSprite(100, 200, 30, 30);
      berry.x = Math.round(random(500, 700))
      berry.y = Math.round(random(50, 260));
      berry.addImage(berryImage);
      berry.scale = 0.2
      berry.velocityX = -2
      berry.lifetime = 110
      berryGroup2.add(berry)
    }

    if (frameCount % 400 === 0) {
      var powerUp = createSprite(100, 200, 30, 30);
      powerUp.x = Math.round(random(500, 700))
      powerUp.y = Math.round(random(50, 260));
      powerUp.addImage(powerUpImg);
      powerUp.scale = 0.2
      powerUp.velocityX = -2
      powerUp.lifetime = 110
      powerUpGroup1.add(powerUp);
    }


    if (Background.x < 400) {
      Background.x = width / 2
      Background.x = Background.width / 2;
    }


    if (mouseX > 500) {
      player.x = 200;
      player.y = 150;
    }

    if (mouseX <= 500) {
      player.x = World.mouseX;
      player.y = World.mouseY;
    }

    if (mouseY >= 275) {
      player.x = 200;
      player.y = 150;

    }

    //Boss2  Appeares
    if (Score3 >= 1000) {
      boss3.visible = true;
      background.velocityX = 0;
      berryGroup2.destroyEach();
      wolfGroup2.destroyEach();
      monkeyGroup2.destroyEach();
      powerUpGroup1.destroyEach();


      if (frameCount % 55 === 0) {
        boss3.x = Math.round(random(500, 950))
        boss3.y = Math.round(random(50, 250))

        grenade = createSprite(boss3.x, boss3.y, 30, 30);
        grenade.addImage(grenadeImage);
        grenade.scale = 0.3
        grenade.velocityX = -8
        grenade.lifetime = 110
        grenadeGroup.add(grenade)
      }
    }
    // game Controls
    if (keyDown("SPACE")) {
      maxPickaxes2--
      createPickaxes();

    }

    if (pickaxeGroup.isTouching(monkeyGroup2)) {
      monkeyGroup2.destroyEach();
      killCounter1 = killCounter1 + 1
    }

    if (pickaxeGroup.isTouching(wolfGroup2)) {
      wolfGroup2.destroyEach();
      killCounter1 = killCounter1 + 1
    }

    if (pickaxeGroup.isTouching(berryGroup2)) {
      berryGroup2.destroyEach();
      HP3 = HP3 + 3;
    }

    if (pickaxeGroup.isTouching(boss3)) {
      pickaxeGroup.destroyEach();
      boss3HP = boss3HP - 15
    }
    if (pickaxeGroup.isTouching(powerUpGroup1)) {
      powerUpGroup1.destroyEach();
      HP3 = HP3 + 5;
      Score3 = Score3 + 100;
    }

    if (wolfGroup2.isTouching(player)) {
      HP3 = HP3 - 3
      wolfGroup2.destroyEach();
    }

    if (monkeyGroup2.isTouching(player)) {
      Score3 = 0
      monkeyGroup2.destroyEach();
    }

    if (grenadeGroup.isTouching(player)) {
      maxPickaxes1 = maxPickaxes1 - 10
      grenadeGroup.destroyEach();
    }

    if (killCounter1 % 10 === 0) {
      killCounter1 = 1;
      maxPickaxes1 = maxPickaxes1 + 15
    }
    //Level1 Win Screen
    if (boss3HP <= 0) {

      background(0);
      winMusic.play();
      wolfGroup.visible = false;
      berryGroup.visible = false;
      monkeyGroup.visible = false;
      boss2.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;
      ropeGroup.destroyEach();

      textSize(32);
      fill("red");
      text("Level 3 Cleared", 450, 250)
      text("You Win", 450, 150)
      text("Timer:" + Timer2, 450, 100)


      if (frameCount % 10 === 0) {
        Timer2--

      }

      if (Timer2 <= 0) {
        HP3 = 999;
        maxPickaxes1 = 999;
        winMusic.stop();
        player.visible = false;
        berryGroup2.visible = false;
        wolfGroup2.visible = false;
        boss3.destroy();
        monkeyGroup2.visible = false;
        powerUpGroup1.visible = false;
        grenadeGroup.destroyEach();

        background(100);
        text("GAME COMPLETED :)", 300, 150)
        text("Congrats!! You've found Crio", 300, 200);
        text("Thanks a lot for playing my Game", 400, 240);
        text("Hope you enjoyed it <33", 400, 280);
      }
    }

    //Level2 Lose Screen
    if (HP3 <= 0 || maxPickaxes1 <= 0) {

      background(0);
      bossMusic.play();
      wolfGroup1.visible = false;
      berryGroup1.visible = false;
      monkeyGroup1.visible = false;
      boss2.visible = false;
      player.visible = false;
      pickaxeGroup.visible = false;
      Background.visible = false;
      grenadeGroup.destroyEach();

      textSize(32);
      fill("red");
      text("You Lose", 500, 250);
      text("Timer:" + Timer1, 500, 150)

      if (frameCount % 10 === 0) {
        Timer2--

      }

      if (Timer2 <= 0) {
        background(255, 255, 255)
        bossMusic.stop();
        gameState = "PLAY3"
        boss3HP = 200;
        maxPickaxes1 = 110;
        HP3 = 15;
        Score3 = 0;
        player.visible = true;
        wolfGroup2.visible = true;
        berryGroup2.visible = true;
        monkeyGroup2.visible = true;
        powerUpGroup1.visible = true;
      }
    }
    drawSprites();

    fill("yellow")
    text("Score:" + Score3, 550, 50)
    text("HP:" + HP3, 400, 50)
    text("MaxPickaxes:" + maxPickaxes2, 750, 50)
    text("Level 3", 250, 50)
    text("Kills:" + killCounter1, 100, 350)

    if (Score3 >= 1000) {
      text("BossHP:" + boss3HP, boss3.x - 50, boss3.y - 75)
    }

  }
}

function createPickaxes() {
  pickaxe = createSprite(player.x, player.y, 30, 50);
  pickaxe.addImage(pickaxeImage);
  pickaxe.velocityX = 10;
  pickaxe.scale = 0.2;
  pickaxe.lifetime = 100;
  pickaxeGroup.add(pickaxe);
  maxPickaxes--
}
