var config = {
    width: 700,
    height: 700,
    renderer: Phaser.AUTO,
    transparent:true,
    parent:'phaser_board',
    state: {
        preload: preload,
        create: create,
        update:update
    }
}
var game = new Phaser.Game(config);
var sprites;
var octopusNum=4;
var blockPosx=new Array(520,400,225,50,50,50,50,225,400,400,225,225,400,575,575,575,575);
var blockPosy=new Array(575,575,575,575,400,225,50,50,50,225,225,400,400,0,100,200,300);
var moveSpeedx=3;
var moveSpeedy=5;
var isMove=false;
var isInJail=true;
var octopusId=0;//要移动的章鱼id
// var startBlockId=0;
var currBlockId=0;//当前的块id
var desBlockId=5;//目的地块id
function preload() {
    //  Here we load the Starling Texture Atlas and XML file
    game.load.atlasXML('octopus0', '../img/phaser_area/starling atlas/octopus.png', '../img/phaser_area/starling atlas/octopus.xml');

}

function create() {
    //  Create our octopus
    initSprites(octopusNum);
    console.log("create()");
}

function update() {
    // getOctopus(0).body.x-=moveSpeed;
    if(isInJail){
        inJail(0);
        inJail(1);
        inJail(2);
        inJail(3);
        isInJail=false;
    }
    if(isMove){
        // console.log(octopusId);
        var currMoveOctopus=getOctopus(octopusId);
        // currMoveOctopus.body.x-=0.5;
        if(currBlockId==0){
            if (currMoveOctopus.body.x >= blockPosx[currBlockId + 1]){
                currMoveOctopus.body.x-=moveSpeedx;
                if(currMoveOctopus.body.x <= blockPosx[currBlockId + 1]){
                    currBlockId=1;
                }
            }
        }else {
            if (currBlockId != (desBlockId==12?1:desBlockId+1)) {
                // console.log("2222");
                console.log(currBlockId);
                if (blockPosx[currBlockId] == blockPosx[currBlockId == 12 ? 1 : currBlockId + 1]) {
                    if (currMoveOctopus.body.y <= blockPosy[currBlockId + 1]) {
                        currMoveOctopus.body.y += moveSpeedy;
                        if (currMoveOctopus.body.y >= blockPosy[currBlockId + 1]) {
                            currBlockId == 12 ?currBlockId=1: currBlockId++;
                        }
                    }
                    else if (currMoveOctopus.body.y >= blockPosy[currBlockId + 1]) {
                        console.log(currMoveOctopus.body.y);
                        currMoveOctopus.body.y -= moveSpeedy;
                        if (currMoveOctopus.body.y <= blockPosy[currBlockId + 1]) {
                            currBlockId == 12 ? currBlockId=1 : currBlockId++;
                        }
                    }
                } else if (blockPosy[currBlockId] == blockPosy[currBlockId == 12 ? 1: currBlockId + 1]) {
                    if (currMoveOctopus.body.x <= blockPosx[currBlockId + 1]) {
                        currMoveOctopus.body.x += moveSpeedx;
                        if (currMoveOctopus.body.x >= blockPosx[currBlockId + 1]) {
                            currBlockId == 12 ? currBlockId=1 : currBlockId++;
                        }
                    } else if (currMoveOctopus.body.x >= blockPosx[currBlockId + 1]) {
                        currMoveOctopus.body.x -= moveSpeedx;
                        if (currMoveOctopus.body.x <= blockPosx[currBlockId + 1]) {
                            currBlockId == 12 ? currBlockId=1: currBlockId++;
                        }
                    }
                }
                else {
                    alert("位置出错了！");
                }
            }else {
                isMove=false;
            }
        }
    }
}

function initSprites(num) {
    console.log(num);
    sprites=game.add.group();
    for(var i=0;i<num;i++){
        var octopus=sprites.create(blockPosx[14],blockPosy[14],'octopus0');
        // var octopus=sprites.create(blockPosx[0]+i*40,blockPosy[0],'octopus0');
        octopus.name="octopus"+i.toString();
        octopus.scale.setTo(0.5, 0.5);
        octopus.animations.add('swim');
        octopus.animations.play('swim', 30, true);
        octopus.id=i;
        console.log(octopus.name);
        // game.add.tween(octopus).to({y:octopus.body.y+30}, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
    }
}

function getOctopus(id) {
    return sprites.iterate("id", id, Phaser.Group.RETURN_CHILD);
}


function inJail(id) {
    var inJailOctopus=getOctopus(id);
    inJailOctopus.body.x=blockPosx[id+13];
    inJailOctopus.body.y=blockPosy[id+13];
}
