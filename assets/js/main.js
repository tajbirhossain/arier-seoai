const overlay = document.querySelector(".overlay")
const menuImg = document.querySelector(".menuImg")
const aside = document.querySelector("aside")




menuImg.addEventListener("click", () => {
    overlay.classList.add("active")
    aside.classList.add("active")
})
overlay.addEventListener("click", () => {
    overlay.classList.remove("active")
    aside.classList.remove("active")
})