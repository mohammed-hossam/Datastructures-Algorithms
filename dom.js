//*intoduction:
// el dom(api) hwa ele ms2ol 3n eno y3ml el html ka tree  w eno y5le kol 7aga 3obara 3n objects fl html bdlel kaman eno l objects deh msh btt2re fl node.
// kol l objects btkon mt2sma ltype w kol type leh rqm y3ny msln objects el elements type 1 el doc nfsha rqm 9 el doctype rqm 3 kda y3ny.

//* selectors:
//ANCHOR selectors

// let e0 = document.getElementsByClassName('test');
// console.log(e0);
// let e1 = document.getElementsByTagName('p');
// console.log(e1);
// let e2 = document.getElementById('idtest');
// console.log(e2);
// //! lma 7tat lfile l javascript fl head mknsh 3ayz y2ra l id 23td m3na kda eno by3ml ll ba2y zy hoisting msln lakn l id la2
// let e3 = document.documentElement;
// console.log(e3);

//*Find Elements by css selectors:

// let q0 = document.querySelector('.test');
// console.log(q0);
// //btde node w7da bs w lw feh kaza 7aga bnfs l esm btde 2wel w7da tl2eha odmha fqt
// let q1 = document.querySelectorAll('.test');
// console.log(q1);
// // btde node list mn kol l 7agat ele blesm ele m5taro

//* Find Elements By Objects

// let e3 = document.documentElement;
// console.log(e3);
// let e4 = document.body;
// console.log(e4);
// let e5 = document.head;
// console.log(e5);
// let e6 = document.title;
// console.log(e6);
// let i = document.images;
// console.log(i);
// console.log(document.images.length);
// console.log(document.images[0].src);
// for (i = 0; i < document.images.length; i++) {
//   document.write(document.images[i].src);
// }
/* let b = document.body;
console.log(b);

let fat7y = document.querySelector('.fat7y');
fat7y.innerText = document.body.innerHTML; */

//* content:
//ANCHOR content

/* innerText(not standerd): "This element contains an inner span." :point_left: Just the text, trimmed and space-collapsed.
innerHtml: " This element     contains <span>an inner span</span>. " :point_left: All spacing and inner element tags.
textContent: " This element contains an inner span. " :point_left: Spacing, but no tags. */

// let ss = document.querySelector('.ss');
// console.log(ss.innerHTML);
// console.log(ss.textContent);
// ss.textContent / innerHTML = 'obaa teka <span>obaaaa</span>';
// //! n7awel nb3d 3n innerHTML deh 3shan bt5le nas moomkn td5ol tktb w t3dl fl html ele enta ktbo ma ysma bl xss attack w kaman l textcontent asr3

//* attribute:
//ANCHOR attribute

//? Element.attribute:
// let div = document.querySelector('.testc');

// div.id = 'hobaaaaa';
// div.className = 'obaaaa';

// const id = dummyElement.getAttribute('data-id');
//  const id = dummyElement.dataset.id;

// let im = document.querySelector('#imo');

// im.src = 'http://placehold.it/500/500';
// im.title = 'haaaaaaaa';

//? element.setAttribute/getAttribute('attribute name','attribute value')
// note: lw mfesh attribute hwa bynsh2o
// console.log(im.getAttribute('alt'));
// im.setAttribute('alt', '1234');

// const anyAttribute = document.createAttribute('data-id');
// anyAttribute.value = new Date().getTime().toString();
// dummyElement.setAttributeNode(anyAttribute);

//? has and remove attribute
// console.log(im.hasAttribute('title'));
// if (im.hasAttribute('name')) {
//   if (im.name === 'sss') {
//     im.removeAttribute('name');
//   }
// }

//* ClassList:
//ANCHOR ClassList

//? [ Item, Contains, Length ]:(not suporrted in IE9)

// let div = document.querySelector('#main');
// console.log(div.classList);
// console.log(div.classList.length);
// console.log(div.classList.value);
// console.log(div.classList.item(3)); // length ybd2 mn 1 index w item btbd2 mn 0
// if (div.classList.contains('zero')) {
//   console.log('yes this contains zero');
// }

//? ClassList [ Add, Remove, Toggle ]:

// let div = document.querySelector('#main');
// div.className = 'test'; // hena by3ml override ll classes ele mwgoda w y7ot mknha test
// div.className += ' test'; // hena 3ady byzwd 3leha

// let button = document.querySelector('button');
// button.onclick = function () {
//   'use strict';
//   button.classList.add('1235', 'css', 'js');
//   button.classList.remove('shsh');
// };

//? toogle:
// let toggle = document.querySelector('#toggle');
// let div = document.querySelector('#shlna');
// toggle.onclick = function () {
//   'use strict';
//   div.classList.toggle('hidden');
// };

