const hide1=document.querySelector('.hide1');
const hide2=document.querySelector('.hide2');
const hide3=document.querySelector('.hide3');
const hide4=document.querySelector('.hide4');
const hide5=document.querySelector('.hide5');

const successToast=document.querySelector('.success_toast');
const warningToast=document.querySelector('.warning_toast');
const errorToast=document.querySelector('.error_toast');
const infoToast=document.querySelector('.info_toast');
const primaryToast=document.querySelector('.primary_toast');

hide1.addEventListener('click',()=>{
    successToast.style.display="none";
})

hide2.addEventListener('click',()=>{
    warningToast.style.display="none";
})

hide3.addEventListener('click',()=>{
    errorToast.style.display="none";
})

hide4.addEventListener('click',()=>{
    infoToast.style.display="none";
})

hide5.addEventListener('click',()=>{
    primaryToast.style.display="none";
})