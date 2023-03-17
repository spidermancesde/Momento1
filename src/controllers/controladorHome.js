let menu = document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop>100){
        menu.classList.add("menuSecundario")
        menu.classList.remove("menuPrincipal")
    }else{
        menu.classList.remove("menuSecundario")
        menu.classList.add("menuPrincipal")
    }
})