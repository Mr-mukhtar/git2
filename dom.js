// var items = document.getElementById('main-header');
// items.style.borderBottom = 'solid 3px black';
//by tag name
// var li = document.getElementsByTagName('li');
// li[0].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';
// li[0].innerHTML = 'helloo';

// for (let i=0; i<li.length; i++){
//     li[i].style.fontWeight= 'bold';
// }
//by class name
// var item = document.getElementsByClassName('list-group-item');

// //item[1].style.backgroundColor = 'green';
// item[2].style.color = 'transparent'

// var itemList = document.querySelector('.list-group-item:nth-child(2)');
// itemList.style.color = 'green';
// var item = document.querySelector('.list-group-item:nth-child(3)');
// item.style.color = "transparent";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++)
// {
//     odd[i].style.backgroundColor= 'green';
// }
// var item = document.querySelectorAll('li');
// item[1].style.color= 'green';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'send'; 
// traversing of DOM
//parent Node

var itemList = document.querySelector('#items');
// parentnode
// itemList.parentNode.style.backgroundColor = "red";
// itemList.parentNode.parentNode;
// console.log(itemList.parentNode.parentNode)

//parentElementNode
// itemList.parentNode.style.backgroundColor = "red";
// itemList.parentNode.parentNode;
// console.log(itemList.parentNode.parentNode)

//childNode
//  console.log(itemList.children);

// //firstchild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.style.backgroundColor='red'


//lastchild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.style.backgroundColor='red'

//nextsibling
//itemList.nextElementSibling
//previoussibling
//console.log(itemList.previousElementSibling);

// createElement
 var newDiv = document.createElement('div'); 
  newDiv.class = 'hello';
//create newTextNode
  var newTextNode = document.createTextNode('welcome');
  // appendChild
  newDiv.appendChild(newTextNode);
  var listItem = document.querySelector('#main, h2');
  listItem.parentNode.insertBefore(newDiv, listItem);
  newDiv.style.fontSize = '30px'

  // createElement
 var newDiv = document.createElement('div'); 
 newDiv.class = 'hello';
//create newTextNode
 var newTextNode = document.createTextNode('welcome');
 // appendChild
 newDiv.appendChild(newTextNode);
  // create before item
   var item = document.querySelector('#item , li');
   item.parentNode.insertBefore(newDiv, item);
   newDiv.style.fontSize = '30px'