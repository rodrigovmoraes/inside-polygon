import { Point } from './Point'
import { Canvas2DContextUtils } from './Canvas2DContextUtils';

export class PointsCollector {
    private _vertices: Point[] = [];
    private canvas2dContextUtils;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas2dContextUtils = new Canvas2DContextUtils(canvas);
    }

    addVertex(v :Point) {
        this._vertices.push( v )
    }

    public get vertices() : Point[] {
        return this._vertices;
    }

    public collectPoint(event: MouseEvent) {
        const point = this.getPoint(event);
        this.addVertex(point);
    }

    public getPoint(event: MouseEvent) {
        const x = event.offsetX;
        const y = event.offsetY;
        const point: Point = new Point(x, y);
        this.canvas2dContextUtils.drawPoint(point, 5);
        return point;
    }

    public reset() : void {
        this.canvas2dContextUtils.reset();
        this._vertices = [];
    }
    
}