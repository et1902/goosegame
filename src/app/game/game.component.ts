import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent {
    players = [ {name: 'Elias'},
                {name: 'Josh'},
                {name: 'Clemens'}
            ];

    constructor( private route: ActivatedRoute )
    {
        //this.gameservice = new gameservice();
        
        //this.players = this.gameservice.getplayers();


        //TODO: If gameId is empty return to main page
        //console.log( this.route.params. );
        console.log( this.players );
    }

}