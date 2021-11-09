import { NgModule } from '@angular/core';
import { CanvasWhiteboardComponent } from './canvas-whiteboard.component';
import { CommonModule } from '@angular/common';
import { CanvasWhiteboardColorPickerComponent } from './canvas-whiteboard-colorpicker.component';
import { CanvasWhiteboardShapeSelectorComponent } from './shapes/canvas-whiteboard-shape-selector.component';
import { CanvasWhiteboardShapePreviewComponent } from './shapes/canvas-whiteboard-shape-preview.component';
import { CanvasWhiteboardService } from './canvas-whiteboard.service';
import { CanvasWhiteboardShapeService } from './shapes/canvas-whiteboard-shape.service';
import { SocketWebService } from './services/socket-web.service';
import { CanvasWhiteboardTextEditor } from './canvas-whiteboard-text-editor.component';


@NgModule({
  declarations: [
    CanvasWhiteboardComponent,
    CanvasWhiteboardColorPickerComponent,
    CanvasWhiteboardShapeSelectorComponent,
    CanvasWhiteboardShapePreviewComponent,
    CanvasWhiteboardTextEditor
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CanvasWhiteboardService,
    CanvasWhiteboardShapeService,
    SocketWebService
  ],
  exports: [CanvasWhiteboardComponent]
})
export class CanvasWhiteboardModule {

}
