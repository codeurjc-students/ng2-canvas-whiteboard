import { EventEmitter, Output, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket {
  @Output() callClear: EventEmitter<any> = new EventEmitter();
  @Output() callBack: EventEmitter<any> = new EventEmitter();
  @Output() callUndo: EventEmitter<any> = new EventEmitter();
  @Output() callRedo: EventEmitter<any> = new EventEmitter();
  @Output() callSave: EventEmitter<any> = new EventEmitter();
  @Output() callSaveToStorage: EventEmitter<any> = new EventEmitter();
  @Output() callLoadFromStorage: EventEmitter<any> = new EventEmitter();
  @Output() callChangeOptions: EventEmitter<any> = new EventEmitter();

  constructor(private cookieService: CookieService) {
    super({
      url: 'http://localhost:8080',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        }
      }
    })
    this.listen();
  }
  listen = () => {
    this.ioSocket.on('draw', res => this.callBack.emit(res))
    this.ioSocket.on('clear', res => this.callClear.emit(res))
    this.ioSocket.on('undo', res => this.callUndo.emit(res))
    this.ioSocket.on('redo', res => this.callRedo.emit(res))
    this.ioSocket.on('save', res => this.callSave.emit(res))
    this.ioSocket.on('saveToStorage', res => this.callSaveToStorage.emit(res))
    this.ioSocket.on('loadFromStorage', res => this.callLoadFromStorage.emit(res))
    this.ioSocket.on('changeOptions', res => this.callChangeOptions.emit(res))
  }
  drawEvent = (payload = {}) => {
    this.ioSocket.emit('draw', payload);
  }
  clearEvent = (payload = {}) => {
    this.ioSocket.emit('clear', payload);
  }
  undoEvent = (payload = {}) => {
    this.ioSocket.emit('undo', payload);
  }
  redoEvent = (payload = {}) => {
    this.ioSocket.emit('redo', payload);
  }
  saveEvent = (payload = {}) => {
    this.ioSocket.emit('save', payload);
  }
  saveToStorageEvent = (payload = {}) => {
    this.ioSocket.emit('saveToStorage', payload);
  }
  loadFromStorageEvent = (payload = {}) => {
    this.ioSocket.emit('loadFromStorage', payload);
  }
  changeOptionsEvent = (payload = {}) => {
    this.ioSocket.emit('changeOptions', payload);
  }

}

