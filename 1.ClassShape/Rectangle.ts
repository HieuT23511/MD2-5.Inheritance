import {Shape} from "./Shape";

export class Rectangle extends Shape{
    private _width: number;
    private _length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }
    getWidth():number{
        return this._width;
    }
    getLength():number{
        return this._length;
    }
    setWidth(width:number){
        this._width = width;
    }
    setLength(length:number){
        this._length = length;
    }
    getArea(){
        return `The Area of Rectangle is ${this._width*this._length}`;
    }
    getPerimeter(){
        return `The Perimeter of Rectangle is ${2*(this._width+this._length)}`;
    }
    toString(): string {
        return `The Rectangle with Width= ${this._width}, Length= ${this._length}, which is a subclass of ${super.toString()}`;
    }
}