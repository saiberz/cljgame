var stage = new PIXI.Stage(0x6F6A99);
var WordsList = [];
var trolls = [];
var renderer = PIXI.autoDetectRenderer(1300, 600);
var text = new PIXI.Text("",
                         {font:"20px Arial", fill:"white"});

var texture = PIXI.Texture.fromImage("images/hero.png");
var texture2 = PIXI.Texture.fromImage("images/hero2.png");
var hero = new PIXI.Sprite(texture);
var hero2 = new PIXI.Sprite(texture2);

hero.scale.x = 0.5;
hero.scale.y = 0.5;

hero2.scale.x = 0.5;
hero2.scale.y = 0.5;


document.getElementById("pixi").appendChild(renderer.view);

requestAnimFrame( animate );

function animate() {
    requestAnimFrame( animate );
    text.position.x += 0.2;
    renderer.render(stage);
}

hero2.position.x = 1000;
hero2.position.y = 80;
hero.position.x = -150;
hero.position.y = 80;
text.position.y = Math.random()*200;

stage.addChild(text);
stage.addChild(hero);
stage.addChild(hero2);
renderer.render(stage);
