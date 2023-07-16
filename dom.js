var items = document.getElementById('main-header');
items.style.borderBottom = 'solid 3px black';
var item = document.getElementsByClassName('list-group-item');
item[0].style.fontWeight = 'bold';
item[2].style.backgroundColor = 'green';
item[0].innerHTML = 'helloo';

for (let i=0; i<item.length; i++){
    item[i].style.fontWeight= 'bold';
}