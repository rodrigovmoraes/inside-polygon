import { Point } from './Point'
import { Canvas2DContextUtils } from './Canvas2DContextUtils';
import { LineSegment } from './LineSegment';

export class Polygon {
    private vertices: Point[];
    private canvas2DContextUtils: Canvas2DContextUtils;
    private lineSegments: LineSegment[] = [];

    constructor(canvas : HTMLCanvasElement, vertices: Point[]) {
        this.canvas2DContextUtils = new Canvas2DContextUtils(canvas);
        this.vertices = vertices;
        if (this.vertices.length >= 3) {
            let firstVertex;
            let lastVertex:Point = firstVertex = this.vertices[0];
            for (let i = 0; i < this.vertices.length; i++) {
                let vertex = this.vertices[i];
                this.lineSegments.push(new LineSegment(lastVertex, vertex, canvas));
                lastVertex = vertex;
            }
            this.lineSegments.push(new LineSegment(lastVertex, firstVertex, canvas));
        }
    }

    draw() {
        for (let lineSegment of this.lineSegments) {
            lineSegment.draw();
        }
    }

    isPointInside(point : Point) : boolean {
        if (this.lineSegments.length >= 3) {
            let cont = 0;
            for (let lineSegment of this.lineSegments) {
                if (lineSegment.pointIsAbove(point)) {
                    cont++;
                }
            }
            return cont % 2 > 0;
        } else {
            return false;
        }
        
    }
}