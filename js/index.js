const btn = document.querySelector(".btn-menu")
const links = document.querySelector(".links")

btn.addEventListener('click',()=>{
    btn.classList.toggle("change");
    links.classList.toggle("show-links");
})