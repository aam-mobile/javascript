// //==================================================//
// //          DOM Selector For Single Elements
// //=================================================//
// // const taskTitle =  document.getElementById('task-title');
// // console.log(taskTitle);
// // console.log(taskTitle.id);
// // console.log(taskTitle.className);

// // // Change Styling
// // taskTitle.style.background= 'maroon';
// // taskTitle.style.color = 'white';
// // taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'block'

// // // Change Content

// // taskTitle.textContent = 'My Tasks';
// // taskTitle.innerHTML = "<ul><li>My New Tasks</li></ul>";
// // taskTitle.innerText = "My Inner Html"

// // // Query Selectors

// // let ctrl = document.querySelector('#task-title');

// // ctrl = document.querySelector('.card-action');

// // //ctrl.style.background ='red';

// // ctrl = document.querySelector('h5');

// // //ctrl.style.background = 'red';

// // ctrl = document.querySelector('li');
// // //ctrl.style.background = 'red';

// // //console.log(ctrl);


// // document.querySelector('ul li').style.color= 'red';
// // document.querySelector('li:last-child').style.color = 'yellow';
// // document.querySelector('li:nth-child(3)').style.color = 'brown';

// // document.querySelector('li:nth-child(4)').textContent = 'My new List Item';

// // document.querySelector('li:nth-child(odd)').style.background = 'gray';
// // document.querySelector('li:nth-child(even)').style.background = 'silver';


// //==================================================//
// //          DOM Selector For Multiple Elements
// //=================================================//

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child')


// val = list;
// val = listItem;

// // val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;
// // val = list.childNodes[3].nodeType;
// // 1 - Element
// //2 - Attribute
// // 3 - Text node
// // 8 - Comment
// // 9 -  Document itself

// // Get Children nodes

// // val = list.children;
// // val = list.children[1];
// // list.children[2].textContent = 'changed';
// // // Children of children
// // list.children[3].children[0].id = 'test'

// val = list.lastChild;

// val = list.lastElementChild;

// val = list.childElementCount

// val = listItem.parentNode;

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// val = listItem.previousElementSibling
 
// console.log(val)

