import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GameService} from '../game.service';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    gameId;
    GameService;
    activePlayer = '1';
    players = [ {id: 1, name: 'Elias', },
                {id: 2, name: 'Josh', } 
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