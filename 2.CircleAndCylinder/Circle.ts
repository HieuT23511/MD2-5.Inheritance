export  class Circle{
    private _radius: number;
    private _color: string;
    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }
    getRadius():number{
        return this._radius;
    }
    setRadius(radius:number){
        this._radius = radius;
    }
    getArea():number{
        return this._radius*this._radius*Math.PI;
    }
    getPerimeter():number{
        return 2*Math.PI*this._radius;
    }
    toString():void{
        console.log(`The Area is ${this.getArea()}`);
        console.log(`The Perimeter is ${this.getPerimeter()}`);
    }
}