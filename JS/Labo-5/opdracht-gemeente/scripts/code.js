const setup = () => {
    let gemeente = ""
    let running = true;
    let gemeentes = [];
    for(let i = 0; running; i++){
        gemeente = window.prompt("gemeente: ");
        if(gemeente.localeCompare("stop") === 0){
            running = false;
        } else {
            gemeentes[i] = gemeente;
        }
    }
    gemeentes.sort(compare);
    for(let i = 0; i < gemeentes.length; i++){
        let option = document.createElement("option")
        option.text = gemeentes[i];
        document.getElementById("sldGemeentes").appendChild(option);
        //console.log(gemeentes[i]);
    }
}
const compare = (a, b) => {
    return a.localeCompare(b);
}
window.addEventListener("load", setup);