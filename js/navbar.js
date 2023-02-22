const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const expand = document.getElementById("expand");

const navbar = document.getElementById("nav");

function expander(){
    const isBurger = burger.classList.contains("d-block");

    if(isBurger){
        burger.classList.remove("d-block")
        burger.classList.add("d-none")

        cross.classList.remove("d-none")
        cross.classList.add("d-block")

        expand.style = "width:100%;transition:.3s;";
    }else{
        cross.classList.remove("d-block")
        cross.classList.add("d-none")

        burger.classList.remove("d-none")
        burger.classList.add("d-block")

        expand.style = "width:0px;transition:.3s;";
    }
}

window.addEventListener("scroll", () => {
    if(!navbar.classList.contains("solid-color")){
        if(window.pageYOffset > document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black") === false){
            navbar.classList.add("bs-black")
        }else if(window.pageYOffset < document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black")){
            navbar.classList.remove("bs-black")
        }
    }
})

const aLinkList = document.getElementsByClassName("a-link");

Array.from(aLinkList).forEach((v) => {
    v.addEventListener("click", function(e){
        e.preventDefault()
        // console.log(e.target.getAttribute("href"));
        window.location = e.target.getAttribute("href")
    })
})