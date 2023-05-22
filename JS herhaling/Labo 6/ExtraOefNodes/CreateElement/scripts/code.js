const setup = () => {


    let items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].className = 'listitem';
    }

    let myPic = document.createElement('img');
    myPic.setAttribute ("src", 'http://gotocon.com/dl/jaoo_aus2008/photos/speakers/Pamela_Fox.jpg');

    document.querySelector("body").appendChild(myPic);
};
window.addEventListener("load", setup);