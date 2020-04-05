import { Board } from './board';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board(1)).toBeTruthy();
  });

  it('should create correct size board', () => {
    expect(new Board(42).getBoardSize()).toBe(42);
  });

});
