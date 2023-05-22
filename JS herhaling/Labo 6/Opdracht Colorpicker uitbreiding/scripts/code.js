const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    document.getElementById("btnSave").addEventListener("click", save);
}
const update = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    document.getElementById("spanRed").innerHTML = red;
    document.getElementById("spanGreen").innerHTML = green;
    document.getElementById("spanBlue").innerHTML = blue;

    document.querySelector("#configuration>.swatch").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
   // document.getElementById("swatch").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}

const save = () => {
    let swatch = makeSwatch();
    swatch = configureSwatch(swatch);

    let swatches = document.getElementById("swatches");
    swatches.appendChild(swatch);

}

const makeSwatch = () => {
    let swatch = document.createElement("div");
    swatch.setAttribute("class", "swatch");

    let button = document.createElement("input");
    button.setAttribute("value", "X");
    button.setAttribute("class", "delete");
    button.setAttribute("type", "button");
    button.addEventListener("click", deleteSwatch);

    swatch.appendChild(button);
    return swatch;
}

const configureSwatch = (swatch) => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value;

    swatch.style.backgroundColor = "rgb("+red+","+green+","+blue+")";

    return swatch;
}

const deleteSwatch = (event) => {
    console.log(event.currentTarget);
}
window.addEventListener("load", setup);