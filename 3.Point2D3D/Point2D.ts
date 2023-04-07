export class Point2D{
    private _x : number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    getX():number{
        return this._x;
    }
    getY():number{
        return this._y;
    }
    getXY():object{
        return {x:this._x, y:this._y};
    }
    setX(x:number){
        this._x = x;
    }
    setY(y:number){
        this._y = y;
    }
    setXY(x:number, y:number){
        this._x = x;
        this._y = y;
    }
}