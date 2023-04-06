import {Rectangle} from "./Rectangle";

export class Square extends Rectangle{

    constructor(color: string, filled: boolean, side:number) {
        super(color, filled, side, side);
    }
    getSide():number{
        return this.getWidth();
    }
    setSide(side:number){
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width: number) {
        this.setSide(width);
    }
    setLength(length: number) {
        this.setSide(length);
    }
    toString(): string {
        return `A Square with side = ${this.getSide()}, which is a subclass of ${super.toString()}`;
    }

}