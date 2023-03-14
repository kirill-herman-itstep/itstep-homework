// ===== Task 1 =====

class Circle {
    #radius = 1;

    constructor(radius) {
        if (isFinite(radius) && radius > 0) {
            this.#radius = radius;
        }
    }

    get radius() {
        return this.#radius;
    }

    set radius(radius) {
        if (isFinite(radius) && radius > 0) {
            this.#radius = radius;
        }
    }

    get diameter() {
        return this.#radius * 2;
    }

    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;  
    }

    getLength() {
        return this.diameter * Math.PI;
    }
}

let circle = new Circle(12);
console.log(`Радиус окружности: ${circle.radius}
Диаметр окружности: ${circle.diameter}
Площадь окружности: ${circle.getArea()}
Длина окружности: ${circle.getLength()}`);
circle.radius = 10;
console.log(`Радиус окружности: ${circle.radius}
Диаметр окружности: ${circle.diameter}
Площадь окружности: ${circle.getArea()}
Длина окружности: ${circle.getLength()}`);


// ===== Task 2 =====

class HtmlElement {
    attributes = [];
    styles = [];
    childTags = [];

/**
 * @param {String} name
 * @param {Boolean} isSelfClosing
 * @param {String} text
 */
    constructor(name, isSelfClosing, text) {
        this.name = name ?? '';
        this.isSelfClosing = isSelfClosing ?? true;
        this.text = text ?? '';
    }

    setAttributes(...args) {
        this.attributes.push(...args);
    }

    setStyles(...args) {
        this.styles.push(...args);
    }

    pushChildTag(...childTag) {
        this.childTags.push(...childTag);
    }

    unshiftChildTag(...childTag) {
        this.childTags.unshift(...childTag);
    }

    getHtml() {
        if (!this.isSelfClosing) {
            return `<${this.name} style="${this.styles.join(';')}" ${this.attributes.join(' ')}>`
        } 
        return `<${this.name} style="${this.styles.join(';')}" ${this.attributes.join(' ')}>
        ${this.text}
        ${this.childTags.map(tag => tag.getHtml()).join(' ')}
        </${this.name}>`
    }
}

let textP = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic modi ratione, esse eveniet dolorum ipsum. Enim iure repellat, nemo, cumque commodi est dolorem error vitae quos quisquam perspiciatis cupiditate magnam.'

// let a = new HtmlElement('a', true, 'More...');
// a.setAttributes('href="https://www.lipsum.com/"', 'target="_blank"');

// let p = new HtmlElement('p', true, textP);
// p.setStyles('text-align: justify;');
// p.pushChildTag(a);

// let img = new HtmlElement('img', false);
// img.setStyles('width: 100%');
// img.setAttributes('src="lipsum.jpg"', 'alt="Lorem Ipsum"');

// let h3 = new HtmlElement('h3', true, 'What is Lorem Ipsum?');

// let div = new HtmlElement('div', true);
// div.setStyles('width: 300px', 'margin: 10px');
// div.pushChildTag(h3, img, p);

// let container = new HtmlElement('div', true);
// container.setStyles('display: flex')
// container.setAttributes('id="wrapper"');
// container.pushChildTag(div);
// container.unshiftChildTag(div);

// document.write(container.getHtml());


// ===== Task 3 =====

class CssClass {
    styles = [];

    constructor(name) {
        this.name = name;
    }

    addStyle(...style) {
        this.styles.push(...style);
    }

    deleteStyle(style) {
        if (!this.styles.includes(style)) {
            console.log(`Стиля "${style}" нет в данном классе`);
            return;
        }

        let index = this.styles.indexOf(style);
        this.styles.splice(index, 1);
    }

    getCss() {
        return `.${this.name} {
    ${this.styles.join(';')}\n}`
    }
}


// ===== Task 4 =====

class HtmlBlock {
    constructor(rootElement, ...styles) {
        this.rootElement = rootElement;
        this.styles = styles;
    }

    getCode() {
        return `<style>${this.styles.map(elem => elem.getCss()).join('\n')}
        </style>
        ${this.rootElement.getHtml()}`
    }
}

let wrap = new CssClass('wrap');
wrap.addStyle('display: flex');

let block = new CssClass('block');
block.addStyle('width: 300px', 'margin: 10px');

let imgStyle = new CssClass('img');
imgStyle.addStyle('width: 100%');

let text = new CssClass('text');
text.addStyle('text-align: justify');


let a = new HtmlElement('a', true, 'More...');
a.setAttributes('href="https://www.lipsum.com/"', 'target="_blank"');

let p = new HtmlElement('p', true, textP);
p.setAttributes('class="text"');
p.pushChildTag(a);

let img = new HtmlElement('img', false);
img.setAttributes('class="img"','src="lipsum.jpg"', 'alt="Lorem Ipsum"');

let h3 = new HtmlElement('h3', true, 'What is Lorem Ipsum?');

let div = new HtmlElement('div', true);
div.setAttributes('class="block"');
div.pushChildTag(h3, img, p);

let container = new HtmlElement('div', true);
container.setAttributes('id="wrapper"', 'class="wrap"');
container.pushChildTag(div);
container.unshiftChildTag(div);


let blokHtml = new HtmlBlock(container, wrap, block, imgStyle, text);

document.write(blokHtml.getCode());