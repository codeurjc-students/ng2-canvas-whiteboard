export class CanvasWhiteboardShapeOptions {
  shouldFillShape?: boolean;
  fillStyle?: string;
  strokeStyle?: string;
  lineWidth?: number;
  lineJoin?: string;
  lineCap?: string;
  text: string;

  constructor() {
    this.shouldFillShape = false;
    this.fillStyle = null;
    this.strokeStyle = 'rgba(0, 0, 0, 1)';
    this.lineWidth = 2;
    this.lineJoin = 'round';
    this.lineCap = 'round';
    this.text = '';
  }
}
