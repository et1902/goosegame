import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})

export class WebSocketService {
	socket;

	constructor() {	
		this.socket = io('http://localhost:3000');

		this.socket.on('GameCreated', (data) => {
			console.log('Server: GameCreated');
			console.log(data);
		  });

		this.socket.on('Info', (data) => {
			console.log('Server: Info');
			console.log(data);
		  });

		this.socket.on("*",function(event,data) {
			console.log(event);
			console.log(data);
		});
	}
}
