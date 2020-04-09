import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'


@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styles: []
})
export class GameComponent {

    constructor( private route: ActivatedRoute )
    {
        //TODO: If gameId is empty return to main page
        //console.log( this.route.params. );
    }

}