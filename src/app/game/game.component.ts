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
    players = [ {id: 1, name: 'Elias', points: 10},
                {id: 2, name: 'Josh', points: 20} 
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