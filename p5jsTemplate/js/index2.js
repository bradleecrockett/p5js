/** If you make a level and you want me to put it in the game copy the level and put it in the comments with the name of the level.
    This is the standard level size
    Symbols:
    s - stone
    # - portal
    @ - player start position
    ! - lava
    m - horizontally moving lava
    v - vertically moving lava
    B - blue portal
    R - red portal
    G - green portal
    Y - yellow portal
    x - sandstone
    $ - movable block
    ^ - up push block
    < - left push block
    > - right push block
    V - down push block
    d - dark stone block
   ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "ssssssssssssssssssss"],
    **/
var time = 0;
var levels = [ 
    ["ssssssssssssssssssss",
    "s                < s",
    "sV                 s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s @               ^s",
    "s >                s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s         s        s",
    "s  #               s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s@         s       s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s s                s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s           s      s",
    "s  s               s",
    "sss#               s",
    "s          s       s",
    "s                  s",
    "s                  s",
    "s@   s             s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s@                ss",
    "s s                s",
    "s               s  s",
    "s   s              s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s        #         s",
    "s                  s",
    "s                  s",
    "s         s        s",
    "s    s             s",
    "s                  s",
    "s                  s",
    "s                s s",
    "s  s               s",
    "s                  s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s        s         s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s   s              s",
    "s       s          s",
    "s                  s",
    "s                  s",
    "s            #     s",
    "s                  s",
    "s                  s",
    "s             s    s",
    "s    s             s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s@             s   s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s s                s",
    "s           s      s",
    "s                  s",
    "s                  s",
    "s          #       s",
    "s     s           @s",
    "s                  s",
    "ss                 s",
    "s      s           s",
    "s                 ss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                 Bs",
    "s                  s",
    "s                  s",
    "sss#               s",
    "s                  s",
    "s                  s",
    "s  B               s",
    "s@                 s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s s                s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s        GG        s",
    "s                  s",
    "s         RR       s",
    "s                  s",
    "s          YY      s",
    "s                  s",
    "s           BB     s",
    "s                  s",
    "sss#               s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s@            s    s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s   s# Y G R B     s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s    Y G R B       s",
    "s@            s    s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s   s              s",
    "s  Y              Rs",
    "ssss               s",
    "sR                Gs",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "sG                #s",
    "s             ssssss",
    "sB             Ys  s",
    "s               s  s",
    "s               s  s",
    "s               s  s",
    "s@             B   s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                 ss",
    "s#                 s",
    "ss                 s",
    "s!                 s",
    "s!      ssss       s",
    "s!                 s",
    "s!      s! !s     ss",
    "s!      s! !s     !s",
    "s!      s! !s     !s",
    "s!      s! !s     !s",
    "ss      ss !s     !s",
    "s@         ss     !s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s  Bs         s    s",
    "s          s       s",
    "s              s   s",
    "s                  s",
    "s                  s",
    "s    s            ss",
    "s  s      G        s",
    "s     !!!!!        s",
    "s     !!!!!        s",
    "s     !BYG!    !!sss",
    "s     !!R!!    !!!!s",
    "s   s !!!!! Y  !!!!s",
    "s     s       s!!!!s",
    "s              !!!!s",
    "s              !!!!s",
    "s              !!R!s",
    "s              !!#!s",
    "s@   s         !!!!s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s                  s",
    "s                m s",
    "s                vms",
    "s               vm s",
    "s m            v   s",
    "sm            v    s",
    "s m          v     s",
    "s           v    m s",
    "s          v      ms",
    "s m       v      m s",
    "sm       v         s",
    "s m     v          s",
    "s      v         m s",
    "s     v           ms",
    "s    v           m s",
    "s   v              s",
    "s  v               s",
    "s@s               #s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s!!!!!!!!!!!!!!!!!!s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!                !s",
    "s!           x    !s",
    "s! #  x           !s",
    "s!                !s",
    "s!                !s",
    "s!@           x   !s",
    "s!!!!!!!!!!!!!!!!!!s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s                 #s",
    "sm       m       !Ys",
    "s  m   m         ! s",
    "s    m           ! s",
    "s  m   m         ! s",
    "sm       m       ! s",
    "s                ! s",
    "s        Y       ! s",
    "ssssssssssssssss!! s",
    "s!!!!!!!!!!!!!!s!! s",
    "s!R             B! s",
    "s!s       x!!!!! ! s",
    "ssssssssss!!!!!! ! s",
    "s!!       G!!!!!   s",
    "s!!  x    ssssssssss",
    "s!!    R  !G  x!ssss",
    "sxxxxxxxxx!ssB!sssss",
    "s@    x       x!ssss",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s      ss          s",
    "s      $           s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s #                s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s@       s         s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s        @         s",
    "s                  s",
    "s                  s",
    "s             ssssss",
    "s      ss$ss  s!!!!s",
    "ssssssss! !s       s",
    "s      s! s        s",
    "s                  s",
    "s#                 s",
    "s       !          s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "s    s             s",
    "s                  s",
    "s                # s",
    "s                  s",
    "s    R             s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s!!!!!!!!!!!!!!!!!!s",
    "s                  s",
    "s                 ss",
    "s        R         s",
    "ss                 s",
    "s $       s        s",
    "s                  s",
    "s        @s        s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "ssss               s",
    "sss                s",
    "s                  s",
    "s  s            s  s",
    "s         #        s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s Y               xs",
    "sR G    RdGdYdB    s",
    "s       ddddddd    s",
    "s       $s$s$s$  x s",
    "s   B              s",
    "s                  s",
    "ssss               s",
    "ss             s   s",
    "s            xss   s",
    "s@x      x x sss!!!s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s               x  s",
    "s     s#           s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s              d   s",
    "s                  s",
    "s                  s",
    "s           x  $   s",
    "s  x               s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s               x  s",
    "s   x              s",
    "s                  s",
    "s                  s",
    "s@           x     s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s!!!!!!!!!!!!!!!!!!s",
    "s!              x !s",
    "s! x              !s",
    "s!              x !s",
    "s!  x             !s",
    "s!     !!!!!!!    !s",
    "s!    !!  x  !!   !s",
    "s!    !     x !   !s",
    "s!    !x     x!   !s",
    "s!    !   @   !   !s",
    "s!    !      x!   !s",
    "s!    !   x   !   !s",
    "s!    !!     !!   !s",
    "s!     ! !!!!!    !s",
    "s!               x!s",
    "s!      x        x!s",
    "s!  #x            !s",
    "s!!!!!!!!!!!!!!!!!!s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "ss                 s",
    "s         $       xs",
    "s                  s",
    "s                  s",
    "sR               #Bs",
    "s!!!!!!!!!!!!!B!!R!s",
    "ss                 s",
    "s         x    x   s",
    "s                  s",
    "s                  s",
    "s        $         s",
    "s@                 s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s         #        s",
    "s                  s",
    "s                  s",
    "smmmmmmmmmmmmm     s",
    "s!!!!!!!!! !!<!!!!!s",
    "s        ^         s",
    "s          >       s",
    "s             ^  < s",
    "s         ^        s",
    "s         >        s",
    "s                 ^s",
    "s>@        ^       s",
    "ssssssssssssssssssss"],
    [
    "ssssssssssssssssssss",
    "sB        s       Gs",
    "ss        s       ss",
    "s         s        s",
    "s        sss       s",
    "s         s        s",
    "ss        s       ss",
    "s         s        s",
    "s        sss       s",
    "s         s        s",
    "ss        s       ss",
    "s         s        s",
    "s        sss       s",
    "s         s        s",
    "ss        s       ss",
    "s        YsR       s",
    "s        !!!       s",
    "s  R     G@B    Y  s",
    "s  !     !!!    #  s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s           !      s",
    "s                  s",
    "s                 <s",
    "sY                 s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s                  s",
    "s         R       Rs",
    "ss                 s",
    "s          s       s",
    "s                  s",
    "sB          B#    Ys",
    "s                  s",
    "s         s        s",
    "s                  s",
    "s                  s",
    "s@           s     s",
    "ssssssssssssssssssss"],
    ["ssssssssssssssssssss",
    "s  !               s",
    "s                  s",
    "s                  s",
    "s                x s",
    "s     x            s",
    "sR           Y!    s",
    "sB           G!    s",
    "sG  x        !!    s",
    "sY           s!!   s",
    "s x               xs",
    "s           x      s",
    "s      #           s",
    "s       !s         s",
    "ss x               s",
    "s              B   s",
    "s              R   s",
    "s s                s",
    "s         s        s",
    "ssssssssssssssssssss"],
    ];
