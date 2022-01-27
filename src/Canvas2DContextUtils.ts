import { Point } from './Point'

export class Canvas2DContextUtils {
    private canvasContext: CanvasRenderingContext2D | null = null; 
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        const ctx = this.canvas.getContext("2d");
        if (ctx) {
            this.canvasContext = ctx;
        } else {
            console.log("It was not possible to get the canvas 2d context.");
        }
    }

    public drawLine(a: Point, b: Point) {
        if (this.canvasContext != null) {
            this.canvasContext.moveTo(a.x, a.y);
            this.canvasContext.lineTo(b.x, b.y);
            this.canvasContext.stroke();
        }
        
    }

    public drawPoint(a: Point, radius: number) {
        if (this.canvasContext != null) {
            this.canvasContext.beginPath();
            this.canvasContext.arc(a.x, a.y, radius, 0, 2 * Math.PI);
            this.canvasContext.fill();
        }
    }

    public reset() {
        if (this.canvasContext != null) {
            this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}