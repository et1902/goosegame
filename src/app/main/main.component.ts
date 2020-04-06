import { Component, OnInit } from '@angular/core';

import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username;
  WebSocket = new WebSocketService();

  constructor() { }

  ngOnInit(): void {
  }

  getUsername()
  {
    return this.username
  }

  onClickNewGame()
  {
    console.log("New game")
    console.log( this.username )
    this.WebSocket.socket.emit('newGame');
    this.WebSocket.socket.emit('joinGame', this.username, 123);
  }

  onClickJoinGame()
  {
    console.log("Join game")
    console.log( this.username )
    this.WebSocket.socket.emit('joinGame', this.username, 123);
  }

}
