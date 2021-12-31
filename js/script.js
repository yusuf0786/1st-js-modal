let mybtn = document.querySelector("#mybutton")
let mybox = document.querySelector(".content_box")
let myclose = document.querySelector(".content_box span")
let active = false

mybox.style.display = "none"
mybox.style.opacity = "0"


mybtn.addEventListener("mouseenter", ()=>{
    mybox.style.display = "block"
    setTimeout(()=>{ active ? mybox.style.opacity = "1" : mybox.style.opacity = "0.5" },100)
})
mybtn.addEventListener("mouseleave", ()=>{
    active ? mybox.style.opacity = "1" : mybox.style.opacity = "0"
    setTimeout(()=>{ active ? mybox.style.display = "block" : mybox.style.display = "none" },500)
})
mybtn.addEventListener("click", ()=>{
    active = true
    mybox.style.display = "block"
    setTimeout(()=>{ mybox.style.opacity = "1" },100)
})


myclose.addEventListener("mouseover", ()=>{
    myclose.classList.add("classRotation")
})
myclose.addEventListener("mouseleave", ()=>{
    myclose.classList.remove("classRotation")
})
myclose.addEventListener("click", ()=>{
    active = false
    mybox.style.opacity = "0"
    setTimeout(()=>{ mybox.style.display = "none" }, 500)
})