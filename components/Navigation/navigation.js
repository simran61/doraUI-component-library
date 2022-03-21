const hamburgerBtn = document.querySelector(".hamburger_menu_drawer");
const drawer = document.querySelector(".drawer_container");
const closBtn = document.querySelector(".drawer_close");


hamburgerBtn.addEventListener("click",()=>{
    drawer.classList.add("transition_start");
    drawer.classList.remove("transition_end");
})

function closeDrawer(){
    drawer.classList.remove("transition_start");
    drawer.classList.add("transition_end");
}

closBtn.addEventListener("click",closeDrawer)