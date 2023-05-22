const setup = () => {
    document.getElementById("btnGo").addEventListener("click", addTafel);
}

const addTafel = () =>{
    console.log("addTafel");
    let value = document.getElementById("txtStart").value
    let startGetal = parseInt(value);
    if(isNaN(startGetal)){
        //alert("Geen geldig getal")
    } else if(startGetal <= 10) {
        console.log("geldig getal");
        let tafel = {
            start: startGetal,
            datum: new Date()
        };
        let div = document.createElement("div");
        let header = createHeader(tafel);
        let divTafels = document.getElementById("tafels");
        let body = createTafel(tafel);

        div.classList.add("tafel");

        div.append(header);
        div.append(body);
        divTafels.append(div);
    }

}

const createTafel = (tafel) => {
    console.log("createTafel");
    let body = document.createElement("div")
    let start = tafel.start;
    for(let i = 1; i <= 10; i++){
        let onderdeel = document.createElement("div");
        let text = document.createTextNode(start + " x " + i + " = " + start*i);
        if(i % 2 === 0){
            onderdeel.classList.add("even");
        }
        onderdeel.append(text);
        body.append(onderdeel);
    }
    return body
}

const createHeader = (tafel) => {
    console.log("createHeader");
    let header = document.createElement("header");
    let time = tafel.datum.getHours() + ":" + tafel.datum.getMinutes() + ":" + tafel.datum.getSeconds();
    let text = document.createTextNode("Tafel van " + tafel.start + " aangemaakt op: " + time);
    header.classList.add("header");
    header.append(text);
    return header;
}

/*const storeTafel = (tafel) => {
    console.log("storeTafel");
    let tafels = JSON.parse(localStorage.getItem("tafels"));
    if(tafels == null){
        tafels = [];
    }
    tafels.push(tafel);
    localStorage.setItem("tafels", JSON.stringify(tafels));
}

const restoreTafels = () => {
    console.log("restoreTafels");
    let tafels = JSON.parse(localStorage.getItem("tafels"));
    if(tafels != null){
        for(let i = 0; i < tafels.length; i++){
            console.log(i);
            addTafel(tafels[i]);
        }
    }
}*/

window.addEventListener("load", setup);