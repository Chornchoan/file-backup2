abstract class Shape {
    constructor(public leftX: number, public bottomY: number) {}

    abstract getWidth(): number;
    abstract getHeight(): number;
    abstract getArea(): number;
}
//=========== Shape ============================
class Square extends Shape {
    constructor(leftX: number, bottomY: number, private size: number) {
        super(leftX, bottomY);
        this.size = size;
    }

    getWidth(): number {
        return this.size;
    }

    getHeight(): number {
        return this.size;
    }

    getArea(): number {
        return this.size * this.size;
    }
}
//================= Rectangle =================================================
class Rectangle extends Shape {
    constructor(leftX: number,bottomY: number,private rightX: number,private topY: number) {
        super(leftX, bottomY);
        this.rightX = rightX;
        this.topY = topY;
    }

    getWidth(): number {
        return this.rightX - this.leftX;
    }

    getHeight(): number {
        return this.topY - this.bottomY;
    }

    getArea(): number {
        return this.getWidth() * this.getHeight();
    }
}
//========== circle =================================
class circle extends Shape{
    constructor(leftX: number,bottomY: number,private radius: number) {
        super(leftX, bottomY);
        this.radius = radius;
    }

    // @Override
    getWidth(): number {
        return 2 * this.radius;
    }

    // @Override
    getHeight(): number {
        return 2 * this.radius;
    }
    // @Override
    getArea():number {
        return Math.PI * this.radius * this.radius;
    }
}

// ============== console =============================
let square = new Square(0, 0, 10);
console.log(`Square: width=${square.getWidth()} height=${square.getHeight()} area=${square.getArea()}`);

let circle1 = new circle(5, 5, 4);
console.log(`Circle: width=${circle1.getWidth()} height=${circle1.getHeight()} area=${circle1.getArea()}`);

let rectangle = new Rectangle(0, 0, 10, 10);
console.log(`Rectangle:  width=${rectangle.getWidth()} height=${rectangle.getHeight()} area=${rectangle.getArea()}`);
