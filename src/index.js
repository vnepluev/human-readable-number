module.exports = function toReadable(number) {
    let result = '';
    
    // 0-10
    if (number < 11) {
        return p10(number);
    }

    // 11-19
    if ( (number > 10) && (number < 21)) {
        return p20(number);
    }

    // 21-99
    if ( (number > 20) && (number < 100)) {
        return p30(number);
    }

    // 100-999
    if ( (number > 99) && (number < 1000)) {
        return p40(number);
    }


    return result;
}

// *0 - 10
function p10(n) {
    switch (n) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3:
            return 'three';
        case 4:
            return 'four';
        case 5:
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine';
        case 10:
            return 'ten';
    }
}
// *11-20
function p20(n) {
    switch (n) {
        case 11:
            return 'eleven';
        case 12:
            return 'twelve';
        case 13:
            return 'thirteen';
        case 14:
            return 'fourteen';
        case 15:
            return 'fifteen';
        case 16:
            return 'sixteen';
        case 17:
            return 'seventeen';
        case 18:
            return 'eighteen';
        case 19:
            return 'nineteen';
        case 20:
            return 'twenty';
        case 30:
            return 'thirty';
        case 40:
            return 'forty';
        case 50:
            return 'fifty';
        case 60:
            return 'sixty';
        case 70:
            return 'seventy';
        case 80:
            return 'eighty';
        case 90:
            return 'ninety';
    }
}

// *десятки
function p20_1(n) {
    switch (n) {
        case 2:
            return 'twenty';
        case 3:
            return 'thirty';
        case 4:
            return 'forty';
        case 5:
            return 'fifty';
        case 6:
            return 'sixty';
        case 7:
            return 'seventy';
        case 8:
            return 'eighty';
        case 9:
            return 'ninety';
    }
}

// *21-99
function p30(n) {
    let result = '';
    // получаем целую часть
    let n1 = Math.trunc(n / 10);
    // проверка на 0 вконце строки,
    // если 0 то '', если не ноль то число после запятой
    let n2 = '' + n;
    n2 = n2.charAt(1);
    if (n2 == '0') {
        n2 = '';
    } else {
        n2 = Number(String(n / 10).split('.')[1]);  // дробная часть
    }

    // если не ноль на конце, н-р: 31 - вызываем p10
    if (n2 == 0) {
        n2 = p20(n1 * 10);
        return n2;
    } else {
        n1 = p20_1(n1);
        n2 = p10(n2);
    }

    result = n1 + ' ' + n2;
    return result;
}

// *100-999
function p40(n) {
    // получаем целую часть
    let n1 = Math.trunc(n / 100);

    // если 00 на конце
    switch (n/100) {
        case 1:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 2:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 3:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 4:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 5:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 6:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 7:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 8:
            n1 = p10(n / 100) + ' hundred';
            break;
        case 9:
            n1 = p10(n / 100) + ' hundred';
    }
    // проверка на 00 вконце строки,
    // если 00 то число х00, возвращаем х00
    let n2 = '' + n;
    n2 = n2.charAt(1) + n2.charAt(2);
    if (n2 == '00') {
        return n1;
    }

    n3 = Number(String(n / 100).split('.')[1]);  // дробная часть
    
    n2 = +n2;
    if (n2 < 11) {
        n3 = p10(n2);
    } else if ( (n2 > 10) && (n2 < 21)) {
        n3 = p20(n2);
    } else {
        n3 = p30(n2);
    }

    // if ( (n2 > 20) && (n2 < 100)) {
    //     return p30(number);
    // }


    //
    n1 = p10(n1) + ' hundred';

    return n1 + ' ' + n3;
}


// (0-10) zero, one, two, three, four, five, six, seven, eight, nine, ten
// (11-19) eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen