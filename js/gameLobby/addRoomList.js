function  getInfo() {
    var windowHeight=document.body.clientHeight;
    console.log(windowHeight);
    console.log(window.screen.height);
    console.log(document.body.clientHeight);
    console.log(document.body.scrollTop);
    console.log(document.body.clientWidth);
    $("body").css({"height":windowHeight+40});
}
getInfo();
$(document).ready(function(){
    var num=19;
    var isOdd=0;
    while(num>0){


        if(num%2==0||!($(".roomList").length>0)){
            console.log(!($(".roomList").length>0));
            var p="<div class=\"roomList\">\n" +
                "                <div class=\"smallroomList material-design\" data-color=\"#ffffff\">\n" +
                "                    <div class=\"avatar\">\n" +
                "                        <img src=\"../img/gameLobby/avatar0.png\">\n" +
                "                    </div>\n" +
                "                    <div class=\"roominfoList\">\n" +
                "                        <div class=\"roominfo\">\n" +
                "                            <div class=\"roomId\">\n" +
                "                                001\n" +
                "                            </div>\n" +
                "                            <div class=\"roomName\">\n" +
                "                                这是房间名\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                        <div class=\"roominfoDetail\">\n" +
                "                            <div class=\"roomhostName\">\n" +
                "                                <div>房主名：</div>\n" +
                "                                <div>巴拉巴拉</div>\n" +
                "                            </div>\n" +
                "                            <div class=\"perNum\">房间当前人数：<div>3</div>人</div>\n" +
                "                        </div>\n" +
                "                        <div>\n" +
                "                            <div class=\"blank\"></div>\n" +
                "                            <div class=\"roomstate\">游戏中</div>\n" +
                "                        </div>\n" +
                "                        <div>\n" +
                "\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"join_botton\">\n" +
                "                        <img src=\"../img/gameLobby/join_button_black.png\">\n" +
                "                    </div>\n" +
                "\n" +
                "                </div>\n" +
                "                <div class=\"smallroomList material-design\" data-color=\"#ffffff\">\n" +
                "                </div>\n" +
                "            </div>"
            if(!($(".roomList").length>0)){
                console.log("第一个");
                $("#roomBody").append(p);
            }
            else{
                // 当为偶数，需要把第二个smallroomList加入最后一个roomList中
                console.log("even");
                $("#roomBody").append(p);
            }
        }
        // 当为奇数时，需要重新new roomList
        else if(num%2==1){
            console.log("odd");
            var p="<div class=\"avatar\">\n" +
                "                        <img src=\"../img/gameLobby/avatar0.png\">\n" +
                "                    </div>\n" +
                "                    <div class=\"roominfoList\">\n" +
                "                        <div class=\"roominfo\">\n" +
                "                            <div class=\"roomId\">\n" +
                "                                001\n" +
                "                            </div>\n" +
                "                            <div class=\"roomName\">\n" +
                "                                这是房间名\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                        <div class=\"roominfoDetail\">\n" +
                "                            <div class=\"roomhostName\">\n" +
                "                                <div>房主名：</div>\n" +
                "                                <div>巴拉巴拉</div>\n" +
                "                            </div>\n" +
                "                            <div class=\"perNum\">房间当前人数：<div>3</div>人</div>\n" +
                "                        </div>\n" +
                "                        <div>\n" +
                "                            <div class=\"blank\"></div>\n" +
                "                            <div class=\"roomstate\">游戏中</div>\n" +
                "                        </div>\n" +
                "                        <div>\n" +
                "\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"join_botton\">\n" +
                "                        <img src=\"../img/gameLobby/join_button_black.png\">\n" +
                "                    </div>"
            $(".roomList:last .smallroomList:last").append(p);

        }

        num-=1;
    }
})