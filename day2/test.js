/**
 * Created by Administrator on 2017/8/25.
 */
var w=window.innerWidth,h=window.innerHeight;
var canvas=document.getElementById('test');
canvas.width=w;
canvas.height=h;
canvas.bgColor='#ccc';
var maxRadius = 35;
var mouseX,mouseY;
var circleArray=[];
var colors=['#fee000','#0099ff','#cccccc','#ff0000']
var ctx=canvas.getContext('2d');

canvas.onmousemove=function (e) {
    mouseX=e.clientX;
    mouseY=e.clientY;
}

function getCircle() {
    for(var i=0;i<800;i++){
        var x=Math.random()*w;
        var y=Math.random()*h;
        var radius=Math.random()*10;
        circleArray.push(new Circle(x,y,radius))
    }
}

function Circle(x,y,radius) {
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.randowNum=Math.floor(Math.random()*4);
    this.color=colors[this.randowNum];
    this.xv=Math.random()*2;
    this.yv=Math.random()*2;


    this.update=function () {
        this.x +=this.xv;
        this.y +=this.yv;
        var distanceX=mouseX-this.x;
        var distanceY=mouseY-this.y;
        var originRadius=radius;


        if(Math.abs(distanceX)<50 && Math.abs(distanceY)<50 &&this.radius<maxRadius){
            this.radius +=2;
        }else if((Math.abs(distanceX)>=50 && originRadius<this.radius) || (Math.abs(distanceY)>=50 && originRadius<this.radius)){
            if(this.radius>3){
                this.radius -=2;
            }
        }

        if(this.x+this.radius>w || this.x-this.radius<0){
            this.xv = -this.xv
        }
        if(this.y+this.radius>h || this.y-this.radius<0){
            this.yv = -this.yv
        }

        this.draw();
    }

    this.draw=function () {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle=this.color;
        ctx.closePath();
        ctx.fill();
    }
}

function upDate() {
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
    requestAnimationFrame(function () {
        upDate();
    })
}

getCircle();
upDate();