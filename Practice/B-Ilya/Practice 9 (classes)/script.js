class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }

    print(str) {
        document.write(`<p style="font-size: ${this.fontSize}px; color: ${this.fontColor}; font-family: ${this.fontFamily}">${str}</p>`)
    }
}

let iDoSomething = new PrintMachine(72, 'blue', 'System-UI');

class News {
    constructor(title, text, tags, publicationDate) {
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.publicationDate = new Date(publicationDate);
    }

    print() {
        const currentDate = Date.now();
        const secDiff = Math.abs(currentDate - this.publicationDate.getTime());
        let daysDiff = Math.ceil(secDiff / (1000 * 3600 * 24));

        switch(true) {
            case daysDiff <= 1: 
                daysDiff = 'Today';
                break
            case daysDiff <= 7: 
                daysDiff = `${daysDiff} days ago`;
                break
            default: 
                daysDiff = this.publicationDate.toLocaleString('ru-RU').slice(0, 10)
        }

        document.write(`<h1>${this.title}</h1>`);
        document.write(`<p>${daysDiff}</p>`);
        document.write(`<p>${this.text}</p>`);
        document.write(`<p>#${this.tags.join(' #')} </p>`);  
    }
}

class NewsFeed {
    constructor(newsArray) {
        this.newsArray = newsArray;
    }

    get NewsAmount() {
        return this.newsArray.length;
    }

    showNews() {
        this.newsArray.forEach(element => {
            element.print()
        });
    }

    addNews(title, text, tagsArray, publicationDate) {
        this.newsArray.push(new News(title, text, tagsArray, publicationDate))
    }

    deleteNews(title) {
        const remove = this.newsArray.find((value) => value.title === title);
        const removedIndex = this.newsArray.indexOf(remove);
        if (removedIndex >= 0) this.newsArray.splice(removedIndex, 1);
    }

    sortByDate() {
        this.newsArray.sort((a, b) => a.publicationDate > b.publicationDate ? -1 : 1)
    }

    sortByTag(tag) {
        return this.newsArray.filter(element => element.tags.includes(tag) )
    }
}

let blog = new NewsFeed([
    new News('Make', "Me. Listen closely to the words in this song. I'm betting a lot of people never had a placе they belong. Give thеm a platform for doing something evil. You better not look at me wrong, 'cause, I'ma mess you up for real", ['famous', 'music', 'Kim'], '25 February 2023'),
    new News('Lorem Ipsum', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptatum labore eligendi enim accusamus tempore itaque rem debitis mollitia tenetur veritatis provident minus delectus voluptatem maiores quo quos, minima quisquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptatum labore eligendi enim accusamus tempore itaque rem debitis mollitia tenetur veritatis provident minus delectus voluptatem maiores quo quos, minima quisquam.', ['text', 'science', 'history'], '10 March 2022'),
    new News('Cicero', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.', ['text', 'latin'], '25 April 2018'),
    new News('Kafka', 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.', ['generator', 'text', 'eng'], '14 May 2019'),
    new News('Far far away', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean', ['generator', 'text', 'eng'], '3 September 2021'),
])