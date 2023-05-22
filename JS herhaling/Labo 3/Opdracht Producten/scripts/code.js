const setup = () => {
    bereken();
document.getElementById("btnBereken").addEventListener("click", bereken);
}

const bereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let aantallen = document.getElementsByClassName("aantallen");
    let totaal = 0;
    for(let i = 0; i < prijzen.length; i++){
        let prijs = parseFloat(prijzen[i].innerHTML.substring(0, prijzen[i].innerHTML.indexOf(" Eur")));
        let btw = parseInt(btws[i].innerHTML.substring(0, btws[i].innerHTML.indexOf("%")));
        let aantal = aantallen[i].value;
        let subtotaal = prijs * (1 + btw/100) * aantal;

        totaal += subtotaal;
        subtotalen[i].innerHTML = subtotaal.toFixed(2) + " Eur";
    }
    document.getElementById("totaal").innerHTML =  totaal.toFixed(2) + " Eur";
}
window.addEventListener("load", setup);