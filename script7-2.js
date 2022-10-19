let skaicius;
skaicius = + prompt("Įveskite skaičių");

let atsakymas = skaiciausRadimas(skaicius);


function skaiciausRadimas(x){
    if ((x < 0 ) && (x % 10 == 0)){         // reikėjo neigiamo
        alert("Įvestas skaičius dalinasi iš 10 ir yra teigimas");
    }
    else{
        alert("Įvestas skaičius nėra teigiamas ir nesidailina iš 10");
    }
}
