const setup = () => {
    let p = document.querySelectorAll("p")[0];
    p.removeChild(p.firstChild);
    let tekst = document.createTextNode("Good job!");
    p.appendChild(tekst);
}
window.addEventListener("load", setup);