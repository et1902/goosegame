import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-gameboard-gamefield',
  templateUrl: './gamefield.component.html',
  styles: [],
})
export class GamefieldComponent implements OnInit
{
    @Input() data;
    public id;
    public description;
    public action;

    constructor()
    {

    }

    ngOnInit()
    {
      console.log('New Field:');
      console.log( this.data );
      this.id = this.data.id;
      this.description = this.data.description;
      this.action = this.data.action;
    }
}
