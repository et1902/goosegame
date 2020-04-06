import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {
  socket;

  constructor() {
  this.socket = io('http://localhost:3000');
  
  this.socket.on('joinGame', () => {
    // ...
    console.log("Joined  Game");
  });

  this.socket.on('player', (data) => {
    // ...
    console.log(data);
  });

  }
}
