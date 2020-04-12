import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-gameboard-gamefield',
  templateUrl: './gamefield.component.html',
  styles: [],
})
export class GamefieldComponent implements OnInit
{
    @Input() field;
    
    private order = {
      field0: 50,
      field1: 51,
      field2: 52,
      field3: 53,
      field4: 54,
      field5: 55,
      field6: 45,
      field7: 35,
      field8: 25,
      field9: 15,
      field10: 5,
      field11: 4,
      field12: 3,
      field13: 2,
      field14: 1,
      field15: 0,
      field16: 10,
      field17: 20,
      field18: 30,
      field19: 40,
      field20: 41,
      field21: 42,
      field22: 43,
      field23: 44,
      field24: 34,
      field25: 24,
      field26: 14,
      field27: 13,
      field28: 12,
      field29: 11,
      field30: 21,
      field31: 31,
      field32: 32,
      field33: 33,
      field34: 23,
      field35: 22,
    }

    constructor()
    {
      
    }

    ngOnInit()
    {
      const element = document.getElementById( "field" + this.field.position );
      element.style.order = this.order[ "field" + this.field.position ];    
    }
}
