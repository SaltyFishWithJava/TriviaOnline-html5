// 加入room 里的消息
function addMessage(mes) {
    p="<div class=\"message\">"+mes+"</div>";
    $("#displayBoxBody").prepend(p)
}
// 加入题目类型
var quesType=new Array("🐙","娱","史","百","生");
var quesArray=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
var playerNameArray=new Array("橙色🐙","粉红🐙","红色🐙","黄色🐙");
function addQuesType(arr) {
    for (i=0;i<12;i++){
        var quesBlock="block"+(i+1).toString();
        $("."+quesBlock+" .quesTYPE").text(quesType[arr[i]]);
    }
}
addQuesType(quesArray);
console.log(window.localStorage.getItem("roomName"));

// 加入room小黄人
// var playerNum=2;
// var nickNames=new  Array("郭靖","黄蓉","杨过","小龙女");
// var allScore=new Array(122,23,45,24);
// var playerNum;
// var nickNames=new  Array();
// var allScore=new Array();
// var avaters=new Array("../img/gameRoom/te1.jpg","../img/gameRoom/te2.jpg","../img/gameRoom/te3.jpg","../img/gameRoom/te4.jpg");
function addPlayers(playerNum) {
    $(".testimonials-line li").remove();
    for (i=0;i<playerNum;i++){
        var customer="<li class=\"customer customer "+i+"\">\n" +
            "                            <div class=\"testimonial-bubble\">\n" +
            "                                <p>\n" +
            "                                    hi!我是"+nickNames[i]+"！\n" +
            "                                </p>\n" +
            "                            </div>\n" +
            "                            <div class=\"cus-profile\">\n" +
            "                                <span class=\"cus-image\">\n" +
            "                                    <img src=\""+avaters[i]+"\">\n" +
            "                                 </span>\n" +
            "                                <span class=\"cus-name\">\n" +
            "                                    历史得分\n" +
            "                                    <span class=\"cus-title\">\n" +
            allScore[i]+
            "                                    </span>\n" +
            "                                </span>\n" +
            "                            </div>\n" +
            "                            <div class=\"score\">"+playerNameArray[i]+"：\n" +
            "                                <div class=\"curScore\">0</div>\n" +
            "                            </div>\n" +
            "                        </li>"
        $(".playerList .testimonials-line").append(customer);
    }
}
// playerid从0开始
function changeCurScore(id,score) {
    $("li:eq("+id+")"+" .curScore").text(score);
    console.log($("li:eq("+id+")"+" .curScore").length);
}

function changeHisScore(id,score) {
    $("li:eq("+id+")"+" .cus-title").text(score);
    console.log($("li:eq("+id+")"+" .cus-title").length);
}
// changeCurScore(1,"1222");
// $(".testimonials-line li").remove();
// console.log("a111ddPlayers");
// addPlayers(playerNum);

function addDicingbutton(id) {
    $(".dicing").remove();
    var p="<div class=\"dicing\">掷骰子</div>";
    $(".testimonials-line li:eq("+id+")").append(p)
}

function removeDicingbutton() {
    $(".dicing").remove();
}




$(".dicing").live("click",function () {
    console.log("dicing");
    // dicing();
    // dicing(dicingNum);
    Roll();
})


function getPlayerId(curNickName,nickNames) {
    for(i=0;i<playerNum;i++){
        if(curNickName==nickNames[i]){
            return i;
        }
    }
    alert("nickname不存在！");
}

// id数组当前人数
// isReady数组是否准备
// var id=4;
// var myId=3;
// var isReady=new Array(true,true,false,false);
// var isReady=new Array();
function addrReadyButton(num, isReady) {
    var p;
    for(i=0;i<num;i++){
        if(i==0){
            if(isReady[i]){
                p="<div class=\"isReady\">开始</div>";
            }else {
                p="<div class=\"isReady\">未开始</div>";
            }
        }else if(i>0&&i<4){
            if(isReady[i]){
                p="<div class=\"isReady\">已准备</div>";
            }else {
                p="<div class=\"isReady\">未准备</div>";
            }
        }
        $(".testimonials-line li:eq("+i+")").append(p)
    }
}
// addrReadyButton(id,isReady);


// myReadyButton(myId);
function myReadyButton(myId) {
    if(myId==0){
        if(!isReady[myId]){//未准备
            $(".testimonials-line li:eq("+myId+") .isReady").text("开始");
            $(".testimonials-line li:eq("+myId+") .isReady").addClass("confirmButton").removeClass("isReady");
        }else {
            $(".testimonials-line li:eq("+myId+") .isReady").css("background-color","#189e1a");
        }
    }else {
        if(!isReady[myId]){//未准备
            $(".testimonials-line li:eq("+myId+") .isReady").text("准备");
            $(".testimonials-line li:eq("+myId+") .isReady").addClass("confirmButton").removeClass("isReady");
        }else {
            $(".testimonials-line li:eq("+myId+") .isReady").css("background-color","#189e1a");
        }
    }

}
$(".confirmButton").live("click",function(){
    console.log("已准备");
    if(myid==0){
        $(this).text("已开始");
        Start();
    }else{
        $(this).text("已准备");
        Ready();
    }
    $(this).addClass("isReady").removeClass("confirmButton");
    $(this).css("background-color","#189e1a");
});

