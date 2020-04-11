import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { WebSocketService } from '../websocket.service'
import { WebStorageService } from '../webstorage.service'


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent implements OnInit, OnDestroy{
    public gameID;
    public game;
    public started;

    constructor(private router: Router, private route: ActivatedRoute, private socket: WebSocketService, private storage: WebStorageService)
    {
        this.gameID = this.route.snapshot.paramMap.get("gameID")
        
        this.socket.emit('RegisterSocketEndpoint', {gameID: this.gameID, playerID: this.storage.read('goosegame-playerID') }, (data) => 
        { 
            console.log('Player still in running game. Loading this game instead!')
            this.router.navigateByUrl('/game/' + data);
        });

        console.log('Connecting to game ' + this.gameID );

        this.socket.on('GameUpdate', (data) => { console.log('Recieved game update'); this.onUpdate(data) });
    }

    ngOnInit()
    {
        
    }

    ngOnDestroy()
    {
        this.socket.off('GameUpdate', null);
    }

    private onUpdate(data)
    {
        console.log( data );
        this.game = data
    }

    public startGame()
    {
        console.log('Starting game...');
        this.socket.emit('StartGame', this.gameID, () => { console.log('Game started'); this.started=true } );
    }

    public leaveGame()
    {
        console.log('Leaving game...');
        this.socket.emit('LeaveGame', this.storage.read('goosegame-playerID'), () => { this.router.navigateByUrl('/') } );
    }



    public throwDice()
    {
        this.socket.emit('ThrowDice', this.gameID, (data) => 
        { console.log('Thrwoing Dice: ' + data);
        });
    }

}