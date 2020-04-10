import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketService } from '../../websocket.service'

@Component({
  selector: 'app-template-lobby',
  templateUrl: './template-lobby.component.html',
  styles: []
})
export class TemplateLobbyComponent
{
    public gameID;

    constructor(private router: Router, private socket: WebSocketService)
    {
        this.socket = new WebSocketService();
    }
    public setgameID( ID )
    {
        this.gameID = ID;
    }

    public createGame()
    {
        this.socket.emit('CreateGame', null, (data) => { console.log('Recieved GameID: ' + data); this.setgameID(data) } );
    }

    public joinGame()
    {   
        console.log('Try to join game: ' + this.gameID);
        if( this.gameID != null )
        {
            this.router.navigateByUrl('/game/' + this.gameID)
            return;
        }
        console.error('No gameID set!');
    }

    

}