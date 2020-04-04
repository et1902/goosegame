export class BoardField {
    private position: number = -1;
    
    constructor(position: number) {
        this.position = position
    }

    public getPosition() {
        return this.position;
    }
}
