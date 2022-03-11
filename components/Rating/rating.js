var star1= document.querySelector('.star1');
var star2= document.querySelector('.star2');
var star3= document.querySelector('.star3');
var star4= document.querySelector('.star4');
var star5= document.querySelector('.star5');
var rating_desc= document.querySelector('.rating_desc')

star1.addEventListener('click',()=>{
    star1.style.color='#308acf';
    star2.style.color='grey';
    star3.style.color='grey';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='You rated 1 star';
})

star2.addEventListener('click',()=>{
    star1.style.color='#308acf';
    star2.style.color='#308acf';
    star3.style.color='grey';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='You rated 2 star';
})

star3.addEventListener('click',()=>{
    star1.style.color='#308acf';
    star2.style.color='#308acf';
    star3.style.color='#308acf';
    star4.style.color='grey';
    star5.style.color='grey';
    rating_desc.innerText='You rated 3 star';
})

star4.addEventListener('click',()=>{
    star1.style.color='#308acf';
    star2.style.color='#308acf';
    star3.style.color='#308acf';
    star4.style.color='#308acf';
    star5.style.color='grey';
    rating_desc.innerText='You rated 4 star';
})

star5.addEventListener('click',()=>{
    star1.style.color='#308acf';
    star2.style.color='#308acf';
    star3.style.color='#308acf';
    star4.style.color='#308acf';
    star5.style.color='#308acf';
    rating_desc.innerText='You rated 5 star';
})
