// ban mo ta
class Circle {
    radius; color;
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        return this.radius;
    }

    getArea(){
        let area = Math.PI*this.radius*this.radius;
        return area;
    }
}
// doi tuong la the hien cu the
let c1 = new Circle(2, "hong");
let c2 = new Circle(3, "xanh");
// truy cap thuoc tinh va phuong thuc cua doi tuong
// doi tuong la kieu tham chieu
let c3=c1;

