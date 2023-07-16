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

var itemList = document.querySelector('.list-group-item:nth-child(2)');
itemList.style.color = 'green';
var item = document.querySelector('.list-group-item:nth-child(3)');
item.style.color = "transparent";

var odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++)
{
    odd[i].style.backgroundColor= 'green';
}
var item = document.querySelectorAll('li');
item[1].style.color= 'green';