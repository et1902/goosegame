import { PlayerBuilder } from './player-builder';

describe('PlayerBuilder', () => {
  it('should create an instance', () => {
    expect(new PlayerBuilder()).toBeTruthy();
  });
  
  it('correct next id', () => {
    var builder: PlayerBuilder = new PlayerBuilder()
    expect(builder.newPlayer("depp").getPlayerId()).toBe(1);
    expect(builder.newPlayer("depp").getPlayerId()).toBe(2);
    expect(builder.newPlayer("depp").getPlayerId()).toBe(3);
  });

});
