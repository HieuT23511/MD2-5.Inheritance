import {Shape} from "./Shape";

export class Triangle extends Shape {
    _side1: number;
    _side2: number;
    _side3 : number;


    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getPerimeter ():number{
        return this._side1 + this._side2 + this._side3;
    }
    getArea ():number{
        let p:number = this.getPerimeter() / 2;
        return Math.sqrt(p*(p-this._side1)*(p-this._side2)*(p-this._side3));
    }
    toString():void{
        console.log(`The Area of Triangle is ${this.getArea()}`);
        console.log(`The Perimeter of Triangle is ${this.getPerimeter()}`);
    }
}