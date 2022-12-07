function cyfry(data) {
    let suma_cyfr = 0;
    for (let i = 0; i < data.length; i++) {
        if(!isNaN(parseInt(data[i]))) {
            suma_cyfr += parseInt(data[i]);
        }
    }
    return suma_cyfr;
}

function litery(data) {
    let suma_liter = 0;
    for (let i = 0; i < data.length; i++) {
        if(isNaN(parseInt(data[i]))) {
            suma_liter++;
        }
    }
    return suma_liter;
}

let licz = 0;

function suma(data) {
    if (!isNaN(parseInt(data)))
        licz += parseInt(data);
    return licz
}