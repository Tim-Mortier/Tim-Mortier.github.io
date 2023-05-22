const setup = () => {
    let woord = ""
    let gemeentes = [];
    while(woord !== "stop"){
        woord = window.prompt();
        if(woord !== "stop"){
            gemeentes.push(woord);
        } else {
            break;
        }
    }
    gemeentes = gemeentes.sort()
    console.log(gemeentes)
    window.prompt();
}
window.addEventListener("load", setup);