//* Elements - Children:
//ANCHOR Elements-Children

//? Elements-Children
let div = document.getElementById('child');

// console.log(div.childElementCount);
// console.log(div.children.length);
// console.log(div.children);
// console.log(div.children[0]);
// console.log(div.children[1].textContent);
// console.log(div.children[1].className);
// console.log(div.childNodes.length);
// console.log(div.childNodes);
// console.log(div.childNodes[3]);

//? First & Last Child:

// console.log(div.firstChild);
// console.log(div.childNodes[0]);
// console.log(div.lastChild);
// console.log(div.firstElementChild);
// console.log(div.lastElementChild);

//? Append Child:
// let appendDiv = document.querySelector('#append');
// let newElement = document.createElement('div');
// appendDiv.appendChild(newElement);

// let newText = document.createTextNode('twela w 3lya enma');
// newElement.appendChild(newText);

// // Insert Before:
// let newPara = document.createElement('p');
// appendDiv.insertBefore(newPara, appendDiv.firstElementChild); //(ele3ayz 27oto, 27oto2bl eh bzbt)

//? Remove Child:
// let remove = document.getElementById('remove');
// console.log(remove.childNodes);
// remove.removeChild(remove.firstChild);
// console.log(remove.childNodes);
// remove.removeChild(remove.firstElementChild);
// console.log(remove.childNodes);
// remove.removeChild(remove.childNodes[3]);
// console.log(remove.childNodes);

//? Node[(Name, Value, Type)]:
/* let node = document.querySelector('#node');
console.log(node.children[0].nodeName);
console.log(node.childNodes[0].nodeName);
console.log(node.childNodes[0].tagName);
console.log(node.childNodes[3].tagName); // btgeb l 7agat ele leha tag name bs y3ny mst5dmhash msln m3 domment 2w text
console.log(node.children[0].nodeValue);
console.log(node.children[0].childNodes[0].nodeValue);
console.log(node.children[0].childNodes[0].nodeType);
console.log(node.children[0].nodeType); */

//? clone node:
/* let clone = document.querySelector('.clone');
let New = document.getElementsByClassName('new');
let copy = clone.firstElementChild.cloneNode(true); // lw l kos dah fad bykon gwah default false bya5od l node wl attributes ele feha bs  lakn lw 3ayz 25od l childs ele gwaha kaman 27ot true badal false
clone.appendChild(copy); */

//? Elements - Parent Element:
/* let parent = document.querySelector('.parent');
let button = parent.firstElementChild;
console.log(button.parentNode);
// example:
button.onclick = function () {
  'use strict';
  this.parentNode.style.display = 'None';
}; */

//? Elements - Next, Previous Sibling:
/* let sibling = document.querySelector('#sibling');
console.log(sibling.childNodes[1].nextSibling);
console.log(sibling.childNodes[1].nextElementSibling);
sibling.childNodes[1].nextElementSibling.textContent = 'changed'; */
//Previous hwa hwa next bzbt mogrd 2shel next w7ot klmt Previous

//? Elements - Focus, Blur:
/* let focus = document.getElementById('focus');
window.onload = function () {
  'use strict';
  document.getElementById('myInput').focus();
};
//mmkn 23mlha kaman 3ltol bl input nfso msh lazm window.onclick
// document.getElementById('myInput').onclick = function () {
//   'use strict';
//   this.blur();
// }; */

//? Elements - Click:
// let div = document.querySelector('#ccc');
// let button = div.firstElementChild;
// button.onclick = function () {
//   this.parentElement.style.display = 'none';
// };
// /* // lw 3ayz 25le l browser y3ml click hwa l7wdo:
// window.onload = function () {
//   button.click();
// }; */

// Elements - Add Event Listener:
/* let button = document.querySelector('#eat');
let add = document.querySelector('#add');
button.onclick = function () {
  document.querySelector('#m1').style.display = 'none';
};
add.onclick = function () {
  button.addEventListener('click', function () {
    document.querySelector('#m2').style.display = 'none';
  });
}; */

//* Elements - contains:
//ANCHOR  contains
/* let div = document.querySelector('#contain');
let span = div.firstElementChild.firstElementChild.firstElementChild;
console.log(span);
console.log(div.contains(span)); */

//* height-width:
//ANCHOR height-width

// client height-width:
//  deh bt7sb: viewble area - padding - no margin - no scroll
// let height = document.getElementById('height');
// console.log(height.clientHeight);
// console.log(height.clientWidth);

// scroll height-width:
// bt7sb: all area include invisable area - padding - no border - no margin
// let scroll = document.getElementById('scroll');
// console.log(scroll.clientHeight);
// console.log(scroll.clientWidth);
// console.log(scroll.scrollHeight);
// console.log(scroll.scrollWidth);

