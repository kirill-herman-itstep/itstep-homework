


// =============   Задание 1   =============

function show(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

// =============   Задание 2   =============

function facto(a) {
    if (a === 0) {
        return 1;
    }
    return a * facto(a - 1);
}

function fac(a) {
    let sum = 1;
    for (let i = 1; i <= a; i++ ) {
        sum *= i;
    } return sum;
}

// =============   Задание 3   =============

function plus(a, b, c) {
    let as = a.toString();
    let bs = b.toString();
    let cs = c.toString();
    return as + bs + cs;
}

// =============   Задание 4   =============

function rectengle(l, h) {

    return l * h || l * l;
}

// =============   Задание 5   =============

function ideal(a) {
    let sum = 0
    for (let i = 0; i < a; i++) {
        if (a % i === 0) {
            sum += i;
        }
    }
    if (sum === a) {
        return 'Число совершенное';
        
    } else {
        return 'Число несовершенное';
    }
}

// =============   Задание 6   =============

function dia(start, end) {
    for (j = start; j < end; j++ ){
        let g = ideal(j);
        if (g == 1) {
            console.log(j);
        }
    }
}


function ideal(a) {
    let sum = 0
    for (let i = 0; i < a; i++) {
        if (a % i === 0) {
            sum += i;
        }
    }
    if (sum === a) {
        return 1;
        
    } else {
        return 2;
    }
}

// =============   Задание 7   =============

function time(a = '00', b = '00', c = '00') {
    alert(`${a}:${b}:${c}`)
}


// =============   Задание 8   =============

function time(a = 0, b = 0, c = 0) {

    let sum = a * 60 * 60 + b * 60 + c
    return sum;

}

// =============   Задание 9   =============

function time(a) {
    let h = 0;
    let min = 0;
    let c = 0;
    let o = 0;
    let s = 0;
    if (a >= 3600) {
        o = a % 3600;
        h = (a - o) / 3600;
        if (o < 3600 && o > 59 ) {
            s = o % 60;
            min = (o - s) / 60;
        } else {
            s = o;
        }
        alert(`${h}:${min}:${s}`);}
     else if (a < 3600 && a > 59 ) {
        s = a % 60;
        min = (a - s) / 60;
     } else {
        s = a;
    }

    alert(`${h}:${min}:${s}`);
    }

// =============   Задание 10   =============

function time(a = 0, b = 0, c = 0, a1 = 0, b1 = 0, c1 = 0,){

let sum = a * 60 * 60 + b * 60 + c;

let sum1 = a1 * 60 * 60 + b1 * 60 + c1;

let ras = sum - sum1;

time1(ras);

function time1(a) {
    let h = 0;
    let min = 0;
    let c = 0;
    let o = 0;
    let s = 0;
    if (a >= 3600) {
        o = a % 3600;
        h = (a - o) / 3600;
        if (o < 3600 && o > 59 ) {
            s = o % 60;
            min = (o - s) / 60;
        } else {s = o;}


    console.log(`${h}:${min}:${s}`);
    }}
}
