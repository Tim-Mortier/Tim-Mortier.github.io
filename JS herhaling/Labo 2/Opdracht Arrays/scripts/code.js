let familieleden = ["jos1", "jos2", "jos3", "jos4", "jos5"];
const setup = () => {

    console.log(familieleden.length);
    console.log(familieleden[0] + " " + familieleden[2] + " " + familieleden[4]);
    voegNaamToe(prompt("vul naam in"));
    familieleden.join();
    console.log(familieleden);
}

const voegNaamToe = (text) => {
    familieleden.push(text);
    console.log(familieleden);
}



window.addEventListener("load", setup);