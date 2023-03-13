'use strict'

// Задание №1
console.log('Задание №1');
class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get showRadius() {
        return this.radius;
    }

    get showDiameter() {
        return this.radius * 2;
    }

    get showCircleArea() {
        return Math.round(Math.PI * (this.radius ** 2) * 100) / 100;
    }

    get circleLength() {
        return Math.round(Math.PI * this.showDiameter * 100) / 100;
    }

    set setTheRadius(value) {
        if (typeof(value) !== 'number' || value == 0 || Number.isNaN(+value)) console.error('Неверное значение');
        this.radius = value;
    }
}

const userCircle = new Circle(5);

userCircle.setTheRadius = 10;
console.log(`Радиус окружности = ${userCircle.showRadius}`);
console.log(`Диаметр окружности = ${userCircle.showDiameter}`);
console.log(`Площадь круга = ${userCircle.showCircleArea}`);
console.log(`Длина окружности = ${userCircle.circleLength}`);

// Задание №2

class HtmlBlock {
    constructor (tagName = '', pairedPag = true, text = '', tagAttributes = [], tagStyle = [], childTags = []) {
        this.tagName = tagName;
        this.pairedPag = pairedPag;
        this.text = text;
        this.tagAttributes = tagAttributes;
        this.tagStyle = tagStyle;
        this.childTags = childTags;
    }

    set setAttributes (attrubut) {
        this.tagAttributes.push(attrubut);
    }

    set setStyle (style) {
        this.tagStyle.push(style);
    }

    set putBeginningElement (element) {
        this.childTags.unshift(element);
    }

    set putEndElement (element) {
        this.childTags.push(element);
    }

    textHTML () {
        if (this.pairedPag) return `<${this.tagName} style = "${this.tagStyle.join(';')}" ${this.tagAttributes.join('')}>${this.text}${this.childTags.map(item => item.textHTML()).join('')}</${this.tagName}>`
        else return `<${this.tagName} style = "${this.tagStyle.join(';')}" ${this.tagAttributes.join('')}>${this.text}${this.childTags.map(item => item.textHTML()).join('')}`
    }

    textHTMLClass () {
        if (this.pairedPag) return `<${this.tagName} ${this.tagAttributes.join('')}>${this.text}${this.childTags.map(item => item.textHTMLClass()).join('')}</${this.tagName}>`
        else return `<${this.tagName} ${this.tagAttributes.join('')}>${this.text}${this.childTags.map(item => item.textHTMLClass()).join('')}`
    }

    get getHTML () {
        document.write(this.textHTML());
    }
}

const wrapperDiv = new HtmlBlock('div', true, '', [], [], []);

wrapperDiv.setAttributes = 'id = "wrapper"';
wrapperDiv.setStyle = 'display: flex';

const div = new HtmlBlock('div', true, '', [], ['width: 300px', 'margin: 10px'], []);

const img = new HtmlBlock('img', false, '', ['src="img/Minions-Download-PNG-Image.png"', 'alt="Minion"'], ['width: 50%'], []);

let textP = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat est officia aut sunt! Sed tempora porro maxime quaerat expedita tenetur quos! Quidem deleniti, amet ab odio et adipisci quasi, voluptatum soluta minima veniam beatae corporis voluptatem dolorum ad rerum iste, dignissimos est omnis sit! Ullam ad adipisci dolores nemo voluptas?'
const p = new HtmlBlock('p', true, textP, [], ['text-align: justify'], []);
const a = new HtmlBlock('a', true, 'More...', ['href = "https://www.lipsum.com/"', 'target="_blank"'], [], []);

p.putEndElement = a;

const h3 = new HtmlBlock('h3', true, 'Lorem ipsum dolor sit amet consectetur.', [], [], []);

div.putBeginningElement = img;
div.putBeginningElement = h3;
div.putEndElement = p;

wrapperDiv.putBeginningElement = div;
wrapperDiv.putBeginningElement = div;

// wrapperDiv.getHTML;

// Задание №3

class CssClass {
    constructor (className, arrayStyle =[]) {
        this.className = className;
        this.arrayStyle = arrayStyle;
    }

    set addStyle(value) {
        this.arrayStyle.push(value);
    }

    set deleteStyle(value) {
        delete this.arrayStyle[value];
    }

    getCss() {
        return `.${this.className} {\n${this.arrayStyle.join(';\n') + ';'}\n}`
    }
}


// Задание №4

const wrapperDivTask4 = new HtmlBlock('div', true, '', ['class = "wrap"'], [], []);

wrapperDivTask4.setAttributes = 'id = "wrapper"';

const divTask4 = new HtmlBlock('div', true, '', ['class = "block"'], [], []);

const imgTask4 = new HtmlBlock('img', false, '', ['src = "img/Minions-Download-PNG-Image.png"', 'alt="Minion"','class = "img"'], [], []);

let textPTask4 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat est officia aut sunt! Sed tempora porro maxime quaerat expedita tenetur quos! Quidem deleniti, amet ab odio et adipisci quasi, voluptatum soluta minima veniam beatae corporis voluptatem dolorum ad rerum iste, dignissimos est omnis sit! Ullam ad adipisci dolores nemo voluptas?'
const pTask4 = new HtmlBlock('p', true, textPTask4, ['class = "text"'], [], []);
const aTask4 = new HtmlBlock('a', true, 'More...', ['href = "https://www.lipsum.com/"', 'target="_blank"'], [], []);

pTask4.putEndElement = aTask4;

const h3Task4 = new HtmlBlock('h3', true, 'Lorem ipsum dolor sit amet consectetur.', [], [], []);

divTask4.putBeginningElement = imgTask4;
divTask4.putBeginningElement = h3Task4;
divTask4.putEndElement = pTask4;

wrapperDivTask4.putBeginningElement = divTask4;
wrapperDivTask4.putBeginningElement = divTask4;

const wrap = new CssClass ('wrap', ['display: flex']);
const block = new CssClass ('block', ['width: 300px', 'margin: 10px']);
const imgClass = new CssClass ('img', ['width: 50%']);
const text = new CssClass ('text', ['text-align: justify']);

const stylesArray = [wrap, block, imgClass, text];

class HTMLBlock {
    constructor (htmlElement, stylesElement) {
        this.htmlElement = htmlElement;
        this.stylesElement = stylesElement;
    }

    getCode () {
        const css = `<style>${this.stylesElement.map(item => item.getCss()).join('\n')}</style>`
        const html = this.htmlElement.textHTMLClass();
        return css + html;
    }
}

const htmlBlock = new HTMLBlock(wrapperDivTask4, stylesArray);

document.write(htmlBlock.getCode());