// Task 1

class Round {
    #radius = 0;
    constructor() {

    }

    get radius() {
        return this.#radius;
    }

    set radius(value) {
        if (!Number.isFinite(+value)) {
            console.log('KYS');
            return;
        }
        this.#radius = +value; 
    }

    get diameter() {
        return this.#radius * 2;
    }

    area() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    length() {
        return this.#radius * 2 * Math.PI;
    }
}

// Для проверки кода запустите нижуеказанное по одному в консоли

// round = new Round;
// round.radius = 'jopa';
// round;
// round.radius = '3';
// round.diameter;
// round.area();
// round.length();


// Task 2

class HtmlElement {
    attributes = [];
    styles = [];
    innerElements = [];

    constructor(tagName, isSingle, text) {
        this.tagName = tagName;
        this.isSingle = isSingle;
        this.text = text;
    }

    newStyle() {
        this.styles.push(...arguments);
    }

    newAttribute() {
        this.attributes.push(...arguments);
    }

    push() {
        this.innerElements.push(...arguments);
    }

    unshift(...args) {
        this.innerElements.unshift(...arguments);
    }

    getHtml() {
        let guts = [];
        let attributes = this.attributes[0] ? ' ' + this.attributes.join(' ') : '';
        let styles = this.styles.join('; ');
        if (this.isSingle) {
            guts.push(`<${this.tagName}${styles ? ` style="${styles}"` : ''}${attributes}>`)
        }
        else {
            guts[0] = `<${this.tagName}${styles ? ` style="${styles}"` : ''}${attributes}>`;
            guts[1] = `${this.text ?? ''}`;
            guts[2] = '';
            guts[3] = `</${this.tagName}>`;
        }
        this.innerElements.forEach(function(item) {
            guts[2] += item.getHtml();
        });
        guts = guts.join('');
        return guts;
    }
}

let block = new HtmlElement(`div`, false)
block.newAttribute('id="wrapper"');
block.newStyle('display: flex');

let div1 = new HtmlElement('div', false);
div1.newStyle('width: 300px', `margin: 10px`);

let div1Header = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
let div1Content = new HtmlElement('img', true);
div1Content.newStyle(`width: 100%`);
div1Content.newAttribute(`src="lipusm.jpg"`, `alt="Lorem Ipsum"`);
div1Text = new HtmlElement('p', false, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
div1Text.newStyle('text-align: justify')
div1TextLink = new HtmlElement('a', false, 'More...');
div1TextLink.newAttribute('href="https://www.lipsum.com"', 'target="_blank"')

let div2 = new HtmlElement('div', false);
div2.newStyle('width: 300px', `margin: 10px`);

let div2Header = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
let div2Content = new HtmlElement('img', true);
div2Content.newStyle(`width: 100%`);
div2Content.newAttribute(`src="lipusm.jpg"`, `alt="Lorem Ipsum"`, `src="lipusm.jpg"`);
div2Text = new HtmlElement('p', false, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
div2Text.newStyle('text-align: justify')
div2TextLink = new HtmlElement('a', false, 'More...');
div2TextLink.newAttribute('href="https://www.lipsum.com"', 'target="_blank"')


block.push(div1, div2);
div1.push(div1Header, div1Content, div1Text);
div1Text.push(div1TextLink);

div2.push(div2Header, div2Content, div2Text);
div2Text.push(div2TextLink);

// Для проверки работы кода
// document.write(block.getHtml()); 


// Task 3

class CssClass {
    styles = [];

    constructor(name) {
        this.name = name;
    }

    newStyle() {
        this.styles.push(...arguments)
    }

    deleteStyle(...args) {
        return args.forEach(name => {
            let i = this.styles.indexOf(name);
            if (~i) this.styles.splice(i, 1);
            else console.log(`There's no style ${name} inside me.`)
        })
    }

    getCss() {
        return `.${this.name} {
            ${this.styles.join(`;
            `)}
        }`
    }
}

// Для проверки кода запустите в консоли нижеуказанное

// a = new CssClass('test')
// a.newStyle('background-color: grey', 'color: red')
// document.write(`
// <head>
//     <style>
//         ${a.getCss()}
//     </style>
// </head>               
// `)
// document.write(`<div class="test">Does it work?</div>`)



// Task 4

class HtmlBlock {
    constructor(...args) {
        this.element = args[0];
        this.styles = args.slice(1, args.length);
    }

    getCode() {
        return `<style>
        ${this.styles.map(e => e.getCss()).join(`
        `)}
        </style>
        ${this.element.getHtml()}`
    }
}

a = new CssClass('wrap');
a.newStyle('display:flex');
b = new CssClass('block');
b.newStyle('width: 300px', 'margin: 10px');
c = new CssClass('img');
c.newStyle('width: 100%');
d = new CssClass('text');
d.newStyle('text-align: justify');



let wrapper = new HtmlElement(`div`, false)
wrapper.newAttribute('id="wrapper"', 'class="wrap"');

let Block1 = new HtmlElement('div', false);
Block1.newAttribute('class="block"');

let Block1Header = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
let Block1Content = new HtmlElement('img', true);
Block1Content.newAttribute('class="img"', `src="lipusm.jpg"`, `alt="Lorem Ipsum"`);
let Block1Text = new HtmlElement('p', false, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
Block1Content.newAttribute('class="text"');
let Block1TextLink = new HtmlElement('a', false, 'More...');
Block1TextLink.newAttribute('href="https://www.lipsum.com"', 'target="_blank"')

let Block2 = new HtmlElement('div', false);
Block2.newAttribute('class="block"');

let Block2Header = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
let Block2Content = new HtmlElement('img', true);
Block2Content.newAttribute('class="img"', `src="lipusm.jpg"`, `alt="Lorem Ipsum"`);
let Block2Text = new HtmlElement('p', false, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
Block2Content.newAttribute('class="text"');
let Block2TextLink = new HtmlElement('a', false, 'More...');
Block2TextLink.newAttribute('href="https://www.lipsum.com"', 'target="_blank"')


wrapper.push(Block1, Block2);
Block1.push(Block1Header, Block1Content, Block1Text);
Block1Text.push(Block1TextLink);

Block2.push(Block2Header, Block2Content, Block2Text);
Block2Text.push(Block2TextLink);



result = new HtmlBlock(wrapper, a, b, c, d);


// Для проверки работы кода запустите в консоли
// document.write(result.getCode())