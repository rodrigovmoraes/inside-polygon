import { Point } from "./Point";

export class LineSegment {
    private _pointA: Point;
    private _pointB: Point;

    constructor (pointA: Point, pointB: Point) {
        this._pointA = pointA;
        this._pointB = pointB;
    }

    public get pointA() {
        return this._pointA;
    }

    public get pointB() {
        return this._pointB;
    }

    public pointIsAbove(pointP: Point) : boolean {
        const m: number = (this._pointB.y - this._pointA.y) / (this._pointB.x - this._pointA.x);
        const pointBetaY = m * pointP.x - m * this._pointA.x + this._pointA.y;
        const pointBetaX = pointP.x;
        let t = pointBetaY - pointP.y;
        if (t < 0) { //point is below the line segment
            return false;
        }
        t = (pointBetaX - this._pointA.x) / (this._pointB.x - this._pointA.x);
        return  t >= 0 && t <= 1;
    }
}