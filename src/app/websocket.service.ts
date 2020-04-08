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
			//TODO get gameId and show in titlebar
			console.log('Server: GameCreated');
			console.log(data);
		  });

		  this.socket.on('Info', (data) => {
			console.log('Server: Info');
			console.log(data);
		  });

		  this.socket.on('Log', (data) => {
			console.log('Server: Log' + data);
		  });

		this.socket.on('MissingNameField', (data) => {
			//TODO show error to user
			console.log('Server: MissingNameField');
			console.log(data);
		  });

		this.socket.on('MissingIdField', (data) => {
			//TODO show error to user
			console.log('Server: MissingIdField');
			console.log(data);
		});

		this.socket.on("*",function(event,data) {
			console.log(event);
			console.log(data);
		});
	}
}
