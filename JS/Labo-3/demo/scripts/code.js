const setup = () => {
    let btnTry = document.getElementById("btnTry");

    // Even-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    // eventListeners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);

    document.getElementById("btnWithBullets").addEventListener("click", withBullets);

    //eventListeners difference between "textContent" and "innerHTML"

    document.getElementById("btnContent").addEventListener("click", changeContent);
}
// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}
//onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>"
}
//mouseOutFunction
const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}

//changeCSS
const withoutBullets = () => {

    let i;
    let listItems = document.getElementsByTagName("li");
    for (i=0; i < listItems.length; i++)
    {//eerste manier, nooit gebruiken
      /*  listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="Red"; */
      //tweede manier
      //listItems[i].className = "listItemsStyleNone colorRed"
      //derde manier
        if (listItems[i].classList.contains("colorWhite"))
        {
            listItems[i].classList.remove("colorWhite");
        }
        if (listItems[i].classList.contains("listItemsStyleDisc"))
        {
            listItems[i].classList.remove("listItemsStyleDisc");
        }
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].className);
    }
}

const withBullets = () => {
    //eerste manier, nooit gebruiken
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i=0; i < listItems.length; i++)
    {//eerste manier, nooit gebruiken
       /* listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white"; */
        //tweede manier
        //listItems[i].className = "listItemsStyleDisc colorWhite"
        //derde manier
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output " + listItems[i].className);
    }
}

// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}
window.addEventListener("load", setup);