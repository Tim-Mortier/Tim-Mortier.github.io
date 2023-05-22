const setup = () => {
    show();
    document.getElementById("btnFind").addEventListener("click", find);
}

let seats = [ false, true, false, true, true, true, false, true,
    false, false, true, false, false, true, false, true,
    true, true, true, true, true, true, false, true,
    true, true, true, false, true, false, false, true ];

const show = () => {
    let divSeats = document.getElementById("seats");
    for(let i = 0; i < seats.length; i++){
        if(i%8 === 0){
            let br = document.createElement("br");
            divSeats.appendChild(br);
        }
        let img = document.createElement("img");
        img.id = "seat"+i;
        if(seats[i]){
            img.src = "./images/seat_avail.png";
            img.alt = "available seat";
        } else {
            img.src = "./images/seat_unavail.png";
            img.alt = "unavailable seat";
        }
        divSeats.append(img);
    }
}

const find = () => {
    let found = false;
    let i = 0;
    let rij = 0;
    while(!found){
        if(i % 8 === 0){
            rij++;
        }
        if(i % 8 !== 7 && i % 8 !== 6 && seats[i] && seats[i + 1] && seats[i + 2]){
            found = confirm("found at " + (i + 1) + " - " + (i + 4) + " on row" + rij);
            if(found){
                console.log("erin");
                document.getElementById("seat"+ i).src = "./images/seat_select.png";
                document.getElementById("seat"+ (i + 1)).src = "./images/seat_select.png";
                document.getElementById("seat"+ (i+2)).src = "./images/seat_select.png";
                break
            }
        }
        i++;
    }

}
window.addEventListener("load", setup);