const cScripts = document.getElementsByClassName('c-script');

console.log(cScripts);

window.addEventListener("scroll", () => {
    if(!navbar.classList.contains("solid-color")){
        if(window.pageYOffset > document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black") === false){
            navbar.classList.add("bs-black");
            document.getElementById("burger").setAttribute("fill", "white")
            Array.from(cScripts).forEach((v) => {
                console.log(v);
                v.classList.replace("cs-black", "cs-white");
            })
        }else if(window.pageYOffset < document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black")){
            document.getElementById("burger").setAttribute("fill", "black")
            navbar.classList.remove("bs-black");
            Array.from(cScripts).forEach((v) => {
                v.classList.replace("cs-white", "cs-black");
            })
        }
    }
})