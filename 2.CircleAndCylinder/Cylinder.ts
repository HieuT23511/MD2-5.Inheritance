import {Circle} from "./Circle";

export class Cylinder extends Circle{
    private _height : number;
    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }
    getHeight(): number {
        return this._height;
    }
    setHeight(value: number) {
        this._height = value;
    }
    getVolume ():number{
        return super.getArea()*this._height
    }
    getArea():number{
        return super.getPerimeter()*this._height ;
    }
    getPerimeter():number{
        return 2*super.getArea()+super.getPerimeter()*this._height;
    }
    toString():void{
        console.log(`The Ground Perimeter is ${this.getArea()}`);
        console.log(`The Perimeter is ${this.getPerimeter()}`);
        console.log(`The Volume is ${this.getVolume()}`);
    }
}

