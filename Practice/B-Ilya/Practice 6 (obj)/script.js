const rectangle = {
    leftTop: {
        x: 1,
        y: 2,
    },

    rightBottom: {
        x: 4,
        y: 5,
    }
}

function rectangleInfo(obj) {
    console.log(`Левая верхняя точка: x - ${obj.leftTop.x}`);
    console.log(`Левая верхняя точка: y - ${obj.leftTop.y}`);
    console.log(`Правая нижняя точка: х - ${obj.rightBottom.x}`);
    console.log(`Правая нижняя точка: y - ${obj.rightBottom.y}`);
}

function returnWidth(obj) {
    return obj.rightBottom.x - obj.leftTop.x;
}

function returnHeigth(obj) {
    return obj.rightBottom.y - obj.leftTop.y;
}

function square(obj) {
    return returnWidth(obj) * returnHeigth(obj);
}

function perimeter(obj) {
    return 2 * (returnWidth(obj) + returnHeigth(obj));
}

function changeWidth(obj, value) {
    obj.rightBottom.x += value;
}

function changeHeigth(obj, value) {
    obj.rightBottom.y += value;
}

function changeWidthAndHeigth(obj, width, heigth) {
    changeWidth(obj, width);
    changeHeigth(obj, heigth);
}

function moveOnX(obj, value) {
    obj.leftTop.x += value;
    obj.rightBottom.x += value;
}

function moveOnY(obj, value) {
    obj.leftTop.y += value;
    obj.rightBottom.y += value;
}

function moveRectangle(obj, x, y) {
    moveOnX(obj, x);
    moveOnY(obj, y);
}

function isInRectangle(obj, x, y) {
    if ((x >= obj.leftTop.x && x <= obj.rightBottom.x) && (y >= obj.leftTop.y && y <= obj.rightBottom.y)) {
        return true
    } return false
}