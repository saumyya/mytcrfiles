// TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');

// console.log(itemList);
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'red';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); //ignore it

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // FirstChild
// console.log(itemList.firstChild);   //ignore
// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


// lastChild
// console.log(itemList.lastChild); //ignore


// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
var newDiv=document.createElement('div')

//// add class to it
newDiv.className='hello'

///add id to it
// newDiv.id='hello1'

// /// add attr
// newDiv.setAttribute('title','Hello Div')

// // // Create text node
// var newDivText=document.createTextNode('hello world')

// newDiv.appendChild(newDivText)


// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')



// console.log(newDiv);

// newDiv.style.fontSize='30px'
// container.insertBefore(newDiv,h1)