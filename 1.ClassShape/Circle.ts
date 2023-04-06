import {Shape} from "./Shape";

export class Circle extends Shape{
    private _radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }
    getRadius():number{
        return this._radius;
    }
    setRadius(radius:number){
        this._radius = radius;
    }
    getArea(){
        return `The Area of Circle is ${this._radius*this._radius*Math.PI}`;
    }
    getPerimeter(){
        return `The Perimeter of Circle is: ${2*Math.PI*this._radius}`;
    }
    toString(): string {
        return `A Circle with Radius: ${this._radius},which is a subclass of ${super.toString()}`;
    }
}