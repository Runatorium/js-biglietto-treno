const ppkm = 0.21;
const over18 = 18;
const over65 = 65;



let eta_psg = prompt("Età del Passeggero");
let n_km = prompt("Quanti Chilometri devi percorrere?");

let costokmutente = (n_km * ppkm);

console.log(costokmutente);

if (eta_psg => over18){
    console.log("L'utente è maggiorenne")

}