// offset height-width:
// bt7sb: viewable area - padding - border - scroll - No margin
// let offset = document.getElementById('offset');
// console.log(offset.offsetHeight);
// console.log(offset.offsetWidth);
// note: l scroll wa5d mn l width l 2sly 3shan kda msh byban 300 w zy 2olna l client hieght msh by7sbha

// client top - left: (by2es l border bs w bya5od m3ah l scroll lw mwgod fl etgah bta3o)
// let border = document.getElementById('border');
// console.log(border.clientLeft);
// console.log(border.clientTop);

//* style:
//ANCHOR style
// (Element.style.property='value')
// let div = document.getElementById('style');
// console.log(div);
// div.style.backgroundColor = '#09f';
// div.style.width = '200px';
// div.style.marginTop = '20px';

//*document:
//ANCHOR document
// console.log(document.URL);
// console.log(document.inputEncoding);
// console.log(document.lastModified); //(tare5 2a5r t3del 3mlto fl sf7a)

//*create:
//ANCHOR create
/* let div = document.createElement('div');
document.body.appendChild(div);

let text = document.createTextNode('oba teka oba');
div.appendChild(text);

let comment = document.createComment('dah comment mktob t7t l text');
div.appendChild(comment);

let newAttribute = document.createAttribute('class');
newAttribute.value = 'ay 7aga';
div.setAttributeNode(newAttribute); */

//* events:
//ANCHOR events

//? how to make event:
// let button = document.getElementById('change');
// let div = document.getElementById('event');
// function change() {
//   div.style.color = 'red';
// }
// button.onclick = change;
//another way in html

//? onload onscroll onresize:
// let div = document.getElementById('onload');
// window.onload = function () {
//   console.log('dom is ready');
// };

// window.onresize = function () {
//   console.log('you resized the window');
// };

//? onfocus onblur onsubmit:
/* let div = document.querySelector('#note');
let input = document.querySelector('#input');
let sub = document.querySelector('#sub');
let form = document.getElementById('fego');
input.onfocus = function () {
  div.textContent = 'please dont forget a strong password';
};
input.onblur = function () {
  if (input.value.length > 10) {
    div.textContent = 'it works fine thanks';
  } else {
    div.textContent = 'its is not strong enogh';
  }
};
form.onsubmit = function (e) {
  e.preventDefault();
}; */

//? oncontextmenu onMouse:
/* let div = document.querySelector('#on');
window.oncontextmenu = function (e) {
  e.preventDefault();
};
div.onmouseenter = function () {
  div.style.color = 'red';
};
div.onmouseleave = function () {
  div.style.color = 'blue';
}; */

//? onkey(onkeyup  onkeydown):
// let input = document.getElementById('key');
// let div = document.getElementById('notice');

