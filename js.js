//localstorage
let form = document.getElementById("form");
let button = document.getElementById("button");
let alerta = document.getElementById("alerta");
let alerta2 = document.getElementById("alerta2");

button.addEventListener("click", () => {
    form.classList.toggle("form--hidde")
    alerta.classList.toggle("form--hidde")
    alerta2.classList.remove("alerta2--show")

    //guardar en localstorage
    if(form.classList.contains("form--hidde")){
        localStorage.setItem("form--hidde", "true");
    }
});

if(localStorage.getItem("form--hidde") == "true"){
    form.classList.add("form--hidde")
    alerta.classList.add("form--hidde")
    alerta2.classList.remove("alerta2--show")
};