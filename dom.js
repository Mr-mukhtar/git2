// var items = document.getElementById('main-header');
// items.style.borderBottom = 'solid 3px black';
//by class name
var item = document.getElementsByClassName('list-group-item');
item[0].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';
item[0].innerHTML = 'helloo';

for (let i=0; i<item.length; i++){
    item[i].style.fontWeight= 'bold';
}
//by tag name
// var li = document.getElementsByTagName('li');
// li[0].style.fontWeight = 'bold';
// li[2].style.backgroundColor = 'green';
// li[0].innerHTML = 'helloo';

// for (let i=0; i<li.length; i++){
//     li[i].style.fontWeight= 'bold';
// }