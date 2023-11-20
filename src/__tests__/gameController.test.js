import GameController from '../js/gameController';

test.each([
  [4, 12, true],
  [5, 17, true]
])// eslint-disable-next-line
('testing function createPosition', (boardSize, oldPosition, expected) => {
  const gameController = new GameController();
  let result = gameController.createPosition(0, 3, boardSize, oldPosition);
  
  expect(result !== oldPosition && result < boardSize ** 2).toEqual(expected);
});