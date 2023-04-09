// Task 1
 
document.querySelector('.thumb').style.left = document.querySelector('.track').offsetLeft - document.querySelector('.thumb').offsetWidth / 2 + 'px';
 
document.querySelector('.thumb').addEventListener('mousedown', event => {
    event.preventDefault();
    let elem = document.querySelector('.thumb');
    let maxLeft = document.querySelector('.track').offsetLeft - elem.offsetWidth / 2;
    let maxRight = document.querySelector('.track').offsetLeft + document.querySelector('.track').offsetWidth - elem.offsetWidth / 2;
    let position = parseInt(elem.style.left);
 
    function dragEvent(e) {
        position += e.movementX;
        if (position > maxLeft && position < maxRight) {
            elem.style.left = position + 'px';
        }
        else if (position < maxLeft) {
            elem.style.left = maxLeft + 'px';
        }
        else {
            elem.style.left = maxRight + 'px';
        }
    }
 
    document.addEventListener('mousemove', dragEvent)
    document.onmouseup = () => {
        document.removeEventListener('mousemove', dragEvent);
        document.onmouseup = null;
    }
})


 
// Task 2
 
arr = ['pics/1.png', 'pics/2.png', 'pics/3.png', 'pics/4.png', 'pics/5.png', 'pics/6.png', 'pics/7.png', 'pics/8.png', ];
 
document.querySelector('.left').addEventListener('click', e => {
    let url = document.querySelector('.slide').style.backgroundImage.match(/[pics].*[png]/)[0];
    if (arr.indexOf(url) !== 0) {
        if (arr.indexOf(url) === 1) {
            document.querySelector('.left').style.opacity = '0';
        }
        document.querySelector('.slide').style.backgroundImage = document.querySelector('.slide').style.backgroundImage.replace(url, arr[arr.indexOf(url) - 1])
    }
    if (document.querySelector('.right').style.opacity) {
        document.querySelector('.right').style.opacity = '';
    }
    })
 
    document.querySelector('.right').addEventListener('click', e => {
        let url = document.querySelector('.slide').style.backgroundImage.match(/[pics].*[png]/)[0];
        if (arr.indexOf(url) !== arr.length - 1) {
            if (arr.indexOf(url) === arr.length - 2) {
                document.querySelector('.right').style.opacity = '0';
            }
            document.querySelector('.slide').style.backgroundImage = document.querySelector('.slide').style.backgroundImage.replace(url, arr[arr.indexOf(url) + 1])
        }
        if (document.querySelector('.left').style.opacity) {
            document.querySelector('.left').style.opacity = '';
        }
    })


 
// Task 3
 
document.querySelectorAll('.task3 h4').forEach(e => {
    e.addEventListener('click', event => {
        if (document.querySelector('.show') && document.querySelector('.show') !== e.nextElementSibling) {
            document.querySelector('.show').classList.toggle('show');
        }
        e.nextElementSibling.classList.toggle('show');
    })
})


 
// Task 4

class Newslist {
    arr = [];
    constructor(...args) {
        this.arr.push(...args);
    }

    post() {
        if (this.arr.length === 0) return;
        document.querySelector('.task4').insertAdjacentHTML('beforeend', `<div>${(this.arr.pop())}</div>`);
    }
}

