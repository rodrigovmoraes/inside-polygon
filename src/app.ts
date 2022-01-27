import { PointsCollector } from "./PointsCollector";
import { Point } from "./Point";
import { Polygon } from "./Polygon";

const canvas = document.getElementById('polygonCanvas') as HTMLCanvasElement;
let pointsCollector: PointsCollector = new PointsCollector(canvas);
const btnBuildPolygon = document.getElementById('btnBuildPolygon') as HTMLButtonElement;
const btnResetPolygon = document.getElementById('btnResetPolygon') as HTMLButtonElement;
let collecting = true;
let polygon: Polygon;

function showPointInsideMessage() {
    let outsideMsg: HTMLDivElement | null = document.getElementById("outsideMsg") as HTMLDivElement;
    let insideMsg: HTMLDivElement | null = document.getElementById("insideMsg") as HTMLDivElement;
    outsideMsg.style['display'] = 'none';
    insideMsg.style['display'] = 'block';
}

function showPointOutsideMessage() {
    let outsideMsg: HTMLDivElement = document.getElementById("outsideMsg") as HTMLDivElement;
    let insideMsg: HTMLDivElement = document.getElementById("insideMsg") as HTMLDivElement;
    outsideMsg.style['display'] = 'block';
    insideMsg.style['display'] = 'none';
}

function clearMessages() {
    let outsideMsg: HTMLDivElement = document.getElementById("outsideMsg") as HTMLDivElement;
    let insideMsg: HTMLDivElement = document.getElementById("insideMsg") as HTMLDivElement;
    outsideMsg.style['display'] = 'none';
    insideMsg.style['display'] = 'none';
}

canvas.addEventListener('mousedown', function(e) {
    if (collecting) {
        pointsCollector.collectPoint(e);
    } else {
        const point: Point = pointsCollector.getPoint(e);
        const pointInside = polygon.isPointInside(point);
        if (pointInside) {
            showPointInsideMessage();
        } else {
            showPointOutsideMessage();
        }
    }
});

btnBuildPolygon.addEventListener('click', function(e) {
    if (collecting) {
        let vertices:Point[] = pointsCollector.vertices;
        polygon = new Polygon(canvas, vertices);
        polygon.draw();
        collecting = false;
    }
});

btnResetPolygon.addEventListener('click', function(e) {
    pointsCollector.reset();
    clearMessages();
    collecting = true;
});