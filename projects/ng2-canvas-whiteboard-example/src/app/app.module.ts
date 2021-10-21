import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {CanvasComponent} from './canvas/canvas.component';
import { SocketWebService } from './socket-web.service';

const routes: Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:':room',
    component:RoomComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    CanvasWhiteboardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CookieService,
    SocketWebService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
