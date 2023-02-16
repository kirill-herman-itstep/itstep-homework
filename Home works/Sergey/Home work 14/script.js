// ******************Задание №1**********************
console.log('Задание №1');

const car = {
    carManufacturer: 'Renault Group',
    carModel: 'Renault Logan 2',
    yearOfManufacture: 2020,
    averageCarSpeedСity: 40,
    averageCarSpeedOutsideСity: 80,

    info() {
        console.log(`Автомобиль модели ${this.carModel} был произведен компанией ${this.carManufacturer} в ${this.yearOfManufacture} году. Данный автомобиль имеет среднюю скорость в городе - ${this.averageCarSpeedСity} км/ч, за городом - ${this.averageCarSpeedOutsideСity} км/ч`);
    },

    travelTimeCity(a) {
        let time = a / this.averageCarSpeedСity;
        if (time > 4 && time % 4 !== 0) {
            let leisureTime = Math.floor(time / 4)
            time += leisureTime
        } else if(time > 4 && time % 4 == 0) {
            let leisureTime = Math.floor(time / 4)
            time += leisureTime - 1
        }
        return console.log(`На преодоление расстояния в ${a} км в городском режиме со средней скоростью ${this.averageCarSpeedСity} км/ч на данном автомобиле потребуется ${time}ч.`);
    },

    travelTimeOutsideCity(a) {
        let time = a / this.averageCarSpeedOutsideСity;
        if (time > 4 && time % 4 !== 0) {
            let leisureTime = Math.floor(time / 4)
            time += leisureTime
        } else if(time > 4 && time % 4 == 0) {
            let leisureTime = Math.floor(time / 4)
            time += leisureTime - 1
        }
        return console.log(`На преодоление расстояния в ${a} км в загородном режиме со средней скоростью ${this.averageCarSpeedOutsideСity} км/ч на данном автомобиле потребуется ${time}ч.`);
    },
}

car.info()
car.travelTimeCity(160)
car.travelTimeOutsideCity(400)

// ******************Задание №2**********************
console.log('\nЗадание №2');

const fraction = {
    fractionOne: {
        numerator: 6,
        denominator: 4,
    },
    fractionTwo: {
        numerator: 1,
        denominator: 3,
    },

    fractionAddition () {
        let result, a, b;
        b = this.fractionOne['denominator'] * this.fractionTwo['denominator']
        a = this.fractionOne['numerator'] * this.fractionTwo['denominator'] + this.fractionTwo['numerator'] * this.fractionOne['denominator']
        result = `${a}/${b}`
        console.log(`${this.fractionOne['numerator']}/${this.fractionOne['denominator']} + ${this.fractionTwo['numerator']}/${this.fractionTwo['denominator']} = ${result}`);
    },

    fractionSubtraction () {
        let result, a, b;
        b = this.fractionOne['denominator'] * this.fractionTwo['denominator']
        a = this.fractionOne['numerator'] * this.fractionTwo['denominator'] - this.fractionTwo['numerator'] * this.fractionOne['denominator']
        result = `${a}/${b}`
        console.log(`${this.fractionOne['numerator']}/${this.fractionOne['denominator']} - ${this.fractionTwo['numerator']}/${this.fractionTwo['denominator']} = ${result}`);
    },

    fractionMultiplication () {
        let result, a, b;
        b = this.fractionOne['denominator'] * this.fractionTwo['denominator']
        a = this.fractionOne['numerator']  * this.fractionTwo['numerator']
        result = `${a}/${b}`
        console.log(`${this.fractionOne['numerator']}/${this.fractionOne['denominator']} x ${this.fractionTwo['numerator']}/${this.fractionTwo['denominator']} = ${result}`);
    },

    fractionDivision () {
        let result, a, b;
        a = this.fractionOne['numerator']  * this.fractionTwo['denominator']
        b = this.fractionOne['denominator'] * this.fractionTwo['numerator']
        result = `${a}/${b}`
        console.log(`${this.fractionOne['numerator']}/${this.fractionOne['denominator']} : ${this.fractionTwo['numerator']}/${this.fractionTwo['denominator']} = ${result}`);
    },

    fractionReduction () {
        let a = this.fractionOne['numerator'];
        let b = this.fractionOne['denominator'];

        if (this.fractionOne['numerator'] < this.fractionOne['denominator']) {
            for (let i = this.fractionOne['numerator']; i > 1; i--) {
                if (a % i == 0 && b % i == 0){
                    a /= i;
                    b /= i
                }
            }
        } else {
            for (let i = this.fractionOne['denominator']; i > 1; i--) {
                if (b % i == 0 && a % i == 0){
                    a /= i;
                    b /= i;
                }
            }
        }
        if (b == 1) return console.log(`Дробь ${this.fractionOne['numerator']}/${this.fractionOne['denominator']} в сокращенном виде имеет вид - ${a}`);
        else return console.log(`Дробь ${this.fractionOne['numerator']}/${this.fractionOne['denominator']} в сокращенном виде имеет вид - ${a}/${b}`);
    }
}

