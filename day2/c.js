/**
 * Created by Administrator on 2017/8/25.
 */
var w=window.innerWidth,h=window.innerHeight;
var canvas=document.getElementById('test');
canvas.width=w;
canvas.height=h;
canvas.bgColor='#ccc';
var ctx=canvas.getContext('2d');

var particles=[];

function Particle(x,y) {
    this.x=x;
    this.y=y;
    this.vx=Math.random()*4-2;
    this.vy=Math.random()*4-2;
    this.color="#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
    this.update=function () {
        this.x -=this.vx;
        this.y -=this.vy;
        this.draw()
    }
    
    this.draw=function () {
        ctx.beginPath();
        ctx.arc(this.x,this.y,5*Math.random(),0,Math.PI*2);
        ctx.fillStyle=this.color;
        ctx.fill();
    }
}


var img=new Image();
img.src='./cc.jpg';
img.onload=function () {
    ctx.drawImage(img,0,0,w,h)
    var data=ctx.getImageData(0,0,w,h);
    console.log(data)
    for(var i=0;i<w;i +=15){
        for(var j=0;j<h;j +=15){
            if(data.data[(i + j*w)*4+2]<255){
                // data.data[(i + j*w)*4]=255-data.data[(i + j*w)*4];
                particles.push(new Particle(i,j))
            }
            // data.data[(i + j*w)*4]=255-data.data[(i + j*w)*4];
        }
    }
    ctx.putImageData(data,0,0)



    function updateAll() {
        ctx.clearRect(0,0,w,h)
        for(var i=0;i<particles.length;i++){
            particles[i].update();
        }
        requestAnimationFrame(function () {
            updateAll();
        })
    }
    updateAll();
}

