// javascript variables
var FullName='prajun';
let address='kathmandu,Nepal';
const bloodGroup= 'ab+';

console.log('fullName :',FullName);
console.log('Address :',address);
console.log('BloodGroup :',bloodGroup);

//data types

let age=25; //number
let isStudent = false //boolean
let name= 'prajun'
let hobbies=['coding','travelling','cooking'];

//object
let user={
    name :'prajun',
    age : 25,
    isstudent : false,
    hobbies : ['coding','travelling','cooking'],
};

//function
function greet(name){
    console.log('welcome', name)
}
greet('prajun maharjan')

console.log(user['name']);
console.log(user.name);

const headingElementByID=document.getElementById('heading-2')
console.log('heading element by ID ',headingElementByID);


// in element dont forget to add '#'
const headingElementByQuery=document.querySelector("#heading-2")
console.log('heading element by Query Selector',headingElementByQuery);

headingElementByQuery.textContent= 'get element by query selector';
headingElementByQuery.style.color='blue'

const buttonElement= document.querySelector('.btn');
buttonElement.addEventListener('click',function() {
    alert('button clicked');
    console.log('bottom clicked');
}); 


