// === TASK 1 ===
class Circle {
    constructor (rad) {
        this.rad = rad
    }

    get circleRad() {
        return this.rad;
    }

    set circleRad(value) {
        this.rad = value;
    }

    get circleDiameter() {
        return this.rad ** 2;
    }

    circleArea() {
        const PI = 3.14;
        return PI * (this.rad ** 2)
    }

    circleLength() {
        const PI = 3.14;
        return 2 * PI * this.rad
    }
}

const cup = new Circle(12);

// === TASK 2 ===
class HTMLElement {
    constructor (tagName, isSelfClosing, text, attrArray = [], styleArray = [], nestedTagsArray = []) {
        this.tagName = tagName;
        this.isSelfClosing = isSelfClosing;
        this.text = text;
        this.attrArray = attrArray;
        this.styleArray = styleArray;
        this.nestedTagsArray = nestedTagsArray;
    }

    setAttr(value) {
        this.attrArray.push(value)
    }

    setStyle(value) {
        this.styleArray.push(value)
    }

    addInEnd(value) {
        this.nestedTagsArray.push(value)
    }

    addInBegin(value) {
        this.nestedTagsArray.unshift(value)
    }

    getHtml() {
        return this.toString()
    }

    toString() {
        if (this.isSelfClosing === true) {
            return `<${this.tagName} style="${this.styleArray.join(';')}" ${this.attrArray.join('; ')}>${this.text}${this.nestedTagsArray.map((element) => element.toString()).join('')}</${this.tagName}>`
        } else {
            return `<${this.tagName} style="${this.styleArray.join(';')}" ${this.attrArray.join('; ')}>${this.text}${this.nestedTagsArray.map((element) => element.toString())}`
        }
    }
}

const a = new HTMLElement('a', true, 'More...', ['href="https://www.lipsum.com"', 'target="_blank"'])
const p = new HTMLElement('p', true, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at augue fermentum, laoreet quam ac, tincidunt diam. Praesent imperdiet ac velit non posuere. Quisque lobortis, nulla convallis tristique lacinia, ligula mi suscipit ligula, ac egestas sapien est in arcu. Fusce sit amet ex vel tellus varius rutrum. Proin et eleifend elit.', [], ['text-align: justify'], [a])
const img = new HTMLElement('img', false, '', ['src="lipsum.jpg"', 'alt="Lorem Ipsum"'], ['width: 100%'])
const h3 = new HTMLElement('h3', true, 'What is Lorem Ipsum?')
const divInner = new HTMLElement('div', true, '', [], ['width: 300px', 'margin: 10px'], [h3, img, p])
const divWrapper = new HTMLElement('div', true, '', ['id="wrapper"'], ['display: flex'], [divInner, divInner])

// === TASK 3 ===
class CssClass {
    constructor(name, styleArray) {
        this.name = name;
        this.styleArray = styleArray;
    }

    addStyle(value) {
        this.styleArray.push(value)
    }

    removeStyle(value) {
        const valueIndex = this.styleArray.indexOf(this.styleArray.find((element) => element === value))
        const begin = this.styleArray.slice(0, valueIndex);
        const end = this.styleArray.slice(valueIndex + 1);
        return this.styleArray = begin.concat(end);
    }

    getCss() {
        return `.${this.name} {${this.styleArray.join('; ')}}\n`
    }
}

const wrapStyle = new CssClass('wrap', ['display: flex']);
const blockStyle = new CssClass('block', ['width: 300px', 'margin: 10px']);
const imgStyle = new CssClass('img', ['width: 100%']);
const textStyle = new CssClass('text', ['text-align: justify']);
const bestFormat = [wrapStyle, blockStyle, imgStyle, textStyle];

// === TASK 4 ===
class HTMLBlock {
    constructor (styleCollection, html) {
        this.styleCollection = styleCollection;
        this.html = html;
    }

    getCode() {
        img.setAttr('class="img"');
        divWrapper.setAttr('class="wrap"');
        divInner.setAttr('class="block"');
        p.setAttr('class="text"');
        return `<style>${(this.styleCollection.map((value) => value.getCss()).join(''))}</style> ${this.html.getHtml()}`
    }
}

const pageWithStyle = new HTMLBlock(bestFormat, divWrapper)