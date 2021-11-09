import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: 'canvas-whiteboard-text-editor',
  template: `
    <div class="divText">
        <label>Escribe...</label>
        <input type="text" id="txtInput">
        <input type="submit" value="Go" (click)=selectText()/>
    </div>
    `,
  styles: [` `]
})
export class CanvasWhiteboardTextEditor implements OnInit {

  @Input() previewText: string;
  @Input() readonly insertedText: string = 'insertedText';
  @ViewChild('canvaswhiteboardtexteditor', { static: true }) canvas: ElementRef;

  @Input() readonly showTextEdit: boolean = false;
  private _context: CanvasRenderingContext2D;

  @Output() onToggleEditText = new EventEmitter<boolean>();
  @Output() onTextInserted = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
  }

  /**
   * Initialize the canvas drawing context. If we have an aspect ratio set up, the canvas will resize
   * according to the aspect ratio.
   */
  ngOnInit(): void {
      this._context = this.canvas.nativeElement.getContext('2d');
  }

  closeOnExternalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target) && this.showTextEdit) {
      this.onToggleEditText.emit(false);
    }
  }

  toggleEditText(event: Event): void {
    if (event) {
      event.preventDefault();
    }

    this.onToggleEditText.emit(!this.showTextEdit);
  }

  selectText(): void {
    var txt = (<HTMLInputElement>document.getElementById('txtInput')).value;
    console.log(txt);
    if (txt != null) {
      this.onTextInserted.emit(txt);
      this.toggleEditText(null);
    }
  }
}
