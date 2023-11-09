const frm = document.querySelector("#frm"); 
const wmain = document.querySelector("#wmain"); 
const wsuccess = document.querySelector("#wsuccess"); 
const errmsg = document.querySelector("#errmsg"); 
const btndismiss = document.querySelector("#btn_dismiss"); 
const email = document.querySelector("#email"); 

var exp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

frm.addEventListener("submit", (event) => {
    event.preventDefault(); 
    errmsg.innerHTML = "";
    if (email.value === "") { 
        email.classList.add("error");
        errmsg.innerHTML = "Ingresa un correo";
    }
    else {
        if (!exp.test(email.value)) {
            email.classList.add("error");
            errmsg.innerHTML = "Ingresa un correo válido";
        } else {
            wmain.classList.add("hide_element");
            wsuccess.classList.remove("hide_element");
        }
    }
});
btndismiss.addEventListener("click", () => {
    wsuccess.classList.add("hide_element");
    wmain.classList.remove("hide_element");
});