fraction.fractionAddition()
fraction.fractionSubtraction()
fraction.fractionMultiplication()
fraction.fractionDivision()
fraction.fractionReduction()

// ******************Задание №3**********************
console.log(`\nЗадание №3`);

const time = {
    hour: 9,
    minute: 15,
    secunde: 35,

    info() {
        let newHour, newMinute, newSecunde;
        if(Math.floor(this.hour / 10) == 0) newHour = '0' + this.hour;
        else newHour = this.hour;
        if(Math.floor(this.minute / 10) == 0) newMinute = '0' + this.minute;
        else newMinute = this.minute;
        if(Math.floor(this.secunde / 10) == 0) newSecunde = '0' + this.secunde;
        else newSecunde = this.secunde;
        console.log(`Введенное время - ${newHour}:${newMinute}:${newSecunde}`);
    },

    changedTimeHour(a) {
        let newHour, newMinute, newSecunde, n;
        if (a + this.hour >= 24) {
            n = Math.floor((a + this.hour)/24);
            newHour = a + this.hour - n * 24
            newMinute = this.minute;
            newSecunde = this.secunde;
        } else {
            newHour = a + this.hour
            newMinute = this.minute;
            newSecunde = this.secunde;
        }
        if (Math.floor(newHour / 10) == 0) newHour = '0' + newHour;
        if (Math.floor(newMinute / 10) == 0) newMinute = '0' + newMinute;
        if (Math.floor(newSecunde / 10) == 0) newSecunde = '0' + newSecunde;
        return console.log(`При изменении времени на ${a} ч. установится время - ${newHour}:${newMinute}:${newSecunde}`);
    },

    changedTimeMinute(a) {
        let newHour, newMinute, newSecunde, n;
        if (a + this.minute >= 60) {
            n = Math.floor((a + this.minute)/60);
            newHour = this.hour +  n
            newMinute = a + this.minute - n * 60
            newSecunde = this.secunde;
        } else {
            newHour = this.hour
            newMinute = a + this.minute
            newSecunde = this.secunde;
        }
        if (Math.floor(newHour / 10) == 0) newHour = '0' + newHour;
        if (Math.floor(newMinute / 10) == 0) newMinute = '0' + newMinute;
        if (Math.floor(newSecunde / 10) == 0) newSecunde = '0' + newSecunde;
        return console.log(`При изменении времени на ${a} мин. установится время - ${newHour}:${newMinute}:${newSecunde}`);
    },

    changedTimeSecunde(a) {
        let newHour, newMinute, newSecunde, n;
        if (a + this.secunde >= 60) {
            n = Math.floor((a + this.secunde)/60);
            newHour = this.hour;
            newMinute = this.minute +  n;
            newSecunde = a + this.secunde - n * 60;
        } else {
            newHour = this.hour;
            newMinute = this.minute
            newSecunde = a + this.secunde
        }
        if (Math.floor(newHour / 10) == 0) newHour = '0' + newHour;
        if (Math.floor(newMinute / 10) == 0) newMinute = '0' + newMinute;
        if (Math.floor(newSecunde / 10) == 0) newSecunde = '0' + newSecunde;
        return console.log(`При изменении времени на ${a} сек. установится время - ${newHour}:${newMinute}:${newSecunde}`);
    }
}

time.info()
time.changedTimeHour(5)
time.changedTimeMinute(50)
time.changedTimeSecunde(40)