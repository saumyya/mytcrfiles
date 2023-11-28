const canvas=document.querySelector('canvas')
const ctx = canvas.getContext('2d');


canvas.width=window.innerWidth
canvas.height=window.innerHeight
// console.log(canvas);


//fillRect()
//ctx.fillRect(x,y,width,height)
// ctx.fillStyle='green'
// ctx.fillRect(20,20,150,100)
// ctx.fillStyle='red'
// ctx.fillRect(200,20,150,100)

//StrokeRect()
// ctx.lineWidth=4
// ctx.strokeStyle='blue'
// ctx.strokeRect(100,200,150,100)

//ClearRect()
// ctx.clearRect(25,25,140,90)

//fillText()
// ctx.font='20px Arial'
// ctx.fillStyle='blue'
// ctx.fillText('Hello World',40,70)

//strokeText()
// ctx.lineWidth=1;
// ctx.strokeStyle='orange'
// ctx.strokeText('Hello World',40,170)



//will focus shapes
//line

// ctx.beginPath();
// ctx.moveTo(50,50)
// ctx.lineTo(150,50)
// ctx.lineTo(100,200)
// // ctx.lineTo(50,50)
// ctx.closePath()

// ctx.stroke();
// ctx.fillStyle='red'
// ctx.fill()

// ctx.beginPath();
// ctx.moveTo(200,50)
// ctx.lineTo(150,200)
// ctx.lineTo(250,200)
// ctx.closePath()
// ctx.stroke();
// ctx.fillStyle='green'
// ctx.fill()

//full circle
// ctx.beginPath();
// ctx.arc(200,200,100,0,Math.PI*2)
// ctx.stroke();

//half cicle
// ctx.beginPath();
// ctx.arc(200,200,100,0,Math.PI,false)
// ctx.stroke();


// for(var i=0; i<50; i++){
// ctx.beginPath();
// var x=Math.random()*window.innerWidth
// var y=Math.random()*window.innerHeight
// ctx.arc(x,y,50,0,Math.PI*2)
// ctx.strokeStyle='blue'
// ctx.stroke();
// }





var x=Math.random()*window.innerWidth
var dx=(Math.random()-0.5)*8
var y=Math.random()*window.innerHeight
var dy=(Math.random()-0.5)*8

function animation(){
    requestAnimationFrame(animation)
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    ctx.beginPath();
    ctx.arc(x,y,50,0,Math.PI*2)
    ctx.stroke();
    ctx.fillStyle='red'
    ctx.fill()

    if(x+50>innerWidth ||x-50<0){
        dx=-dx
    }
    x+=dx

    if(y+50>innerHeight ||y-50<0){
        dy=-dy
    }
    y+=dy
}
animation()