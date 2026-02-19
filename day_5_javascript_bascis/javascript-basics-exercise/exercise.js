// counter app
const counter=document.querySelector('.js-counter-text')
const btn_increase=document.querySelector('.js-increment-btn')
const btn_decrease=document.querySelector('.js-decrement-btn')
var count=0;
btn_increase.addEventListener('click',function() {
    count=counter.textContent=count+1;
}); 
btn_decrease.addEventListener('click',function() {
    count=counter.textContent=count-1;
}); 

//dog age calculator

const ageInput =document.querySelector('.js-age-input');
const result=document.querySelector('.js-result');
const btn_calculate=document.querySelector('.js-calculate-btn')
btn_calculate.addEventListener('click',function() {
    const yourAge=Number(ageInput.value);
    if(!yourAge || yourAge<=0){
        result.textContent='invalid age must be 1 or more';
        result.style.color='red';
        return;
    }
    result.style.color='black';

    let dog_age;
    dog_age=ageInput/7;

    result.textContent=`your dog age is $(dog_age)`;

    

}); 