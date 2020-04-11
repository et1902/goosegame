import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { WebSocketService } from '../../websocket.service'
import { WebStorageService } from '../../webstorage.service'

@Component({
  selector: 'app-template-lobby',
  templateUrl: './template-lobby.component.html',
  styles: []
})
export class TemplateLobbyComponent
{
    public playerID;
    public playername;
    public gameID;
    private socket: WebSocketService;
    private storage: WebStorageService;

    constructor(private router: Router)
    {
        this.socket = new WebSocketService();
        this.storage = new WebStorageService();

        if( !this.storage.check() )
        {
            this.socket.emit('GenID', null, (data) => {
                this.storage.write('goosegame-playerID', data );
                this.storage.write('goosegame-playername', null );
             })
        }
        this.playerID = this.storage.read('goosegame-playerID');
        if( this.storage.read('goosegame-playername') != null )
        {    
            console.log('Found Playername in LocalStorage! Restoring it...')    
            this.playername = this.storage.read('goosegame-playername');
        }

    }

    public setPlayername( name)
    {
        console.log('Saved playername to localstorage');
        this.storage.write('goosegame-playername', name );
        console.log( this.storage.read('goosegame-playername')) ;
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
            this.socket.emit('JoinGame', {gameID: this.gameID, playerID: this.playerID, playername: this.playername}, (game) => 
            { 
                console.log( game )
                if( game != undefined)
                {
                    this.router.navigateByUrl('/game/' + game.gameID);
                    return; 
                }
                console.error('Joining game failed!')
                
            });
            return;
        }
        console.error('No gameID set!');
    }

    

}