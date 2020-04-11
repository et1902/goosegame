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
    public started = false;
    public players;

    constructor(private router: Router, private route: ActivatedRoute, private socket: WebSocketService, private storage: WebStorageService)
    {
        this.gameID = this.route.snapshot.paramMap.get("gameID")
        console.log('Connection to game ' + this.gameID );
        this.socket.emit('RegisterSocketEndpoint', {socketID: this.socket.id, playerID: this.storage.read('goosegame-playerID') }, null)

        //this.socket.on('GameUpdate', (data) => { this.onUpdate(data) });
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
        this.game = data;
        this.players = data.players;
        console.log( this.players );
    }

    public startGame()
    {
        console.log('Starting game...');
        this.socket.emit('StartGame', this.gameID, () => { this.started=true } );
    }

    public throwDice()
    {
        this.socket.emit('ThrowDice', this.gameID, (data) => 
        { console.log('Thrwoing Dice: ' + data);
        });
    }

}