export class Point {
    private _x: number;
    private _y: number;

    constructor(px: number, py: number) {
        this._x = px;
        this._y = py;
    }

    public get x() {
        return this._x;
    }

    public get y() {
        return this._y;
    }
}