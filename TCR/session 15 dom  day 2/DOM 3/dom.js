// EVENTS //

// var xyz=document.getElementById('main')
// console.log(xyz);
// var button=document.getElementById('button')

// button.addEventListener('click', buttonClick)

// function buttonClick(){
//     xyz.style.backgroundColor='red'
//     document.getElementById('header-title').textContent='changed'
//     console.log('button  clicked');
// }


// function buttonClick(e){
    // xyz.style.backgroundColor='red'
    // document.getElementById('header-title').textContent='changed'
    // console.log('button  clicked');

    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);


    // var output=document.getElementById('output')
    // output.innerHTML='<h1> hello'

    // output.innerHTML='<h3>' +e.target.id +'</h3>'

//   console.log(e.type);

 //position of mouse

//  console.log(e.clientX);
//  console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);


// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);

// }



 var button=document.getElementById('button')
 var box=document.getElementById('box')

//  button.addEventListener('click',runEvent)
//  button.addEventListener('dblclick',runEvent)
//  button.addEventListener('mousedown',runEvent)
//  button.addEventListener('mouseup',runEvent)


//  button.addEventListener('mouseenter',runEvent)
//  button.addEventListener('mouseleave',runEvent)

 box.addEventListener('mousemove',runEvent)



var itemInput=document.querySelector('input[type="text"]')
var form=document.querySelector('form')
var select=document.querySelector('select')

// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)

// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)


// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('paste',runEvent)

// select.addEventListener('change', runEvent)
// form.addEventListener('submit', runEvent)
// itemInput.addEventListener('input', runEvent);

function runEvent(e){
    e.preventDefault();
    // console.log('EVENT TYPE: '+e.type );
    // document.body.style.display='none'
    // console.log(e.target.value);

console.log(e.offsetX,e.offsetY);
    document.querySelector('#output')
    output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';

    box.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';
    // document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';
}

