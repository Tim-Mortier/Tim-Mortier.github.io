const setup = () => {
    tree();
}
const tree = () =>{
    let hoogte = 6;
    let ster = '';
    for (let i=0; i < hoogte; i++){
        if(i%2)
            ster += "*";
        else
            ster += "+"; //geen accolades nodig bij 1 argument
        console.log(ster);
    }
}
window.addEventListener("load", setup); //geen haakjes voor methode nodig als parameter