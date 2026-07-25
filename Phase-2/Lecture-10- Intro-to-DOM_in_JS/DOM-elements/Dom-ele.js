"use strict"

// getElementById()
console.log(document.getElementById('first-heading'));
// console.log(document.getElementById('heading'));
console.log(document.getElementById('first-container'));

// getElementByTagName()
console.log(document.getElementsByTagName('div'))

// getElemetByClassName()
console.log(document.getElementsByClassName('first-class'));

// querySelector()
let var1 = document.getElementById('second-container')
// console.log(var1);
console.log(var1.querySelector('p'));

// querySelectorAll()
console.log(var1.querySelectorAll('p'));

let linkHidden = document.getElementById('heading-two')
//document.innerHTML
console.log(linkHidden.innerHTML);
//document.innerText
console.log(linkHidden.innerText);
//document.textContent
console.log(linkHidden.textContent);


// getAttribute()
let mainHead = document.getElementById('first-heading')
console.log(mainHead.getAttribute('class'));

// setAttribute
let head3Att = document.getElementById('head3')
head3Att.setAttribute('class','dummy')
console.log(head3Att);

head3Att.setAttribute('id','head3 random')


head3Att.innerHTML = 'Enjoying Learning DOM'
head3Att.style.backgroundColor = 'black'
head3Att.style.color = 'yellow'
head3Att.style.display = 'inline'
head3Att.style.padding = '10px'
head3Att.style.borderRadius = '5px'
