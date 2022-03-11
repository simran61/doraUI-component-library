var modeIcon= document.querySelector('.modeIcon');

modeIcon.addEventListener('click',()=>{
    document.body.classList.toggle('light_theme');
    if(document.body.classList.contains('light_theme')){
        modeIcon.src="../../assets/sun.svg";
    }else{
        modeIcon.src="../../assets/moon.svg";
    }
})