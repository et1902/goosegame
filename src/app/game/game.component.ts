import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GameService} from '../game.service';
import {Player} from './player'
import { PlayerBuilder } from '../helper/player-builder';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    gameId;
    GameService;
    activePlayer = '1';
    playerbuilder: PlayerBuilder = new PlayerBuilder();
    testguy1: Player = this.playerbuilder.newPlayer("Elias"); 
    testguy2: Player = this.playerbuilder.newPlayer("Torben"); 
    testguy3: Player = this.playerbuilder.newPlayer("Josh"); 
    players = [ {id: this.testguy1.getPlayerId(), name: this.testguy1.getPlayerName(), },
                {id: this.testguy2.getPlayerId(), name: this.testguy2.getPlayerName(), },
                {id: this.testguy3.getPlayerId(), name: this.testguy3.getPlayerName(), }
            ];

    constructor( private route: ActivatedRoute )

    { }
    
    ngOnInit()
    {
        this.route.paramMap.subscribe(  params => { this.gameId = params.get('gameId'); } );
        console.log( this.gameId );
        this.GameService = new GameService();
    }

}