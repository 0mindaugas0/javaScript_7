let skaicius;
skaicius = + prompt("Įveskite skaičių");

let intervaloPradzia;
intervaloPradzia = + prompt("Įveskite intervalo pradžią");

let intervaloPabaiga;
intervaloPabaiga = + prompt("Įveskite intervalo pabaigą");

let atsakymas = arYraIntervale(skaicius, intervaloPradzia, intervaloPabaiga);
console.log(atsakymas);

function arYraIntervale (sk, intPr, intPb){
    if ((sk >= intPr) && sk <= intPb){
    return true;
    }
    else{
    false;
    }
}