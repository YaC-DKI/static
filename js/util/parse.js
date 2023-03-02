$("body").ready(() => {
    console.log(data.length);
    data.forEach((v) => {
        
        const name = v.name.split(" ")
        $("#card-wrapper").append(`
                <div class="usercard d-flex flex-column s-card rounded overflow-hidden position-relative bs-white d-flex flex-column" data-id="${v._id}" data-aos='fade-up' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="w-100 position-absolute decor bs-black" style="height: 70px; top: 0px;"></div>
                    <div class="rounded-circle align-self-center bs-light-orange d-flex cs-black justify-content-center align-items-center mt-4 z-1"  id="name">
                        <h3 class="cs-black poppins bold p-0 m-0">
                            ${name.length > 1 ? (name[0][0] + name[name.length -1][0]).toUpperCase() : v.name[0]} 
                        </h3>
                    </div>

                    <p class="text-center popins bold mt-2 fs-4 mb-0">
                        ${name.length > 1 ? name[0] + " " + name[name.length -1] : v.name} 
                    </p>
                    <p class="text-center popins fs-6 m-0">
                        @${v.username}
                    </p>
                    <div class="w-100 p-2 d-flex justify-content-evenly mt-4" style="border-top: 2px solid rgba(0, 0, 0, 0.202);">
                        <span class="text-center m-0 p-0 cs-light-black bold">
                            <p class="m-0 p-0">${v.projects.length}</p>
                            <p class="m-0 p-0">Posts</p>
                        </span>
                        <span class="text-center m-0 p-0 cs-light-black bold">
                            <p class="m-0 p-0">${v.certificates.length}</p>
                            <p class="m-0 p-0">Certificates</p>
                        </span>
                        <span class="text-center m-0 p-0 cs-light-black bold">
                            <p class="m-0 p-0">${v.skills.length}</p>
                            <p class="m-0 p-0">Skills</p>
                        </span>
                    </div>
                </div>
        
        `)
    })
    let current = false;
    let selectedData = false;
    let currentPostType = "selpost";

    $(".usercard").click(function(){
        current = this.getAttribute("data-id");
        selectedData = data.filter(x => x._id === current)[0]
        const selectedName = selectedData.name.split(" ")

        $("#u_name").empty().append(selectedData.name);
        $("#u_uname").empty().append("@"+selectedData.username)
        $("#u_project").empty().append(selectedData.projects.length)
        $("#u_cert").empty().append(selectedData.certificates.length)
        $("#u_skill").empty().append(selectedData.skills.length)
        $("#u_short").empty().append(selectedName.length > 1 ? (selectedName[0][0] + selectedName[selectedName.length -1][0]).toUpperCase() : v.selectedName[0])

        currentPostType = "selpost";
        $(".sel").each(function(i, obj){
            if(obj.getAttribute("id") !== currentPostType){
                $(`#${obj.getAttribute("id")}`).removeClass("selectedField")
            }else{
                $(`#${obj.getAttribute("id")}`).addClass("selectedField")
            }
        })

        selectedData.projects.forEach((v) => {
            $(".userpost").empty().append(`
                <div class="card-post d-flex my-2 px-0 w-100">
                    <div class="cp-left d-flex justify-content-center align-items-center cs-orange">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
                        </svg>
                    </div>

                    <div class="cp-right px-2 cs-black py-1">
                        <h4 class="bold poppins ">
                            ${v.name}
                        </h4>
                        <p class="poppins desc">
                            ${v.description}
                        </p>

                        <a href="${v.link}" class="cs-black bold">
                            More Info
                        </a>
                        
                    </div>

                </div>
            `)

        })
    })

    $(".close-expand").click(function(){
        current = false;
    })
    $(".modal").click(function(e){
        if(e.target.classList.contains("modal")){
            current = false;
        }
    })

    
    $(".sel").click(function(){
        const clicked = this.getAttribute("id");
        
        if(currentPostType !== clicked){
            currentPostType = clicked;
            $(".sel").each(function(i, obj){
                if(obj.getAttribute("id") !== clicked){
                    $(`#${obj.getAttribute("id")}`).removeClass("selectedField")
                }else{
                    $(`#${obj.getAttribute("id")}`).addClass("selectedField")
                }
            })

            switch(clicked){
                case "selpost":
                    selectedData.projects.forEach((v) => {
                        $(".userpost").empty().append(`
                            <div class="card-post d-flex my-2 px-0 w-100">
                                <div class="cp-left d-flex justify-content-center align-items-center cs-orange">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
                                    </svg>
                                </div>
    
                                <div class="cp-right px-2 cs-black py-1">
                                    <h4 class="bold poppins ">
                                        ${v.name}
                                    </h4>
                                    <p class="poppins desc">
                                        ${v.description}
                                    </p>
    
                                    <a href="${v.link}" class="cs-black bold">
                                        More Info
                                    </a>
                                    
                                </div>
    
                            </div>
                        `)

                    })
                    break;

                case "selcert":
                    selectedData.certificates.forEach((v) => {

                        $(".userpost").empty().append(`
                    <div class="card-post d-flex my-2 px-0 w-100">
                        <div class="cp-left d-flex justify-content-center align-items-center cs-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                            </svg>
                        </div>
    
                        <div class="cp-right px-2 cs-black py-1">
                            <h4 class="bold poppins ">
                                ${v.title}
                            </h4>
                            <p class="poppins desc p-0 m-0 bold">
                                ${v.certID}
                            </p>
                            
                            <p class="poppins desc p-0 m-0" style="font-size: .70em;">
                                ${v.organizer}
                            </p>
    
                            <a href="${v.certLink}" class="cs-black bold">
                                More Info
                            </a>
                            
                        </div>
    
                    </div>
                        `);
                    })
                    break;
                
                case "selskill":
                    $(".userpost").empty().append(`

                    <div class="card-post d-flex my-2 px-0 w-100">
                        <div class="cp-left d-flex justify-content-center align-items-center cs-orange">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                        </div>
    
                        <div class="cp-right px-2 cs-black py-1 position-relative d-flex flex-column">
                            <h4 class="bold poppins mb-0">
                                Kedamaian Hidup
                            </h4>
                            <p class="poppins desc p-0 m-0 bold fs-4 cs-black poppins align-self-end">
                                98%
                            </p>
                            <div class="w-100 bs-light-black h-100 overflow-hidden rounded" >
                                <div class="h-100 bs-orange" style="width: 70%;"></div>
                            </div>
                            
                        </div>
    
                    </div>
                    `)
            }
        }
    })

})