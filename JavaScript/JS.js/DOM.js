// const char = document.querySelectorAll('p');
// const chars = document.querySelectorAll('.error')
// console.log(chars)
// console.log(char[1])
// char.forEach(charles => {
//     
// get an element by Id
// const get =document.getElementById('hgt')
// console.log(get);

// const gets = document.getElementsByClassName('error')
// console.log(gets)
// console.log(gets[0])

// const her = document.getElementsByTagName('p')
// console.log(her[2])

// get element by class

// let para = document.querySelector('p')
// console.log(para.innerText)
// para.innerText +=' hey man'


// let paras = document.querySelectorAll('p')
//  paras.forEach(par=>{
//     console.log(par.innerText);
//     par.innerText +=' you';
// });

// innerHTML
const hey = document.querySelector(".hello")
console.log(hey.innerHTML)
hey.innerHTML += '<p>You good?</p>'

let charles = document.querySelector('p.error')
let people =['charles', 'pharrell', 'emeka']
people.forEach(person=>{
charles.innerHTML +=`<p>${person}</p>`
})