const setup = () => {
    document.getElementById("afbeelding").addEventListener("mouseover", change);
}
const change = () => {
    let afbeelding = document.getElementById("afbeelding");
    afbeelding.src = "images/kat.jpg";
    afbeelding.alt = "kat";
}
window.addEventListener("load", setup);