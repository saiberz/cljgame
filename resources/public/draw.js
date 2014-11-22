var stage = new PIXI.Stage(0x6F6A99);
var WordsList = [];
var trolls = [];
var renderer = PIXI.autoDetectRenderer(500, 600);
var text = new PIXI.Text("",
                         {font:"20px Arial", fill:"white"});
var texture = PIXI.Texture.fromImage("images/traxes.png");
var hero = new PIXI.Sprite(texture);

document.getElementById("pixi").appendChild(renderer.view);
requestAnimFrame( animate );

function animate() {
    requestAnimFrame( animate );
    text.position.y += 0.2;
    renderer.render(stage);
}

hero.position.x = 250;
hero.position.y = 300;
text.position.x = Math.random()*200;
stage.addChild(text);
stage.addChild(hero);
renderer.render(stage);
