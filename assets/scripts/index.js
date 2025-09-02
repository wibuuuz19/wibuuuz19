document.querySelectorAll(".navbar-list a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElemen = document.getElementById(targetId);

        if(targetElemen){
            targetElemen.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }
    })
})
