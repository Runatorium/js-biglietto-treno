const ppkm = 0.21;
const over18 = 18;
const over65 = 65;



let eta_psg = prompt("Età del Passeggero");
let n_km = prompt("Quanti Chilometri devi percorrere?");

let costokmutente = (n_km * ppkm);

console.log(costokmutente);

if (eta_psg < over18){
    console.log("L'utente è minorenne")
    let prezzofinale = parseFloat((costokmutente * 80) /100).toFixed(2)
    console.log("il costo finale è " + prezzofinale);   
    document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} € (sconto del 20%)`;   
   
} else if (eta_psg >= over65){
    console.log("L'utente è over65")
    let prezzofinale = parseFloat((costokmutente * 60) /100).toFixed(2)
    console.log("il costo finale è " + prezzofinale);
    document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} € (sconto del 40%)`;  
     
} else {
    console.log("l'utente non ha diritto a sconti");
    let prezzofinale = parseFloat(costokmutente).toFixed(2)
    document.getElementById("costofinale").innerHTML = `il prezzo del biglietto è: ${prezzofinale} €`;  
       
}


