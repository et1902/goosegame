import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { WebSocketService } from '../websocket.service'

import { GameboardComponent } from './gameboard/gameboard.component';


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent implements OnInit, OnDestroy{
    public gameID = '7rzwgZrZL';
    public game;
    public started = false;
    public players;

    constructor(private router: Router, private route: ActivatedRoute, private socket: WebSocketService)
    {
        console.log('Joining game...' );
        this.socket = new WebSocketService();

        this.socket.emit('JoinGame', {gameID: this.gameID, playername: 'Elias'} , (data) => { console.log(data); this.game = data } );
        this.socket.on('GameUpdate', (data) => {this.onUpdate(data)} );
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
        this.players = data.players;
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