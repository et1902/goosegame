import { Component, OnInit } from '@angular/core';

import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: []
})
export class MainComponent implements OnInit {
  WebSocket = new WebSocketService();

  constructor() { }

  ngOnInit(): void {
  }

}
