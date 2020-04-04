import { Player } from '../game/player';

export class PlayerBuilder {
    private nextId: number;

    constructor() {
        this.nextId = 1
    }

    /**
     * Creates a new Player with an unique ID (in the order of creation)
     * @param name Optional
     */
    public newPlayer(name?: string){
        var newGuy: Player = new Player(name, this.nextId);
        this.nextId += 1
        return newGuy
    }
}
