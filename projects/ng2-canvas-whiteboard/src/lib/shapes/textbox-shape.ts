import { CanvasWhiteboardShape } from './canvas-whiteboard-shape';
import { CanvasWhiteboardShapeOptions } from './canvas-whiteboard-shape-options';
import { CanvasWhiteboardPoint } from '../canvas-whiteboard-point.model';
import { CanvasWhiteboardUpdate } from '../canvas-whiteboard-update.model';
export class TextboxShape extends CanvasWhiteboardShape {
    width: number;
    height: number;

    constructor(positionPoint?: CanvasWhiteboardPoint,
        options?: CanvasWhiteboardShapeOptions,
        width?: number,
        height?: number) {
        super(positionPoint, options);
        this.width = width || 0;
        this.height = height || 0;
    }

    getShapeName(): string {
        return "TextboxShape";
    }
    onUpdateReceived(update: CanvasWhiteboardUpdate): void {
        this.width = update.x - this.positionPoint.x;
        this.height = update.y - this.positionPoint.y;
    }
    draw(context: CanvasRenderingContext2D): void {
        if (!this.width || !this.height) {
            return;
        }
        context.beginPath();

        Object.assign(context, this.options);
        context.font = this.width+'px monospace';
        context.strokeText(this.options.text,this.positionPoint.x, this.positionPoint.y,this.width);
        context.fillText(this.options.text,this.positionPoint.x, this.positionPoint.y,this.width);

        context.closePath();
    }

    drawPreview(context: CanvasRenderingContext2D): void {
        this.positionPoint = new CanvasWhiteboardPoint(2, 2);
        this.width = context.canvas.width-4;
        this.height = context.canvas.height-4;
        
        this.draw(context);
    }
}