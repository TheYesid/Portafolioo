const show = document.querySelector(".show")
const menu = document.querySelector(".menu")
const home = document.querySelector(".home")
const acerca = document.querySelector(".acerca")
const exp = document.querySelector(".exp")
const habilitys = document.querySelector(".habilitys")
const mi_brief = document.querySelector(".mi_brief")
const contact = document.querySelector(".contact")


show.addEventListener("click", ()=>{
    menu.classList.toggle("show_on")
})

home.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})

acerca.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})

exp.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})

habilitys.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})


mi_brief.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})


contact.addEventListener("click", () =>{
    menu.classList.remove("show_on")
})