let newslist = new Newslist(
`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nam inventore laboriosam unde voluptatibus eligendi, molestias animi numquam deleniti itaque a minus accusantium totam aut cupiditate ducimus temporibus, consectetur iste?
        Eveniet possimus eaque, fugit odio minus expedita dolores atque, porro corrupti nobis maxime eos earum consequatur nam dignissimos, odit rem quam dolorum quos blanditiis. Quasi ducimus error laborum praesentium nemo?
        Alias voluptates itaque, natus dolorem doloremque ullam labore vero vel. Possimus, incidunt nihil facere modi distinctio pariatur error dignissimos similique, sint nobis quaerat dolores vero! Aliquam porro autem corrupti omnis.
        Voluptates, cupiditate tempore. Recusandae aspernatur minima expedita facere, voluptatibus quod ex numquam provident, beatae et praesentium? Excepturi ipsum doloribus vero, culpa vitae pariatur sit dicta! Velit repellat eaque unde modi.
        Aut voluptas totam quasi soluta sit nobis sunt at suscipit. Autem, aliquid placeat nulla eaque repellat aliquam beatae quisquam officiis saepe distinctio, natus facilis unde vitae, obcaecati quam cumque libero.`,
`
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis fuga dolorem inventore explicabo accusamus ea cumque quo. Quae illo reprehenderit mollitia enim eius dolorum culpa saepe? Consectetur illum magni aliquam.
        A debitis, recusandae sequi laborum optio dolore eum modi adipisci totam hic voluptatem rerum ipsam ullam, eligendi quam similique. Iusto, pariatur sapiente? Repellendus minima vero esse, minus voluptas officiis quis!
        Voluptatum ullam non ad ab ea accusantium eos hic aliquam! Nobis sit officiis, veritatis voluptatum est voluptatibus, vitae qui obcaecati aliquam, sequi eligendi animi officia itaque eum sint dicta cupiditate!
        Saepe necessitatibus possimus quis sint dolores error, provident corporis illum quam officia obcaecati ipsam nisi id itaque nulla corrupti officiis deleniti sunt quas vitae et quibusdam. Quam accusamus doloribus sit.
        Est soluta laboriosam nulla impedit eos dicta. Fugiat non sapiente alias consectetur enim, quod reiciendis iusto numquam cupiditate eos? Saepe minus vero unde culpa dolorum reiciendis harum consequuntur libero minima.`,
`
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aut totam at minus, laboriosam fuga maiores eum dolore excepturi incidunt autem sed tempore non fugiat expedita beatae commodi pariatur iusto.
        Magni, ducimus qui temporibus distinctio voluptatum consequatur deleniti beatae natus enim dolore libero ea ut minus quo praesentium laborum pariatur nesciunt magnam vero dolor quos voluptate eaque repudiandae. Aliquid, illo.
        Natus delectus quae nisi suscipit eos culpa aspernatur vel, libero, assumenda sapiente odio! Aut iusto officia tempora ipsam voluptatum nihil corrupti praesentium, asperiores, similique cupiditate quae, libero molestiae dolore ipsa.
        Blanditiis esse placeat sequi alias hic eius distinctio exercitationem, quidem voluptatibus consequatur impedit unde explicabo dicta, fugiat nulla illum ratione repellendus magnam? Maxime blanditiis doloribus minus! Magni pariatur adipisci amet.
        Quae, nobis error tempora temporibus minima sit rem modi aperiam voluptatem ut? Maxime in tempora culpa, aperiam ad, ratione excepturi quam consequatur ea doloribus fugiat aspernatur rem libero officia itaque.`, 
`
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur sapiente molestiae atque ipsum fuga reprehenderit fugiat id laboriosam enim voluptatum. Obcaecati, voluptatum. Temporibus amet officiis, ut consequatur facilis sed saepe.
        Porro autem velit minima id voluptas dignissimos, ullam dicta natus sequi temporibus excepturi accusamus nesciunt. Sit iusto voluptatibus aliquam aut. Eligendi vel, quis architecto optio illo itaque doloribus vero quam!
        Ex eligendi necessitatibus saepe velit blanditiis, voluptatum, commodi ullam iusto, vitae ab autem consequuntur neque sint perspiciatis illo in aliquid nisi doloremque molestiae beatae repellat! Voluptatibus eveniet sapiente reprehenderit consequatur?
        Corrupti modi laborum neque ut eum! Sequi quas dolore placeat. Est ipsum quis illum sapiente. Corrupti explicabo expedita velit commodi autem animi! Nobis ratione dicta cupiditate dolor, repellendus dolorum facere?
        Nihil ad eveniet enim neque reiciendis dicta, saepe iste ex, quas eligendi beatae magni est sunt ratione reprehenderit. Ut dolor facere esse maxime nam consectetur distinctio magnam quasi impedit debitis?`)

document.querySelector(`.task4`).addEventListener('scroll', e => {
    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight) {
        newslist.post();
    }
})




// Task 5

document.querySelector('.task5 .modal').addEventListener('click', e => {
    document.querySelector('.task5 .modal').style.display = 'none';
    window.onscroll = null;
})

let number = {
    arr: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'jctober', 'november', 'december'],
    month: function (elem) {
        let i = this.arr.indexOf(elem.toLowerCase());
        return ~i ? i : 'error';
    }
}

document.querySelector('.task5 button').addEventListener('click', e => {
    e.preventDefault();
    let month = number.month(document.querySelector('.task5 .month input').value);
    let date = new Date(+document.querySelector('.task5 .year input').value, month);

    if (Number.isNaN(+date)) {
        let scrollPosition = document.scrollingElement.scrollTop;
        window.onscroll = () => {window.scroll(0, scrollPosition)}

        document.querySelector('.task5 .modal').style.top = document.scrollingElement.scrollTop + 'px';
        document.querySelector('.task5 .modal').style.display = 'flex';
        document.querySelector('.task5 .modal p').textContent = 'Wrong Data';
        document.querySelector('.task5 .modal div').style.top = e.target.offsetTop - scrollPosition - document.querySelector('.task5 .modal div').offsetHeight - 16 + 'px';

        return;
    }
    let table = document.querySelector('.task5 tbody');
    Array.from(table.children).forEach(e => {
        e.remove();
    })

    table.insertAdjacentHTML('beforeend', 
    `<tr>
        <th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th>
    </tr>`);

    for (let i = 1; i < 32; i++) {
        date = new Date(+document.querySelector('.task5 .year input').value, month, i);
        if (date.getMonth() !== month) {
            break;
        }
        if (table.lastElementChild.lastElementChild.innerText) {
            table.insertAdjacentHTML('beforeend', 
            `<tr>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>`);
        }
        table.lastElementChild.children[(date.getDay() + 6) % 7].innerHTML = i;
    }
})