// input.onkeydown = function (e) {
//   console.log(this); //input
//   div.textContent = this.value;
//   if (e.key === 'Enter') {
//     console.log(e.key);
//   }
// };
/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* e.target vs e.currentTarget:(http://www.qc4blog.com/?p=650)
//ANCHOR e.target vs e.currentTarget
// mols sree3: target is the element that triggered the event (e.g., the user clicked on)
// currentTarget is the element that the event listener is attached to.

//? bdayt el shar7:
// JS events usually have two properties: e.currentTarget & e.target

// As you may know, when you click on an element, ‘click’ event bubbles up to <body> node of your element.

// Let’s have a look at this code:

// <body><p><a href="#">some <span>text</span></a></p></body>
// If someone click on ‘text’, a click event will be created and bubble up from <span> node up to <body> node (going throug <span>, <a>, <p> and <body> respectively – provided we did not stop event bubbling with our js code).

// You can attach an event on any of these nodes (<body>, <p>, <a>, <span>) and your event-listener will fire up as click event bubbles up to the top node. Here is the difference between event.currentTarget and event.target.

// event.target is the node from which the event originated, ie. wherever you place your event listener (on <p> or <span>), event.target refers to <span> node (where user clicked).
// event.currentTarget, on the opposite, refers to the node on which current-event listener was attached. Ie. if we attached our event listener on <p> node, then event.currentTarget refers to <p> while event.target still refers to <span>.
// Note: that if we also have an event listener on <body>, then for this event-listener, event.currentTarget refers to <body> (ie. event provided as input to event-listerners is updated each time event is bubbling one node up).

//?stackverflow (https://stackoverflow.com/questions/10086427/what-is-the-exact-difference-between-currenttarget-property-and-target-property)
//   <style>
//   body * {
//     margin: 10px;
//     border: 1px solid blue;
//   }
// </style>

// <form onclick="alert('form')">FORM
//   <div onclick="alert('div')">DIV
//     <p onclick="alert('p')">P</p>
//   </div>
// </form>
// Expand snippet
// If click on the P tag in above code then you will get three alert,and if you click on the div tag you will get two alert and a single alert on clicking the form tag. And now see the following code,

// <style>
//   body * {
//     margin: 10px;
//     border: 1px solid blue;
//   }
// </style>
// <script>
// function fun(event){
//   alert(event.target+" "+event.currentTarget);
// }

// </script>

// <form>FORM
//   <div onclick="fun(event)">DIV
//     <p>P</p>
//   </div>
// </form>
// Expand snippet
// We just removed onclick from the P and form tag and now when we click we on P tag we get only one alert:
// [object HTMLParagraphElement] [object HTMLDivElement]

// Here event.target is [object HTMLParagraphElement],and event.curentTarget is [object HTMLDivElement]: So

// event.target is the node from which the event originated, and event.currentTarget, on the opposite, refers to the node on which current-event listener was attached.To know more see bubbling

// Here we clicked on P tag but we don't have listener on P but on its parent element div.

//?important link: https://javascript.info/events

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* DOMContentLoaded vs load
//ANCHOR DOMContentLoaded vs load
// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

//?important link: https://javascript.info/loading

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */
//* throttling vs debounce:
//ANCHOR throttling vs debounce

//Debouncing and throttling are techniques in javascript that improve website performance in two distinct ways. While both are used to limit the number of times a function executes, throttling delays execution, thus reducing notifications of an event that fires multiple times. On the other hand, debouncing bunches together a series of calls into a single call to a function, ensuring one notification for multiple fires. Often used on functions that need to be called frequently or at regular intervals, they serve as great tools to simplify website code.

//? important links:
//1) https://programmingwithmosh.com/javascript/javascript-throttle-and-debounce-patterns/

//2) https://erpsolutions.oodles.io/developer-blogs/Throttle-Time-VS-Debounce-Time/

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* tips
//ANCHOR tips
/* Tip: Always specify the type attribute for the <button> element. Different browsers may use different default types for the <button> element.  */

/* Tip: The for attribute of <label> must be equal to the id attribute of the related element to bind them together. A label can also be bound to an element by placing the element inside the <label> element.  */

/* Element.scrollIntoView()
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

 Tip: 2y7aga b7otha fl input btkon string 7ata lw kant rqm fana 3ayz 27wlha l number 3shan 23rf 2t3aml m3aha fl array w kda w h7wlha 3n tre2 parseInt
 */

/* -------------------------------------------------------------------------- */
/*                                     end                                    */
/* -------------------------------------------------------------------------- */

//* Most used:
//ANCHOR Most used

//? selectors
// document.getElementsByClassName;
// document.getElementsByTagName;
// document.getElementById;
// document.querySelector;
// document.querySelectorAll;

// parentElement.querySelector('.blabla') //25tar 2y child element l parent element

//? classes
// Myele.classList.add('blabla', 'blbla', 'blabla');
// Myele.classList.remove('blabla');
// Myele.classList.toggle('blabla');

// Myele.classList.length;
// Myele.classList.value;

// Myele.classList.contains('blabla')

//? create attribute
// Myele.setAttribute('data-id', '1234');
// Myele.getAttribute('alt');

// const MyAttribute = document.createAttribute('data-id');
// MyAttribute.value = '1234';
// Myele.setAttributeNode(MyAttribute);

// Myele.hasAttribute('blabla'); //true or false
// Myele.removeAttribute('blabla');

// Myele.id = 'blabla';
// Myele.className = 'blabla';
// Myele.src = 'http://placehold.it/500/500';
// Myele.title = 'blabla';

//? create element
// document.createElement('blabla');

//? appendChild
// appendDiv.appendChild(newElement);

//? insert content
// Myele.innerHTML='<p>blabla</p>;
// Myele.textContent='blabla;

//? remove
// Myele.removeChild('blabla')
// Myele.remove() //Remove the selected element from the document:

//?Parent Element:
// Myele.parentElement;
// Myele.parentNode;

//? Element children:
// Myele.children;
// Myele.childNodes;

// dont return array but array iterator, if we want to use it as array we need to make array from it(Array.from())

//? mnw3at:
// Myele.firstElementChild;

//? DOM tree traversal:
/* 
DOM tree traversal may be accomplished through the use of six basic properties
previousSibling
nextSibling
childNodes or children
firstChild
lastChild
parentNode or parentElement
*/

//58. What is a window.onload and onDocumentReady?
/* The onload function is not run until all the information on the page is loaded. This leads to a substantial delay before any code is executed.

onDocumentReady loads the code just after the DOM is loaded. This allows early manipulation of the code. */
