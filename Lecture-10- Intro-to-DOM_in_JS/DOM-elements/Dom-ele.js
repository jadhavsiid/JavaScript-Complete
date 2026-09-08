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


// Handling NodeList - Changing colour of all h2's

let bunchOfNodeList = document.querySelectorAll('h2')
bunchOfNodeList.forEach((item)=>{
    item.style.color = 'red'
})


// Handling HTMLCollection - Designing button's by first converting NodeList into Array using Array.from()

let collectionHTML = document.getElementsByClassName('btn')

let arrCollection = Array.from(collectionHTML)
console.log(arrCollection);

arrCollection.forEach((item) =>{
    item.style.backgroundColor = 'green'
    item.style.color = 'white'
    item.style.padding = '0.7rem'
    item.style.margin = '0.2rem'
    item.style.backgroundColor = 'green'
    item.style.border = 'none'
    item.style.borderRadius = '10px'
})