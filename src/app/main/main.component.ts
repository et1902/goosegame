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
    console.log("New game")
    console.log( this.username )
    this.WebSocket.socket.emit('createGame');
  }

  onClickJoinGame()
  {
    console.log("Join game")
    console.log( this.username )
    console.log( this.gameId )
    this.WebSocket.socket.emit('joinGame', this.username, this.gameId );
  }

}
