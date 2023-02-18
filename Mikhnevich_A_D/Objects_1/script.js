// Task 1
 
let greatCar = {manufacturer: 'Elona Musk', 
    model: 'Pussy Wagon', 
    year: '2077', 
    speed: '228', 
    data() {
        console.log(`${this.manufacturer}, ${this.model}, ${this.year}, ${this.speed}`);
    }, 
    time(data) {
        return !Number.isFinite(data) || data < 0 ? 'Invalid data' : data === 0 ? 0 :
        data % (this.speed * 4) === 0 ? data / this.speed + Math.floor(data / this.speed / 4) - 1 : 
        data / this.speed + Math.floor(data / this.speed / 4);
    }
}
 

// Task 2
 
let niceFraction = {numerator: undefined, denominator: undefined};
let viseFraction = {numerator: undefined, denominator: undefined};
 
function sum(data, value) {
    return {numerator: data.numerator*value.denominator + value.numerator*data.denominator, 
        denominator: value.denominator*data.denominator};
}
 
function sub(data, value) {
    return {numerator: data.numerator*value.denominator - value.numerator*data.denominator, 
        denominator: value.denominator*data.denominator};
}
 
function multi(data, value) {
    return {numerator: data.numerator*value.numerator, 
        denominator: value.denominator*data.denominator};
}
 
function div(data, value) {
    return {numerator: data.numerator*value.denominator, 
        denominator: value.numerator*data.denominator};
}
 
function simple(data) {
    if(!Number.isInteger(data.numerator) || !Number.isInteger(data.denominator)  || 
    data.denominator === 0) return 'Invalid data';
    if (data.numerator === 0) return data;
    let value = Math.max(Math.abs(data.numerator), Math.abs(data.denominator));
    let num = Math.min(Math.abs(data.numerator), Math.abs(data.denominator));
    if (value % num === 0) {
        data.numerator /= num;
        data.denominator /= num;
        return data;
    }
    let gcd = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            if (value % (num / i) === 0) {
                data.numerator /= num / i;
                data.denominator /= num / i;
                return data;
            }
            gcd = i;
        }
    }
    data.numerator /= gcd;
    data.denominator /= gcd;
    return data;
}
 

// Task 3
 
let time = {h: 0, m: 0, s: 0,
    printMe() {
        console.log(this.h + (this.m < 10 ? `:0${this.m}` : `:${this.m}`) + 
        (this.s < 10 ? `:0${this.s}` : `:${this.s}`));
    },
    hr(data) {
        if (!Number.isFinite(data)) return 'Invalid data';
        this.h = (this.h + Math.trunc(data));
        this.valid();
        this.printMe();
    },
    min(data){
        if (!Number.isFinite(data)) return 'Invalid data';
        this.m = (this.m + Math.trunc(data));
        this.valid();
        this.printMe();
    },
    sec(data) {
        if (!Number.isFinite(data)) return 'Invalid data';
        this.s = (this.s + Math.trunc(data));
        this.valid();
        this.printMe();
    },
    valid() {
        if(!Number.isFinite(this.h) || !Number.isFinite(this.m) || 
        !Number.isFinite(this.s)) return 'Am invalid T_T';
        this.m = Math.trunc(this.m) + Math.floor(this.s / 60);
        this.s = (60 + Math.trunc(this.s) % 60) % 60;
        this.h = (24 + (Math.trunc(this.h) + Math.floor(this.m / 60)) % 24) % 24;
        this.m = (60 + this.m % 60) % 60;
    }
}