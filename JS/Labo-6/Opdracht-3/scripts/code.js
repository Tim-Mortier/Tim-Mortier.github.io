const setup = () => {
    document.getElementById("btnSend").addEventListener("click", update)
}
const update = () => {
    let p = document.createElement("p");
    p.appendChild(document.createTextNode("some text"))
    document.getElementById("myDIV").appendChild(p);
}
window.addEventListener("load", setup);