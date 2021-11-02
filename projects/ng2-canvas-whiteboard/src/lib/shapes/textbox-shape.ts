import { CanvasWhiteboardShape, CanvasWhiteboardPoint, CanvasWhiteboardShapeOptions, CanvasWhiteboardUpdate } from "ng2-canvas-whiteboard";

export class TextboxShape extends CanvasWhiteboardShape {
    getShapeName(): string {
        throw new Error("Method not implemented.");
    }
    onUpdateReceived(update: CanvasWhiteboardUpdate): void {
        throw new Error("Method not implemented.");
    }
    draw(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
    drawPreview(context: CanvasRenderingContext2D): void {
        throw new Error("Method not implemented.");
    }
    radius: number;
    spikes: number;
  
    constructor(positionPoint?: CanvasWhiteboardPoint,
                options?: CanvasWhiteboardShapeOptions,
                radius?: number,
                spikes?: number) {
      super(positionPoint, options);
      this.radius = radius || 0;
      this.spikes = spikes || 5;
    }
}