$("#exitGame").live("click",function () {
    $("#gameOver").hide();
    $(location).attr('href', 'gameLobby.html');
    console.log("exitGame");
});

$("#reGame").live("click",function () {
    $("#gameOver").hide();
    // initGame();
    window.location.reload();
    console.log("reGame");

});

function initGame() {
    sprites=null;
    blockPosx=Array(520,400,225,50,50,50,50,225,400,400,225,225,400,575,575,575,575);
    blockPosy=Array(575,575,575,575,400,225,50,50,50,225,225,400,400,0,100,200,300);
    moveSpeedx=4;
    moveSpeedy=5;
    isMove=false;
    isInJail=false;
    isOutJail=false;
    currBlockId =new Array();//当前的块id
    currBlockIdNew=new Array();
    desBlockId=new Array();//目的地块id
    isAddOctopus=false;
    selectedAnswer="e";
    quesType=new Array("🐙","娱","史","百","生");
    quesArray=new Array(0,0,0,0,0,0,0,0,0,0,0,0);
    playerNameArray=new Array("橙色🐙","粉红🐙","红色🐙","黄色🐙");
    if(game){
        console.log("2222");
        // game=null;
        // game = new Phaser.Game(config);
    }
    else {
        console.log("1111")
    }
}




// websocket
/*
   Test User
   */
var uname = window.localStorage.getItem("userName");
var answer = null;
var playerNum;
var myid;
var gameName;
var isReady=new Array();
var nickNames=new Array();
var allScore=new Array();
var avaters=new Array("../img/gameRoom/te1.jpg","../img/gameRoom/te2.jpg","../img/gameRoom/te3.jpg","../img/gameRoom/te4.jpg");
var QuesArray=new Array();
var behavior;//是否going
var activePlayerId;
var gameState=new Array("Init","End","Waitting");
var curState=gameState[2];
var dicingNum;
var activePlayerStep;
var answer;//记录题目的答案
var nextActivePlayer;
var isInjail=new Array(false,false,false,false);
/*
WebSocket
 */
