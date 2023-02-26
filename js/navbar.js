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
    console.log(navbar.classList.contains("custom"));
    if(!navbar.classList.contains("solid-color") ){
        if(!navbar.classList.contains("custom")){
            if(window.pageYOffset > document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black") === false){
                navbar.classList.add("bs-black")
            }else if(window.pageYOffset < document.getElementById("greetings").getBoundingClientRect().bottom && navbar.classList.contains("bs-black")){
                navbar.classList.remove("bs-black")
            }
        }
    }
})

const aLinkList = document.getElementsByClassName("a-link");

Array.from(aLinkList).forEach((v) => {
    v.addEventListener("click", function(e){
        e.preventDefault()

        // toggleGordeng();
        setTimeout(() => {
            window.location = e.target.getAttribute("href")
        }, 1900)
    })
})



// gordeng

const gordeng = document.getElementById("gordeng");
const gordengH1 = document.getElementById("gordengText");

function toggleGordeng(isInit=false){
    if(isInit){
        setTimeout(()=>{
            gordengH1.style = "opacity: 0; transition: 1.8s;"
            gordeng.style = "height:0px !important; transition: 1.6s;"
        }, 1000)
    }else{
        gordeng.style = "height:100% !important; transition: 1.6s;"
        gordengH1.style = "opacity: 1; transition: 1.8s;"
    }
}

toggleGordeng(true);