
const buttonBurger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__nav');
const body = document.body;

if(buttonBurger && menu){
  buttonBurger.addEventListener('click', function () {
    buttonBurger.classList.toggle('__active');
    menu.classList.toggle('__active');
    body.classList.toggle('__lock');
  }); 
} 

/*-----------------------Active dropdown--------------------------*/

var searchBlock = document.querySelector('.info__search');

if(searchBlock){
  let element = document.querySelectorAll('.search__block');
    element.forEach(element =>{
      element.addEventListener('click', event =>{
        element.querySelector('.block__dropdown').classList.toggle('_active');
        element.querySelector('.arrow').classList.toggle('_active');
        if(event.target.classList.contains('block__dropdown-item')){
          element.querySelector('.block__value').textContent = event.target.textContent;
        }
      })
    })
}

/*-------------------------Local Storage------------------------*/
const value = document.querySelector('.block__value').textContent;
localStorage.setItem('value', value);

const obj = {
  name: "Ali",
  age:"19"
}
localStorage.setItem('info', JSON.stringify(obj));
const  raw = localStorage.getItem('info');
const person = JSON.parse(raw);
person.name = "Mukhamedali";
console.log(person);