var activeUser = null;
// var gameState = null;
var ws = null;
var socketstate = false;
function offlineCheck() {
    console.log("check");
    Offline.check();
    if(!socketstate){
        if(Offline.state === 'up'&&ws.reconnectAttempts>ws.maxReconnectInterval){
            console.log("up");
            //ws.refresh();
        }
        else{
            console.log("ssss");
        }
        //    buildSocket();
    }else{
        var json ={
            Code : "Check",
            uName : uname
        }
        console.log("send");
        ws.send(JSON.stringify(json));
    }
}
var t1 = null;
if (!("WebSocket" in window)) {
    alert("您的浏览器不支持 WebSocket!");
}
else {
    ws = new ReconnectingWebSocket("ws://111.231.85.149:8080/MyTestServer/websocket/Game");
    ws.onopen = function () {
        console.log("WebOpen");
        socketstate = true;
        clearInterval(t1);//去掉定时器
        t1 = setInterval(offlineCheck, 3000);
        Test();
    };

    ws.onmessage = function (evt) {
        console.log("Back");
        socketstate = true;
        var received_msg = evt.data;
        console.log(received_msg);
        var msg = JSON.parse(received_msg);
        // activeUser=msg.property.activePlayer;
        // gameState=msg.property.GameState;
        // if(gameState=="QUESTION") {
        //     document.getElementById("des").innerHTML = msg.property.description;
        //     document.getElementById("A").innerHTML = msg.property.A;
        //     document.getElementById("B").innerHTML = msg.property.B;
        //     document.getElementById("C").innerHTML = msg.property.C;
        //     document.getElementById("D").innerHTML = msg.property.D;
        // }
        curState=msg.resMsg;

        if(msg.resMsg=="End"){
            $("#gameOver").show();
            console.log("end");
        }
        else if(msg.resMsg=="Init"){
            console.log("111"+msg.list[0].sc);
            playerNum=msg.property.PlrCo;
            for(i=0;i<playerNum;i++){
                nickNames[i]=msg.list[i].uN;
                allScore[i]=msg.list[i].sc;
                changeHisScore(i,allScore[i]);
                if(msg.list[i].State=="WAITING"){
                    isReady[i]=false;
                }else {
                    isReady[i]=true;
                }
            }



            myid=getPlayerId(uname,nickNames);
            addPlayers(playerNum);
            // $.fn.alpha();
            $('#testimonials').alpha();//渲染人物上方蓝色动画效果
            addrReadyButton(playerNum,isReady);
            console.log(myid);
            myReadyButton(myid);
        }else if(msg.resMsg=="StartGame"){
                isAddOctopus=true;
                quesArray[0]=msg.property.Grid0;
                quesArray[1]=msg.property.Grid1;
                quesArray[2]=msg.property.Grid2;
                quesArray[3]=msg.property.Grid3;
                quesArray[4]=msg.property.Grid4;
                quesArray[5]=msg.property.Grid5;
                quesArray[6]=msg.property.Grid6;
                quesArray[7]=msg.property.Grid7;
                quesArray[8]=msg.property.Grid8;
                quesArray[9]=msg.property.Grid9;
                quesArray[10]=msg.property.Grid10;
                quesArray[11]=msg.property.Grid11;
                $(".isReady").remove();
                addQuesType(quesArray);
                activePlayerId=getPlayerId(msg.property.activePlayer,nickNames);
                if(msg.property.activePlayer==uname){
                    addDicingbutton(activePlayerId);
                }else {
                    removeDicingbutton();
                }
                console.log("que");
        }else if(msg.resMsg=="Roll"){
            // go:
            QuesArray[0]=msg.property.description;
            QuesArray[1]=msg.property.A;
            QuesArray[2]=msg.property.B;
            QuesArray[3]=msg.property.C;
            QuesArray[4]=msg.property.D;
            answer=msg.property.answer;
            dicingNum=msg.property.Roll;
            dicing();
            behavior=msg.property.behavior;
            activePlayerId=getPlayerId(msg.property.activePlayer,nickNames);
            activePlayerStep=msg.list[activePlayerId].step;
            for(i=0;i<playerNum;i++){
                currBlockIdNew[i]=msg.list[i].step;
            }
            if(msg.property.activePlayer==uname){
                addDicingbutton(activePlayerId);
            }else {
                removeDicingbutton();
            }
            // desBlockId[activePlayerId]=msg.list[activePlayerId]
            if(behavior=="Out"){
                setTimeout(function () {
                    isOutJail=true;
                },4000)
            }

        }else if(msg.resMsg=="GameInfor"){
            behavior=msg.property.behavior;
            console.log(behavior);
            // activePlayerId=getPlayerId(msg.property.activePlayer,nickNames)
            console.log(msg.property.activePlayer==uname);
            if(msg.property.activePlayer==uname&&msg.property.GameState=="GOING"){
                addDicingbutton(activePlayerId==playerNum-1?0:activePlayerId+1);
            }else {
                removeDicingbutton();
            }

            if(msg.property.answerRes){
                var p;
                if(msg.property.answerRes=="wrong"){
                    p="<div class=\".answer\">"+msg.property.answer+"答案错误，正确答案是"+answer+"</div>";
                    $("#q1 .content").append(p);
                    $("#q1 .enter_btn").hide();
                    setTimeout(function () {
                        nextActivePlayer=msg.property.activePlayer;
                        $("#shuffle_div").hide();
                        console.log("222");
                        console.log(activePlayerId);
                        isInJail=true;
                    },2000)
                }else if(msg.property.answerRes=="right"){
                    p="<div class=\".answer\">"+msg.property.answer+"答案正确</div>";
                    activePlayerId=getPlayerId(msg.property.activePlayer,nickNames);
                    $("#q1 .content").append(p);
                    $("#q1 .enter_btn").hide();
                    // $("#shuffle_div").hide();
                    setTimeout(function () {
                        nextActivePlayer=msg.property.activePlayer;
                        $("#shuffle_div").hide();
                    },2000)
                }
            }
        }

        console.log(msg);
        console.log(activeUser);
        console.log(gameState);
    };

    ws.onclose = function () {
        socketstate = false;
        console.log("连接已关闭...");
    };

    ws.onerror = function (evt) {
        socketstate = false;
        console.log(evt);
    };
}

window.onbeforeunload = function () {
    /*
    退出窗口则退出游戏，需要一个监听
     */
    ws.close();
}

function Test() {
    var js={
        gN : window.localStorage.getItem("roomName"),
        Code : "Init",
        uN : uname,
    };
    var json = JSON.stringify(js);
    console.log(json);
    ws.send(json);
}

function Start() {
    var js={
        gN : window.localStorage.getItem("roomName"),
        Code : "Start",
        uN : uname,
    };
    var json = JSON.stringify(js);
    console.log(json);
    ws.send(json);
}
function Ready() {
    var js={
        gN : window.localStorage.getItem("roomName"),
        Code : "Ready",
        uN : uname,
    };
    var json = JSON.stringify(js);
    console.log(json);
    ws.send(json);
}
function Roll() {
    var js={
        gN : window.localStorage.getItem("roomName"),
        Code : "Roll",
        uN : uname,
    };
    var json = JSON.stringify(js);
    console.log(json);
        ws.send(json);
}

function Ans(selectedAnswer) {
    var js={
        gN : window.localStorage.getItem("roomName"),
        Code : "Question",
        answer : selectedAnswer,
    };
    var json = JSON.stringify(js);
    console.log(json);
    // if((gameState=="QUESTION")&&(activeUser==uname)) {
        console.log("QUES");
        ws.send(json);
    // }
}
