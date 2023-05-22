const setup = () => {
    let belangrijk = document.getElementsByClassName("belangrijk");
    for(let i = 0; i < belangrijk.length; i++){
        if(belangrijk[i].className === "belangrijk"){
            belangrijk[i].className += " opvallend";
        }
    }
}
window.addEventListener("load", setup);