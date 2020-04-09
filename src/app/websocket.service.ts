import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

@Injectable({
	providedIn: 'root'
})

export class WebSocketService {
	socket;
	id;

	constructor()
	{	
		this.socket = io('http://localhost:3000');
		this.id = this.socket.id;
	}

	emit( event, data, callback)
	{
		this.socket.emit( event, data, callback);
	}

	on( event, callback)
	{
		this.socket.on( event, callback);
	}

	off( event, callback )
	{
		this.socket.removeListener( event, callback);
	}
}
