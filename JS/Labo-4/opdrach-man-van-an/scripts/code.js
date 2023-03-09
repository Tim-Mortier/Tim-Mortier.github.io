const setup = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    tekst = "an an an an an an an an";
    console.log(tekst.lastIndexOf("an"));
    tekst.toLowerCase();
    let i = 0;
    let aantal = 0;
    /*while(tekst.indexOf("an", i) != -1){
        aantal++;
        i = tekst.indexOf("an", i) + 1;
    }*/
    while(tekst.lastIndexOf("an", i) != -1){
        aantal++;
        i = tekst.lastIndexOf("an", i);
    }
    console.log(aantal);*/
}
window.addEventListener("load", setup);