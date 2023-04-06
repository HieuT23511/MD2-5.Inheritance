import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let shape = new Shape('blue',false);
// console.log(shape);
// console.log(shape.toString());
let circle = new Circle('green',false,10);
// console.log(circle)
// console.log(circle.getArea());
// console.log(circle.getPerimeter());
// console.log(circle.toString());
let rectangle = new Rectangle('purple',false,10,20);
// console.log(rectangle);
// console.log(rectangle.getArea());
// console.log(rectangle.getPerimeter());
// console.log(rectangle.toString());
let square = new Square('red',true,5);
console.log(square);
console.log(square.toString());