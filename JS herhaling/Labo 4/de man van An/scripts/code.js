const setup = () => {
    let tekstUpperCase = "De man van An geeft geen hand aan ambetante verwanten";
    let tekst = tekstUpperCase.toLowerCase();
    let i = 0;
    let aantal = 0;
    while(tekst.indexOf("an", i) !== -1){
        aantal++;
        i = tekst.indexOf("an", i) + 1;
    }
    /*let i = tekst.length;
    let aantal = 0;
    while(tekst.lastIndexOf("an", i) != -1){
        aantal++;
        i = tekst.lastIndexOf("an", i) -1;
    }*/
    console.log(aantal);
}
window.addEventListener("load", setup);