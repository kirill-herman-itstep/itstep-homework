// Task 1

class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    showBtn() {
        document.write(`<button style="width: ${this.width}; height: ${this.height}">${this.text}</button>`);
    }
}

class BootstrapButton extends Button{
    constructor(width, height, text, color = '') {
        super(width, height, text)
        this.color = color;
    }

    showBtn() {
        this.color = this.color ? `; background-color: ${this.color}` : '';
        document.write(`<button style="width: ${this.width}; height: ${this.height}${this.color}">${this.text}</button>`);
    }
}



// Task 2

class Figure {
    sides = [];

    constructor() {
        if (arguments[arguments.length - 1] === undefined) {
            arguments.length--;
        } else {
            if (arguments.length === 3) {
                return new Triangle(...arguments);
            } else if (arguments.length === 4) {
                return new Square(...arguments);
            }
        }
        for (let a of arguments) {
            if (typeof(a) !== 'object' || Array.isArray(a)) return {errorMessage: 'Error'};
        }
        this.name = 'undefined';
        this.sides.push(...arguments);
    }

    get type() {
        return this.constructor.name;
    }

    info(a = this) {
        a.sides.forEach(e => console.log(`${keys(e)[0] ?? ''}: ${+values(e)}`));
    }

    area(a = this) {
        switch (a.constructor.name) {
            case 'Square':
                return Math.pow(values(a.sides[0])[0], 2);
            case 'Rectangle': 
                return values(a.sides[0])[0] * values(a.sides[1])[0];
            case 'Triangle': 
                let p = a.perimeter() / 2;
                return Math.sqrt(p * (p - values(a.sides[0])[0]) * (p - values(a.sides[1])[0]) * (p - values(a.sides[2])[0]));
            default:
                return 'Unable to calculate this';
        }
    }

    perimeter(a = this) {
        return a.sides.reduce((perimeter, e) => {return perimeter + values(e)[0]}, 0)
    }
}

class Square extends Figure {
    sides = [];

    constructor() {
        delete (super()).name;        
        if (arguments.length !== 4) return new Figure(...arguments);
        else if (arguments[arguments.length -1] === undefined) return new Figure(...arguments);
        else if (arguments[0] && arguments[1] && arguments[2] && arguments[3]) {
            let a = +values(arguments[0]);
            let b = +values(arguments[1]);
            let c = +values(arguments[2]);
            let d = +values(arguments[3]);
            if (a === c && b === d) {
                if (a !== b) return new Rectangle(...arguments);
            }
        }
        else return {errorMessage: 'Error'};
        this.sides.push(...arguments);
    }

    get type() {
        return this.constructor.name;
    }

    info() {
        return this.__proto__.__proto__.info(this);
    }

    area() {
        return this.__proto__.__proto__.area(this);
    }

    perimeter() {
        return this.__proto__.__proto__.perimeter(this);
    }
}

class Rectangle extends Figure {
    sides = [];

    constructor() {
        delete (super()).name;
        if (arguments.length !== 4) return new Figure(...arguments);
        else if (arguments[arguments.length -1] === undefined) return new Figure(...arguments);
        else if (arguments[0] && arguments[1] && arguments[2] && arguments[3]) {
            let a = +values(arguments[0]);
            let b = +values(arguments[1]);
            let c = +values(arguments[2]);
            let d = +values(arguments[3]);
            if (a !== c || b !== d) return new Figure(...arguments, undefined); 
        }
        else return {errorMessage: 'Error'};
        this.sides.push(...arguments);
    }

    get type() {
        return this.constructor.name;
    }

    info() {
        return this.__proto__.__proto__.info(this);
    }

    area() {
        console.log(this)
        return this.__proto__.__proto__.area(this);
    }

    perimeter() {
        return this.__proto__.__proto__.perimeter(this);
    }
}

class Triangle extends Figure {
    sides = [];

    constructor() {
        delete (super()).name;
        if (arguments.length !== 3) return new Figure(...arguments);
        else if (arguments[0] && arguments[1] && arguments[2]) {
            let a = +values(arguments[0]);
            let b = +values(arguments[1]);
            let c = +values(arguments[2]);
            if (a + b <= c || a + c <= b || b + c <= a) return new Figure(...arguments, undefined);
        }
        else return {errorMessage: 'Error'};
        this.sides.push(...arguments);
    }

    get type() {
        return this.constructor.name;
    }

    info() {
        return this.__proto__.__proto__.info(this);
    }

    area() {
        console.log(this)
        return this.__proto__.__proto__.area(this);
    }

    perimeter() {
        return this.__proto__.__proto__.perimeter(this);
    }
}


// Некоторые из вариантов проверок кода, что я использовал

// let a = new Triangle({AB: 4}, {BC: 4}, {CD: 7})
// let b = new Figure({AB: 4}, {BC: 4}, {CD: 7})
// let c = new Figure({AB: 4}, {BC: 4}, {CD: 7}, undefined)
// let d = new Triangle({AB: 4}, {BC: 4}, {CD: 7}, undefined)
// let e = new Triangle({AB: 4}, {BC: 4}, {CD: 8})
// let f = new Figure({AB: 4}, {BC: 4}, {CD: 8})
// let g = new Figure({AB: 4}, {BC: 4}, {CD: 4}, {DA: 4})




// Task 3

class ExtendedArray extends Array {
    constructor() {
        super(...arguments);
    }

    getString(separator) {
        return this.join(separator)
    }

    getHtml(tagName) {
        if (tagName === 'li') return '<ul>' + this.map(e => `<${tagName}>${e}</${tagName}>`).join('') + '</ul>';
        return this.map(e => `<${tagName}>${e}</${tagName}>`).join('');
    }
}

let err = new ExtendedArray('Сунул грека рака в сраку,', 'Смотрит грека сракой в реку', 
'Смотрит рак из сраки грека', 'Смотрит рак из сраки в реку', 
'Рак из сраки грека — цап!', `Цап-цап, цап-царап!`)
document.write(`<a href="https://youtu.be/iNLesdBO3U8" target="_blank">Влажные ватрушки - Грека</a><br><br>`)
console.log(err.getString(' '));
document.write(err.getHtml('div'));
document.write(err.getHtml('li'));