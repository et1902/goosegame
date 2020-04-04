import { BoardField } from './board-field';

export class Board {
    private fields: BoardField[]; 

    constructor(numberOfFields: number = 47) {
        this.fields = new Array(numberOfFields);
    }

    private generateNewBoard(numberOfFields: number) {
        this.fields = new Array(numberOfFields);
        return this
    }

    public resetBoard(){
        var oldSize = this.fields.length;
        this.generateNewBoard(oldSize);
        return this
    }

    public getField(index: number) {
        if(index > this.fields.length) {
            throw new Error ("Index " + index + " outside of array with length " + this.fields.length)
        }
        return this.fields.
    }

}
