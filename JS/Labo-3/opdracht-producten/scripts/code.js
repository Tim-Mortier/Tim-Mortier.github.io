const setup = () => {
    //document.getElementById("btnHerbereken").addEventListener("click", update);
    let inputs = document.getElementsByClassName("input");
    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener("change", update);
    }
}
const update = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let inputs = document.getElementsByClassName("input");
    let result = 0;
 for (let i = 0; i < prijzen.length; i++){
     //let prijs = parseFloat(prijzen[i].innerHTML);
     //let btw = parseFloat(btws[i].innerHTML);
     //let input = inputs[i].value;
     //let tempResult = prijs * (btw/100 + 1) * input;
     let tempResult =  parseFloat(prijzen[i].textContent) * (parseFloat(btws[i].innerHTML)/100 + 1) * inputs[i].value;
     result += tempResult;
     subtotalen[i].innerHTML = (tempResult.toFixed(2) + " EUR").replace(".",",");
 }
 console.log(result);
    document.getElementById("totaal").innerHTML = (result.toFixed(2) + " EUR").replace(".",",");
}
window.addEventListener("load", setup);