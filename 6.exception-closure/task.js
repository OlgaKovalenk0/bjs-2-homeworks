// Задача 1. Форматтер чисел

function parseCount(products) {
    let resultParse = Number.parseFloat(products);
    if (Number.isNaN(resultParse)) {
        throw new Error("Невалидное значение");
    }
    return resultParse;
}

function validateCount(products) {
    try {
        return parseCount(products);
    } catch (error) {
        return error;
    }
}

// Задача 2. Треугольник

class Triangle {
    constructor(oneSide, twoSide, threeSide) {
        if ((oneSide + twoSide) < threeSide || (twoSide + threeSide) < oneSide || (oneSide + threeSide) < twoSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.oneSide = oneSide;
        this.twoSide = twoSide;
        this.threeSide = threeSide;
    }
    get perimeter() {
        return +(this.oneSide + this.twoSide + this.threeSide);
    }
    get area() {
        let p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.oneSide) * (p - this.twoSide) * (p - this.threeSide))).toFixed(3);
    }
}

function getTriangle(oneSide, twoSide, threeSide) {
    try {
        return new Triangle(oneSide, twoSide, threeSide);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}