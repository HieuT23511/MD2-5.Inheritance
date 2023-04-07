import {Point2D} from "./Point2D";

export class Point3D extends Point2D{
    private _z:number;
    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }
    getZ():number{
        return this._z;
    }
    setZ(z:number){
        this._z = z;
    }
    getXYZ():object{
        return {x:super.getX(),y:super.getY(),z:this._z}
    }
    setXYZ(x:number,y:number,z:number){
        super.setXY(x,y);
        this._z = z;
    }
}