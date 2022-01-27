import { Point } from './Point'
import { Canvas2DContextUtils } from './Canvas2DContextUtils';
import { LineSegment } from './LineSegment';

export class Polygon {
    private vertices: Point[];
    private canvas2DContextUtils: Canvas2DContextUtils;

    constructor(canvas : HTMLCanvasElement, vertices: Point[]) {
        this.canvas2DContextUtils = new Canvas2DContextUtils(canvas);
        this.vertices = vertices;
    }

    draw() {
        if (this.vertices.length >= 3) {
            let firstVertex;
            let lastVertex:Point = firstVertex = this.vertices[0];
            for (let i = 1; i < this.vertices.length; i++) {
                let vertex = this.vertices[i];
                this.canvas2DContextUtils.drawLine(lastVertex, vertex);                
                lastVertex = vertex;
            }
            this.canvas2DContextUtils.drawLine(lastVertex, firstVertex);
        }
    }

    isPointInside(point : Point) : boolean {
        if (this.vertices.length >= 3) {
            let cont = 0;
            let firstVertex;
            let lastVertex:Point = firstVertex = this.vertices[0];
            for (let i = 1; i < this.vertices.length; i++) {
                let vertex = this.vertices[i];
                const lineSegment: LineSegment = new LineSegment(lastVertex, vertex);
                if (lineSegment.pointIsAbove(point)) {
                    cont++;
                }
                lastVertex = vertex;
            }
            const lineSegment: LineSegment = new LineSegment(lastVertex, firstVertex);
            if (lineSegment.pointIsAbove(point)) {
                cont++;
            }
            return cont % 2 > 0
        } else {
            return false;
        }
    }
}