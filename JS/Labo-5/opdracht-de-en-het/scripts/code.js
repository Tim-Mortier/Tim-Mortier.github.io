const setup = () => {
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    /*while(text.includes("De ") || text.includes(" de ")){
        if(text.includes("De ")){
            text = text.replace("De ", "Het ");
        } else{
            text = text.replace(" de ", " het ");
        }
        console.log(text);
    }*/
    verander(text);
}
let verander = (text) => {
    let woorden = [];
    //console.log(text.indexOf(" "));
    //console.log(text.slice(0, text.indexOf(" ")));
    //console.log(text.slice(text.indexOf(" ") + 1, text.length));
    for(let i = 0; woorden.length === 3 ; i++){
        woorden[i] = text.slice(0, text.indexOf(" "))
        console.log(text.slice(0, text.indexOf(" ")));
        console.log(text.slice(text.indexOf(" ") + 1, text.length));
        console.log(text);
    }
    for(let i = 0; i < woorden.length; i++){
        console.log(woorden[i]);
    }

}

//oplossing docent
/*const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx = result.indexOf(oud),
        while(idx!= -1)
}*/
window.addEventListener("load", setup);