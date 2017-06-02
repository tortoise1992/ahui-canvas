/**
 * Created by Administrator on 2017/6/2.
 */
var ctx1=getContext('demo1');
// console.log(ctx1)
// ctx1.fillRect(0,0,100,100);
// ctx1.lineJoin='round';
// ctx1.lineWidth=30;
// ctx1.strokeStyle='#09f';
// ctx1.strokeRect(100,100,100,100);
//
// document.body.onclick=function () {
//     ctx1.clearRect(10,10,80,80);
// }

//渐变
// var lineGra=ctx1.createLinearGradient(0,0,1200,800);
// lineGra.addColorStop(0,'#333');
// lineGra.addColorStop(0.25,'#09f');
// lineGra.addColorStop(0.5,'#f00');
// lineGra.addColorStop(1,'#fee000');
// ctx1.fillStyle=lineGra;
// ctx1.fillRect(0,0,1200,800);

// var radical=ctx1.createRadialGradient(100,100,5,500,500,100);
// radical.addColorStop(0,'#333');
// radical.addColorStop(0.25,'#09f');
// radical.addColorStop(0.5,'#f00');
// radical.addColorStop(1,'#fee000');
// ctx1.fillStyle=radical;
// ctx1.fillRect(0,0,1200,800);


//路径
ctx1.lineWidth=10;
ctx1.beginPath();
ctx1.moveTo(0,0);
ctx1.lineTo(100,100);
ctx1.closePath();
ctx1.stroke();