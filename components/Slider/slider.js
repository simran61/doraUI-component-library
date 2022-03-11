const slider= document.querySelector('.rangeSlider');
const value= document.querySelector('.value');

value.innerText= slider.value;

slider.oninput = function(){
    value.innerText=this.value
}
