const setup = () => {
    if(document.getElementById("txtVoornam").textContent.length > 30){
        alert("max. 30 karakters")
    }
    let familienaam = document.getElementById("txtFamilienaam").textContent;
    if(familienaam.length == 0){
        alert("verplicht veld");
    } else if(familienaam.length > 50){
        alert("max 50 karakters");
    }

    let mail = document.getElementById("txtMail").textContent;
    if(mail.length == 0){
        alert("verplicht veld");
    } else if(familienaam != "*@*.*"){
        alert("geen geldig email adres");
    }

    let kinderen =  document.getElementById("numKinderen").value;
    if(kinderen < 0){
        alert("is geen positief getal");
    } else if(kinderen > 99){
        alert("is te vruchtbaar");
    }
}
window.addEventListener("load", setup);