import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    gameId;

    constructor( private route: ActivatedRoute )
    { }
hallo
    ngOnInit()
    {
        this.route.paramMap.subscribe(  params => { this.gameId = params.get('gameId'); } );
        
        
     }
    
}