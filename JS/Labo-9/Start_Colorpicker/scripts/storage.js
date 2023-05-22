

const storeSliderValues = () => {
    let slider = {};
    let sliderJSON;

    slider.red = document.getElementById("sldRed").value;
    slider.green = document.getElementById("sldGreen").value;
    slider.blue = document.getElementById("sldBlue").value;

    sliderJSON = JSON.stringify(slider);
    localStorage.setItem("labo-9.sliderJSON", sliderJSON);
};

const restoreSliderValues = () => {
    let slider;
    let sliderJSON = localStorage.getItem("labo-9.sliderJSON");

    if(sliderJSON === undefined){
        slider = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        slider = JSON.parse(sliderJSON);
    }

    document.getElementById("sldRed").value = slider.red;
    document.getElementById("sldGreen").value = slider.green;
    document.getElementById("sldBlue").value = slider.blue;
};

const storeSwatches = () => {
    /*let swatches;
    if(localStorage.getItem("labo-9.swatches") === null){
        swatches = [];
    } else {
        swatches = JSON.parse(localStorage.getItem("labo-9.swatches"));
    }
    let swatch = localStorage.getItem("labo-9.sliderJSON");*/
    let swatches = [];
    let swatchComponents = document.getElementsByClassName("swatch");
    for(let i = 1; i < swatchComponents.length; i++){
        let slider = {
            red: swatchComponents[i].getAttribute("data-red"),
            green: swatchComponents[i].getAttribute("data-green"),
            blue: swatchComponents[i].getAttribute("data-blue")
        };
        let sliderJSON = JSON.stringify(slider);
        swatches.push(sliderJSON);
    }
    let swatchesJSON = JSON.stringify(swatches);
    localStorage.setItem("labo-9.swatches", swatchesJSON);
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("labo-9.swatches"));
    for(let i = 0; i < swatches.length; i++){
        let swatch = JSON.parse(swatches[i]);
        addSwatchComponent(swatch.red, swatch.green, swatch.blue);
    }
};
