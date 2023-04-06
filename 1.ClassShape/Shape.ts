export class Shape {
    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    getColor(): string {
        return this._color;
    }

    isFilled(): boolean {
        return this._filled;
    }

    setColor(inputColor: string) {
        this._color = inputColor;
    }

    setFilled(inputBoolean: boolean) {
        this._filled = inputBoolean;
    }

    toString() {
        return `A Shape with color: ${this.getColor()} and ${this._filled ? "filled" : "not filled"}`
    }
}