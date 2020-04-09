import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { WebSocketService } from '../websocket.service'


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent implements OnInit{
    public gameID;
    public game;

    constructor(private router: Router, private route: ActivatedRoute, private socket: WebSocketService)
    {
        console.log('Joining game...' );
        this.socket = new WebSocketService();

        this.socket.emit('JoinGame', this.gameID, (data) => { console.log(data); this.game = data } );

        if( this.game == null)
        {
            console.log("Joining game failed!");
            this.router.navigateByUrl('/')
        }
    }

    ngOnInit()
    {

    }

}