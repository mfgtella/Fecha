console.log("Tarea de fecha");

function century(number1) {
    let a = "";

    if (number1 >= 1700 && number1 <= 1799) a = +5;
    else if (number1 >= 1800 && number1 <= 1899) a = +3;
    else if (number1 >= 1900 && number1 <= 1999) a = +1;
    else if (number1 >= 2000 && number1 <= 2099) a = +0;
    else if (number1 >= 2100 && number1 <= 2199) a = -2;
    else if (number1 >= 2200 && number1 <= 2299) a = -4;

    return a;

};

console.log(century(1995));


function year(number1) {
    let x = (number1 % 100);
    b = Math.floor(x * 1.25);


    return b;

};

console.log(year(1995));

function bi(number1) {
    let c = "";

    if ((number1 % 4 === 0 && number1 % 100 !== 0) || (number1 % 400 === 0))
        c = 1;
    else
        c = 0;

    return c;

};

console.log(bi(1995));

function month(number2) {
    let d = "";
    switch (number2) {
        case 5:
            d = 0;
            break;
        case 8:
            d = 1;
            break;
        case 2:
        case 3:
        case 11:
            d = 2;
            break;
        case 6:
            d = 3;
            break;
        case 9:
        case 12:
            d = 4;
            break;
        case 4:
        case 7:
            d = 5;
            break;
        case 1:
        case 10:
            d = 6;
            break;

        default:

            break;
    };
    return d
};

console.log(month(3));

function day(number3) {
    e = number3;
    return e;
};

console.log(day(24));

function weekDay(f1, f2, f3, f4, f5) {

    let ans = f1 + f2 + f3 + f4 + f5;

    for (; ans >= 7; ans -= 7) {
        if (ans >= 0 && ans <= 6) {
            break;
        }
    }

    return ans;

};

console.log(weekDay(century(1995), year(1995), bi(1995), month(3), day(24)));

function laborDay(f6) {
    let result = "";
    switch (f6) {
        case 1:
            result = "Lunes, día laborable";
            break;
        case 2:
            result = "Martes, día laborable";
            break;
        case 3:
            result = "Miércoles, día laborable";
            break;
        case 4:
            result = "Jueves, día laborable";
            break;
        case 5:
            result = "Viernes, día laborable";
            break;
        case 0:
            result = "Sábado, fin de semana";
            break;
        case 6:
            result = "Domingo, fin de semana";
            break;

        default:
            break;
    }
    return result;
};
console.log(laborDay(weekDay(century(1995), year(1995), bi(1995), month(3), day(24))));

function test() {
    const number1 = parseInt(document.getElementById("input-year").value);
    const number2 = parseInt(document.getElementById("input-month").value);
    const number3 = parseInt(document.getElementById("input-day").value);

    const centuryResult = century(number1);

    const yearResult = year(number1);

    const biResult = bi(number1);

    const monthResult = month(number2);

    const dayResult = day(number3);

    const weekDayResult = weekDay(centuryResult, yearResult, biResult, monthResult, dayResult);

    const laborDayResult = laborDay(weekDayResult);

    document.getElementById("test").innerHTML = laborDayResult;
};