var level = 0;
var lavaList = [];
var levelWidth = 0;
var levelHeight = 0;
var zoom = 30; 
var input = [];
var blocks = [];
var movingBlocks = [];
var pcn;
var clicked;
var time2 = 0;
var plevel = 0;
var started = false;
var scene = "home";
var btn1 = {
    x: 300,
    y: 288,
    width:180,
    height:90,
    r: 87, 
    g:6,
    b:158,
    goto:"game",
    txt:"PLAY",
    locked: false
    
};
var btn2 = {
    x: 200,
    y: 400,
    width:180,
    height:90,
    r: 87, 
    g:6,
    b:158,
    goto:"howto",
    txt:"HOW TO",
    locked: false
    
};
var btn3 = {
    x: 400,
    y: 400,
    width:180,
    height:90,
    r: 87, 
    g:6,
    b:158,
    goto:"lvlselect",
    txt:"LEVELS",
    locked: false
    
};
var btn4 = {
    x: 535,
    y: 580,
    width: 60,
    height:40,
    r: 87, 
    g:6,
    b:158,
    goto:"home",
    txt:"MENU",
    txts: 10,
    locked: false
    
};
var startLevel = 1;
var currentLevel;
if(currentLevel === undefined){
    currentLevel = 1;
}
var level1_15time = 0;
var totalTime = 0;
var fastestTime = 0;
var fastestTime2 = 1000;
textFont(createFont("Impact"));
var txt = ["","Use the arrow keys or awsd to move. Once you begin moving you cannot change direction until you stop.", "Use the blocks to get to the portal. These portals will take you to the next room.","","","Can you figure this one out? If not, hit the R key to restart.","These teleporters will take you to the teleporter of the matching color.","It's a staircase!","This one's just fun to watch. :)","","The orange stuff is lava. Don't touch it.","This is the hardest one yet.","It's moving lava! Still don't touch it","If you hit sandstone, it disappears.","Press the R key to restart.","The blocks with the triangle design move in the direction that you hit them.","","Can blocks go through teleporters?","Moving blocks can go through dark stone, but you can't.","","RINGS OF LAVA!",""," Push blocks push you the way the arrow is pointing when  you hit them."];
var playerBlock = function(config){
    this.x = -50;
    this.y = -50;
    this.speed = 3;
    this.direction = "left";
    this.velocity = 0.1;
    this.falling = false;
    this.h = 30;
    this.w = 30;
    this.col = "";
    this.gravity = 1;
    this.canMove = true;
    this.coins = 0;
    this.hitwierd = 1;
};
var player = new playerBlock();
var listDisplay = function(object){
     for(var i = 0;i < object.length; ++i) {
        object[i].draw();
    }  
    
    
};
var collision = function(char,obj){
    if(char.y + char.h/2 >= obj.y + 2 && char.x - char.w/2 <= obj.x + obj.w - 2 && char.x + char.w/2 >= obj.x + 2 && char.y - char.h/2 <= obj.y + obj.h - 2){
        return true;    
    } else {
        return false;    
    }
};
var collision2 = function(char,obj){
    if(char.y + char.h/2 >= obj.y + 2 - obj.h/2&& char.x - char.w/2 <= obj.x + obj.w/2 - 2 && char.x + char.w/2 >= obj.x + 2 - obj.w/2 && char.y - char.h/2 <= obj.y + obj.h/2 - 2){
        return true;    
    } else {
        return false;    
    }
};
var stoneBlock = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
stoneBlock.prototype.draw = function() {
    rectMode(LEFT);
    fill(128, 116, 116);
    strokeWeight(2);
    stroke(82, 78, 82);
    rect(this.x,this.y,this.w,this.h);
    line(this.x + this.w/2,this.y,this.x + this.w/2,this.y + this.h/2);
    line(this.x + 1,this.y + this.h/2 + 1,this.x + this.w - 1,this.y + this.h/2 + 1);
    stroke(128, 116, 116);
    line(this.x,this.y + 2,this.x,this.y + this.h/2 - 2);
    strokeWeight(1);
};
var pushBlockUp = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.name = "upStone";
};
pushBlockUp.prototype.draw = function() {
    rectMode(LEFT);
    noStroke();
    fill(217, 106, 217);
    rect(this.x,this.y,this.w,this.h);
    fill(107, 102, 107);
    stroke(107, 102, 107);
    strokeWeight(3);
    line(this.x + this.w/2,this.y + this.h/6,this.x + this.w/2,this.y + this.h - this.h/6);
    triangle(this.x + this.w/2,this.y + this.h/6,this.x + this.w/3,this.y + this.h/2.5,this.x + this.w/3 + this.w/3,this.y + this.h/2.5);
    
};
var pushBlockDown = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.name = "downStone";
};
pushBlockDown.prototype.draw = function() {
    rectMode(LEFT);
    noStroke();
    fill(217, 106, 217);
    rect(this.x,this.y,this.w,this.h);
    fill(107, 102, 107);
    stroke(107, 102, 107);
    strokeWeight(3);
    line(this.x + this.w/2,this.y + this.h/6,this.x + this.w/2,this.y + this.h - this.h/6);
    triangle(this.x + this.w/2,this.y + this.h - this.h/6,this.x + this.w/3,this.y + this.h -  this.h/2.5,this.x + this.w/3 + this.w/3,this.y + this.h - this.h/2.5);
    
};
var pushBlockLeft = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.name = "leftStone";
};
pushBlockLeft.prototype.draw = function() {
    rectMode(LEFT);
    noStroke();
    fill(217, 106, 217);
    rect(this.x,this.y,this.w,this.h);
    fill(107, 102, 107);
    stroke(107, 102, 107);
    strokeWeight(3);
    line(this.x + this.w/6,this.y + this.h/2,this.x + this.w - this.w/6,this.y + this.h/2);
    triangle(this.x + this.w/6,this.y + this.h/2,this.x + this.w/2.5,this.y + this.h/3,this.x + this.w/2.5,this.y + this.h/3 + this.h/3);
    
};
var pushBlockRight = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.name = "rightStone";
};
pushBlockRight.prototype.draw = function() {
    rectMode(LEFT);
    noStroke();
    fill(217, 106, 217);
    rect(this.x,this.y,this.w,this.h);
    fill(107, 102, 107);
    stroke(107, 102, 107);
    strokeWeight(3);
    line(this.x + this.w/6,this.y + this.h/2,this.x + this.w - this.w/6,this.y + this.h/2);
    triangle(this.x + this.w - this.w/6,this.y + this.h/2,this.x + this.w - this.w/2.5,this.y + this.h/3,this.x + this.w - this.w/2.5,this.y + this.h/3 + this.h/3);
    
};
var sandStoneBlock = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.disappeared = false;
};
sandStoneBlock.prototype.draw = function() {
    rectMode(LEFT);
    fill(207, 145, 75);
    strokeWeight(2);
    stroke(92, 59, 15);
    rect(this.x,this.y,this.w,this.h);
};
var darkStoneBlock = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
darkStoneBlock.prototype.draw = function() {
    fill(74, 62, 62);
    strokeWeight(2);
    stroke(184, 184, 184);
    rect(this.x,this.y,this.w,this.h);
    line(this.x + this.w/2,this.y,this.x + this.w/2,this.y + this.h/2);
    line(this.x + 1,this.y + this.h/2 + 1,this.x + this.w - 1,this.y + this.h/2 + 1);
    stroke(74, 62, 62);
    line(this.x,this.y + 2,this.x,this.y + this.h/2 - 2);
    strokeWeight(1);
};
var darkStoneDesign = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
darkStoneDesign.prototype.draw = function() {
    fill(77, 66, 66);
    strokeWeight(2);
    stroke(64, 50, 64);
    rect(this.x,this.y,this.w,this.h);
    fill(46, 41, 41);
    triangle(this.x,this.y,this.x + this.h - 1, this.y,this.x,this.y + this.w - 1);
    strokeWeight(1);
};
var portal = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
portal.prototype.draw = function() {
    rectMode(LEFT);
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(2);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
};
var bluePortal = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
bluePortal.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(69, 87, 191);
    rect(this.x,this.y,this.w,this.h);
};
var redPortal = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
redPortal.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(191, 64, 57);
    rect(this.x,this.y,this.w,this.h);
};
var greenPortal = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
greenPortal.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(70, 189, 82);
    rect(this.x,this.y,this.w,this.h);
};
var yellowPortal = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
yellowPortal.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(230, 218, 51);
    rect(this.x,this.y,this.w,this.h);
};
var lava = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
lava.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(230, 111, 25);
    rect(this.x,this.y,this.w,this.h);
};
var portalCheck = function(type,obj){
for(var i = 0;i < blocks.length; i++) {
        
    if(blocks[i].t === type && i !== pcn) {
        if(obj.direction === "down" || obj.direction === 2){
            obj.x = blocks[i].x + obj.w/2;
            obj.y = blocks[i].y + blocks[i].h + obj.h/2;
        }
        if(obj.direction === "up" || obj.direction === 3){
            obj.x = blocks[i].x + obj.w/2;
            obj.y = blocks[i].y - obj.h/2;
        }
        if(obj.direction === "right" || obj.direction === 1){
            obj.x = blocks[i].x + blocks[i].w + obj.w/2;
            obj.y = blocks[i].y + obj.h/2;
        }
        if(obj.direction === "left" || obj.direction === 0){
            obj.x = blocks[i].x - obj.w/2 ;
            obj.y = blocks[i].y + obj.h/2;
        }
        
    }
 }
};
var movingStone = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.direction = 1;
    this.name = "movingStone";
    this.moving = false;
    this.speed = 3;
    this.velocity = 0.15;
};
movingStone.prototype.draw = function() {
    rectMode(CENTER);
    fill(77, 66, 66);
    strokeWeight(2);
    stroke(64, 50, 64);
    rect(this.x,this.y,this.w,this.h);
    fill(155, 97, 161);
    triangle(this.x - this.w/2,this.y - this.h/2,this.x + this.w/2 - 1, this.y - this.h/2,this.x - this.w/2,this.y + this.w/2 - 1);
    strokeWeight(1);
};
movingStone.prototype.move = function() {
    if(this.direction === 0 && this.moving === true){
        this.x -= this.speed;
        this.speed += this.velocity;
    }
    if(this.direction === 1 && this.moving === true){
        this.x += this.speed;
        this.speed += this.velocity;
    }
    if(this.direction === 3 && this.moving === true){
        this.y -= this.speed;
        this.speed += this.velocity;
    }
    if(this.direction === 2 && this.moving === true){
        this.y += this.speed;
        this.speed += this.velocity;
    }
    
};
movingStone.prototype.collide = function() {
    for(var i = 0; i < blocks.length; i++){
        if(collision(this,blocks[i]) === true && blocks[i].name === "upStone"){
            this.moving = "up";
            this.hitwierd = 0; 
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "downStone"){
            this.moving = "down";
            this.hitwierd = 0;
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "leftStone"){
            this.moving = "left";
            this.hitwierd = 0;
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "rightStone"){
            this.moving = "right";
            this.hitwierd = 0;
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "solid" || collision(this,blocks[i]) === true && blocks[i].t === "sandstone" && blocks[i].disappeared !== true){
            this.moving = false;
            player.canMove = true;
            this.speed = 3;
            if(this.direction === 0){
                this.x = blocks[i].x + blocks[i].w + this.w/2 + 1;
            }
            if(this.direction === 1){
                this.x = blocks[i].x - this.w/2 - 1;
            }
            if(this.direction === 2){
                this.y = blocks[i].y - this.h / 2 - 1;
            }
            if(this.direction === 3){
                this.y = blocks[i].y + blocks[i].h + this.h / 2 + 1;
            }
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "bluePortal"){
            pcn = i;
            portalCheck("bluePortal",this);

        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "redPortal"){
            pcn = i;
            portalCheck("redPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "greenPortal"){
            pcn = i;
            portalCheck("greenPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "yellowPortal"){
            pcn = i;
            portalCheck("yellowPortal",this);
        }
    }
};
var movingLava = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.direction = 0;
};
movingLava.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(230, 111, 25);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
};
movingLava.prototype.move = function() {
    if(this.direction === 0){
        this.x -= 3;
    }
    if(this.direction === 1){
        this.x += 3;
    }
};
movingLava.prototype.collide = function() {
    for(var i = 0; i < blocks.length; i++){
        this.col = "";
        if(collision(this,blocks[i]) === true && blocks[i].t === "solid" || collision(this,blocks[i]) === true && blocks[i].t === "lava"){
            this.direction = abs(this.direction - 1);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "bluePortal"){
            pcn = i;
            portalCheck("bluePortal",this);

        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "redPortal"){
            pcn = i;
            portalCheck("redPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "greenPortal"){
            pcn = i;
            portalCheck("greenPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "yellowPortal"){
            pcn = i;
            portalCheck("yellowPortal",this);
        }
    }
};
var verticalMovingLava = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.direction = 2;
};
verticalMovingLava.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(230, 111, 25);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
};
verticalMovingLava.prototype.move = function() {
    if(this.direction === 2){
        this.y -= 3;
    }
    if(this.direction === 3){
        this.y += 3;
    }
};
verticalMovingLava.prototype.collide = function() {
    for(var i = 0; i < blocks.length; i++){
        this.col = "";
        if(collision(this,blocks[i]) === true && blocks[i].t === "solid"){
            if(this.direction === 2){
                this.direction = 3;
            } else {
                this.direction = 2;
            }
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "bluePortal"){
            pcn = i;
            portalCheck("bluePortal",this);

        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "redPortal"){
            pcn = i;
            portalCheck("redPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "greenPortal"){
            pcn = i;
            portalCheck("greenPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "yellowPortal"){
            pcn = i;
            portalCheck("yellowPortal",this);
        }
    }
};
var coin = function(x,y,w,h,t){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
};
coin.prototype.draw = function() {
    noStroke();
    rectMode(LEFT);
    fill(212, 190, 66);
    ellipse(this.x,this.y,this.w,this.h);
};
var keyPressed = function() {
    input[keyCode] = true;
    input[key.toString().toUpperCase()] = true;
};
var keyReleased = function() {
    input[keyCode] = false;
    input[key.toString().toUpperCase()] = false;
};
var loadLevel = function(){
blocks = [];
lavaList = [];
movingBlocks = [];
var wEx = 0;
var hEx = 0;
for(var column = 0;column < levels[level].length;column++) {
        for(var row = 0;row < levels[level][column].length;row++) {
        if(levels[level][column][row] === "s") {
            blocks.push(new stoneBlock(row* (width/20),column * (height /20), width/20,height/20, "solid"));
            
        }
        if(levels[level][column][row] === "^") {
            blocks.push(new pushBlockUp(row* (width/20),column * (height /20), width/20,height/20, "solid"));
            
        }
        if(levels[level][column][row] === "V") {
            blocks.push(new pushBlockDown(row* (width/20),column * (height /20), width/20,height/20, "solid"));
            
        }
        if(levels[level][column][row] === "<") {
            blocks.push(new pushBlockLeft(row* (width/20),column * (height /20), width/20,height/20, "solid"));
            
        }
        if(levels[level][column][row] === ">") {
            blocks.push(new pushBlockRight(row* (width/20),column * (height /20), width/20,height/20, "solid"));
            
        }
        if(levels[level][column][row] === "#") {
            blocks.push(new portal(row* (width/20),column * (height /20), width/20,height/20, "portal"));
        }
        if(levels[level][column][row] === "d") {
            blocks.push(new darkStoneBlock(row* (width/20),column * (height /20), width/20,height/20, "dark"));
        }
        if(levels[level][column][row] === "D") {
            blocks.push(new darkStoneDesign(row* (width/20),column * (height /20), width/20,height/20, "not solid"));
        }
        if(levels[level][column][row] === "B") {
            blocks.push(new bluePortal(row* (width/20),column * (height /20), width/20,height/20, "bluePortal"));
        }
        if(levels[level][column][row] === "R") {
            blocks.push(new redPortal(row* (width/20),column * (height /20), width/20,height/20, "redPortal"));
        }
        if(levels[level][column][row] === "G") {
            blocks.push(new greenPortal(row* (width/20),column * (height /20), width/20,height/20, "greenPortal"));
        }
        if(levels[level][column][row] === "Y") {
            blocks.push(new yellowPortal(row* (width/20),column * (height /20), width/20,height/20, "yellowPortal"));
        }
        if(levels[level][column][row] === "!") {
            blocks.push(new lava(row* (width/20),column * (height /20), width/20,height/20, "lava"));
        }
        if(levels[level][column][row] === "c") {
            blocks.push(new coin(row* (width/20) + width/40,column * (height /20) + height/40, width/20,height/20, "coin"));
        }
        if(levels[level][column][row] === "m") {
            lavaList.push(new movingLava(row* (width/20) + width/40,column * (height /20) + height/40, width/20,height/20, "lava"));
        }
        if(levels[level][column][row] === "v") {
            lavaList.push(new verticalMovingLava(row* (width/20) + width/40,column * (height /20) + height/40, width/20,height/20, "lava"));
        }
        if(levels[level][column][row] === "x") {
            blocks.push(new sandStoneBlock(row* (width/20),column * (height /20), width/20,height/20, "sandstone"));
        }
        if(levels[level][column][row] === "$") {
            movingBlocks.push(new movingStone(row* (width/20) + width/40,column * (height /20) + height/40, width/20,height/20, "solid"));
        }
        if(levels[level][column][row] === "@") {
            if(column < width/40){
                wEx = 1;
            } else {
                wEx = -1;
            }
            if(row < height/40){
                hEx = 1;
            } else {
                hEx = -1;
            }
            player.sx = row * width/20 + player.h/2 + hEx;
            player.sy = column * height/20 + player.h/2 + wEx;
        }
    }
 }
};
mouseClicked = function(){
    clicked = true;
};
var button = function(config){
    this.x = config.x;
    this.y = config.y;
    this.width = config.width;
    this.height = config.height;
    this.r = config.r;
    this.g = config.g;
    this.b = config.b;
    this.goto = config.goto;
    this.txt = config.txt;
    this.t = config.t;
    this.locked = config.locked;
    this.txts = config.txts || 40;
};
button.prototype.draw = function() {
     var o;
     
     if(mouseX <= this.x + this.width/2 && mouseX >= this.x - this.width/2 && mouseY <= this.y + this.height/2 && mouseY >= this.y - this.height/2){
        o = 210;
        
        
    } else {
        o = 145;
        
    }
    
     rectMode(CENTER);
     fill(0,0,0,130);
     rect(this.x,this.y,this.width,this.height,15);
     fill(this.r,this.g,this.b,o);
     rect(this.x,this.y,this.width-10,this.height-10,10);
     textAlign(CENTER,CENTER);
     fill(10);
     textSize(this.txts);
     if(this.locked === true){
        textSize(16);
        this.txt = "LOCKED";
     }
     text(this.txt,this.x,this.y);
};
button.prototype.clicked = function(){
    if(mouseX <= this.x + this.width/2 && mouseX >= this.x - this.width/2 && mouseY <= this.y + this.height/2 && mouseY >= this.y - this.height/2 && clicked === true && this.locked === false){
        if(this.t === "level"){
            scene = "game2";
            level = this.goto;
            startLevel = this.goto;
            loadLevel();
            player.reset();
            time = 0;
            time += 0;
        } else {
            scene = this.goto;
            level = 1;
            loadLevel();
            player.reset();
        }
    }
};
var playButton = new button(btn1);
var howToButton = new button(btn2);
var recordButton = new button(btn3);
var menuButton = new button(btn4);
playerBlock.prototype.draw = function() {
    rectMode(CENTER);
    noStroke();
    fill(153, 141, 141);
    rect(this.x,this.y,this.w,this.h);
    strokeWeight(2);
    stroke(156, 9, 9);
    arc(this.x,this.y + 4,20,10,0,180);
    stroke(10);
    strokeWeight(4);
    ellipse(this.x - 9,this.y-3,0.4,0.4);
    ellipse(this.x + 9,this.y-3,0.4,0.4);
};
playerBlock.prototype.move = function(){
    if(input.W && this.canMove || input[UP] && this.canMove){
        this.moving = "up";
        this.canMove = false;
    }
    if(input.S && this.canMove || input[DOWN] && this.canMove){
        this.moving = "down";
        this.canMove = false;
    }
    if(input.A && this.canMove || input[LEFT] && this.canMove){
        this.moving = "left";
        this.canMove = false;
    }
    if(input.D && this.canMove || input[RIGHT] && this.canMove){
        this.moving = "right";
        this.canMove = false;
    }
    if(this.moving === "up" && this.past !== "u" && this.col !== "up"){
        this.y -= this.speed;
        this.direction = "up";
        this.speed += this.velocity;
        this.past = "u";
    } else if(this.past === "u" && this.speed > 3){
        this.y -= this.speed;
        this.speed += this.velocity * 2;
        this.past = "u";
    }
    else if(this.past === "u"){
        this.past = "";
    }
    if(this.moving === "down" && this.past !== "d" && this.col !== "down"){
        this.y += this.speed;
        this.direction = "down";
        this.speed += this.velocity;
        this.past = "d";
    } else if(this.past === "d" && this.speed > 3){
        this.y += this.speed;
        this.speed += this.velocity * 2;
        this.past = "d";
    }
    else if(this.past === "d"){
        this.past = "";
    }
    if(this.moving === "left" && this.past !== "r" && this.col !== "left"){
        this.x -= this.speed;
        this.direction = "left";
        this.speed += this.velocity;
        this.past = "l";
    } else if(this.past === "l" && this.speed > 3){
        this.x -= this.speed;
        this.speed += this.velocity * 2;
        this.past = "l";
    }
    else if(this.past === "l"){
        this.past = "";
    }
    if(this.moving === "right" && this.past !== "l" && this.col !== "right"){
        this.x += this.speed;
        this.direction = "right";
        this.speed += this.velocity;
        //playSound(getSound("rpg/step-heavy"));
        this.past = "r";
    } else if(this.past === "r" && this.speed > 3){
        this.x += this.speed;
        this.speed += this.velocity * 2;
        this.past = "r";
    } else if(this.past === "r"){
        this.past = "";
    }
    /**if(input[5]){
        this.canMove = true;
    }**/
};
playerBlock.prototype.reset = function(){
    this.x = this.sx;
    this.y = this.sy;
    this.moving = "";
    this.speed = 3;
    this.canMove = true;
    loadLevel();
};
playerBlock.prototype.collide = function(){
    for(var i = 0; i < blocks.length; i++){
        if(collision(this,blocks[i]) === true && blocks[i].name === "upStone"){
            this.moving = "up";
            this.hitwierd = 0; 
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "downStone"){
            this.moving = "down";
            this.hitwierd = 0;
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "leftStone"){
            this.moving = "left";
            this.hitwierd = 0;
        }
        if(collision(this,blocks[i]) === true && blocks[i].name === "rightStone"){
            this.moving = "right";
            this.hitwierd = 0;
        }
        this.col = "";
        if(collision(this,blocks[i]) === true && blocks[i].t === "solid" || collision(this,blocks[i]) === true && blocks[i].t === "sandstone" && blocks[i].disappeared !== true || collision(this,blocks[i]) === true && blocks[i].t === "dark"){
            if(blocks[i].t === "sandstone"){
                blocks[i].disappeared = true;
                this.speed = 3;
                this.moving = "";
            }
            if(this.hitwierd === 0){
                this.canMove = false;
            } else {
                this.canMove = true;
            }
            if(this.x - this.w/2 <= blocks[i].x + blocks[i].w && this.x + this.w/2 >= blocks[i].x){
                if(this.past === "r"){
                    this.col = "right";
            this.speed = 3;
            this.x = blocks[i].x - this.w/2 - 1;
                } else if(this.past === "l"){
                    this.speed = 3;
            this.x = blocks[i].x + blocks[i].w + this.w/2 + 1;
            this.col = "left";
                }
            }
            if(this.y + this.h/2 >= blocks[i].y && this.y - this.h/2 <= blocks[i].y + blocks[i].h){
                if(this.past === "d"){
                    this.col = "top";
                    this.speed = 3;
                    this.y = blocks[i].y - this.h / 2 - 1;
                } else if(this.past === "u"){
                    this.speed = 3;
                    this.y = blocks[i].y + blocks[i].h + this.h / 2 + 1;
                    this.col = "bottom";
                }
            }
        }
        
        this.hitwierd += 1;
        if(collision(this,blocks[i]) === true && blocks[i].t === "portal"){        
            level++;
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "bluePortal"){
            pcn = i;
            portalCheck("bluePortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "redPortal"){
            pcn = i;
            portalCheck("redPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "greenPortal"){
            pcn = i;
            portalCheck("greenPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "yellowPortal"){
            pcn = i;
            portalCheck("yellowPortal",this);
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "lava"){
            this.reset();
        }
        if(collision(this,blocks[i]) === true && blocks[i].t === "movingStone"){
            println("hi");
        }
    }
    for(var i = 0; i < lavaList.length; i++){    
        if(collision2(this,lavaList[i]) === true){
            this.reset();
        }
    }
    for(var i = 0; i < movingBlocks.length; i++){    
        if(collision2(this,movingBlocks[i]) === true){
            movingBlocks[i].moving = true;
            this.speed = 0;
            //this.moving = "";
            //this.canMove = true;
            if(this.x - this.w/2 <= movingBlocks[i].x + movingBlocks[i].w/2 && this.x + this.w/2 >= movingBlocks[i].x - movingBlocks[i].w/2){
                if(this.past === "r"){
                    movingBlocks[i].direction = 1;
                    this.col = "right";
                this.speed = 3;
            this.x = movingBlocks[i].x - this.w / 2 -  movingBlocks[i].w/2;
                } else if(this.past === "l"){
                    this.col = "left";
                    movingBlocks[i].direction = 0;
                    this.speed = 3;
                    this.x = movingBlocks[i].x + movingBlocks[i].w/2 + this.w/2 + 1;
            
            
                }
            }
            if(this.y + this.h/2 >= movingBlocks[i].y - movingBlocks[i].h/2 && this.y - this.h/2 <= movingBlocks[i].y + movingBlocks[i].h/2){
                if(this.past === "d"){
                    this.col = "top";
                    this.speed = 3;
                    movingBlocks[i].direction = 2;
                    this.y = movingBlocks[i].y - this.h / 2 - movingBlocks[i].h/2 - 1;
                } else if(this.past === "u"){
                    this.speed = 3;
                    this.y = movingBlocks[i].y + movingBlocks[i].h/2 + this.h / 2 + 1;
                    this.col = "bottom";
                    movingBlocks[i].direction = 3;
                }
            }
        }
    }
};
loadLevel();
player.move();
player.reset();

var levelButtonList = [];
var draw = function() {
    fill(0,0,0,20);
    rectMode(LEFT);
    rect(0,0,width,height);
    if(scene === "game" || scene === "game2"){
        if(scene === "game"){
            level = 1;
            scene = "game2";
            started = false;
            time = 0;
            time2 = 0;
        }
        if(level > currentLevel){
            currentLevel = level;
        }
        if(keyIsPressed){
            started = true;
        }
        if(level !== plevel){
            loadLevel(level);
            player.reset();
            player.moving = "";
        }
        
        for(var i = 0;i < blocks.length; i++) {
            if(blocks[i].disappeared !== true){
                blocks[i].draw();
            }
        } 
        for(var i = 0;i < lavaList.length; i++) {
            lavaList[i].draw();
            lavaList[i].move();
            lavaList[i].collide();
        } 
        for(var i = 0;i < movingBlocks.length; i++) {
            movingBlocks[i].draw();
            movingBlocks[i].move();
            movingBlocks[i].collide();
        } 
        plevel = level;
        player.draw();
        player.move();
        player.collide();
        if(input.R){
            player.reset();
        }
        textFont(createFont("Arial"));
        textSize(30);
        fill(150, 87, 237);
        textAlign(CENTER,TOP);
        text(txt[level],20,60,550,500);
        fill(9, 47, 219);
        textAlign(LEFT,TOP);
        if(level < levels.length && started === true){
            time += 0.0155;
        }
        if(time >= 59.5){
            time = -0.44;
            time2 += 1;
        }
        if(round(time) < 10){
            text("Time: "+ time2 + ":0" + round(time),20,567,550,500);
        } else {
            text("Time: "+ time2 + ":" + round(time),20,567,550,500);
        }
        if(level >= levels.length){
            scene = "win";
        }
        menuButton.draw();
        menuButton.clicked();
    }
    else if(scene === "home" || scene === "home2"){
        if(scene === "home"){
            level = 0;
            loadLevel();
            player.reset();
            player.moving = "down";
            scene = "home2";
            
        }
        textFont(createFont("Impact"));
        textAlign(CENTER,CENTER);
        textSize(60);
        fill(4, 0, 255);
        text("Slidey Block",300,120);
        playButton.draw();
        playButton.clicked();
        recordButton.draw();
        recordButton.clicked();
        howToButton.draw();
        howToButton.clicked();
        for(var i = 0;i < blocks.length; i++) {
            if(blocks[i].disappeared !== true){
                blocks[i].draw();
            }
        } 
        player.move();
        player.collide();
        player.draw();
        
    }
    if(scene === "howto"){
        textAlign(CENTER,CENTER);
        fill(4, 0, 255);
        textSize(70);
        textFont(createFont("Impact"));
        text("How to",300,70);
        textFont(createFont("arial"));
        textAlign(LEFT,TOP);
        textSize(30);
        text("  Slidey Block is a one player puzzle game. You can use either the arrow keys or the a, w, s, and  d keys to move. Your goal is to get to the portal to move to the next level. Once you choose a direction to move, the player continues to move in that direction until you collide with something and stop moving. There are many other kinds of blocks that do different things thst are explained in the first level that they are in. Press any key to go back to the home screen.",50,120,500,700);
        if(keyIsPressed){
            scene = "home";  
        }
    }
    if(scene === "lvlselect" || scene === "lvlselect2"){
        if(scene === "lvlselect"){
            levelButtonList = [];
            var startX = 40;
            var startY = 40;
            var locked;
            for(var i = 0; i <= levels.length - 2; i++){
    if(i % 7 === 0){
        startX = 57.5;
        startY += 80;
    } else {
        startX += 80;
    }
    if(i + 1 > currentLevel){
        locked = true;
    } else {
        locked = false;
    }
    levelButtonList.push(new button({
    x: startX, 
    y: startY,
    width: 75,
    height: 75,
    r: 87, 
    g:6,
    b:158,
    goto: i + 1,
    txt: i + 1,
    t: "level",
    locked: locked
    }));
}
        scene = "lvlselect2";
        }
        textSize(70);
        fill(4, 0, 255);
        text("LEVELS",300,40);
        for(var i = 0; i < levelButtonList.length; i++){
            levelButtonList[i].draw();   
            levelButtonList[i].clicked(); 
        }
        fill(107, 12, 166);
        textSize(30);
        text("Press any key to go back",300,575);
        if(keyIsPressed){
            scene = "home";  
        }
    }
    if(scene === "win"){
        textSize(50);
        fill(4, 0, 255);
        textFont(createFont("Impact"));
        textAlign(CENTER,CENTER);
        if(time2*60 + round(time) < fastestTime2*60 + fastestTime && startLevel === 1){
            fastestTime = round(time);
            fastestTime2 = time2;
        }
        text("YOU BEAT ALL OF THE LEVELS!",300,40);
        textSize(30);
        text("Your time was " + time2 + " minutes and " + round(time) + " seconds \nfrom level " + startLevel + " to the end!",300,200);
        text("Now try for a faster time or\ngo in the code and create your own levels!",300,300);
    if(fastestTime < 10){
        text("Your best time from level 1 to the end is " + fastestTime2 + ": 0" + fastestTime + "!",300,400);
    } else {
        text("Your best time from level 1 to the end is " + fastestTime2 + ": " + fastestTime + "!",300,400);
    }
    menuButton.draw();
    menuButton.clicked();
    }
    clicked = false;
};
