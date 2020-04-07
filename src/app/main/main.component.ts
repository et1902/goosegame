import { Component, OnInit } from '@angular/core';

import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username;
  gameId;
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
    this.WebSocket.socket.emit('CreateGame');
  }

  onClickJoinGame()
  {
    this.WebSocket.socket.emit('JoinGame', this.username, this.gameId );
  }

}
