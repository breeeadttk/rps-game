// import { renderHook, act } from '@testing-library/react-hooks';
// import useGameLogic, { GameLogic, Score, Rules, Weapon } from './useGameLogic';

// const mockWeapons: Weapon[] = ['rock', 'paper', 'scissors'];
// const mockRules: Rules = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];

// describe('useGameLogic', () => {
//   afterEach(() => {
//     localStorage.clear();
//   });

//   it('returns initial game state', () => {
//     const { result } = renderHook(() => useGameLogic(mockWeapons, mockRules));

//     const initialGameState: GameLogic = {
//       playerWeapon: '',
//       computerWeapon: '',
//       result: '',
//       score: {
//         wins: 0,
//         draws: 0,
//         loses: 0,
//         totalPlays: 0,
//       },
//       isGameInProgress: false,
//       isWeaponChosen: false,
//       chooseWeapon: expect.any(Function),
//       startNewGame: expect.any(Function),
//     };

//     expect(result.current).toEqual(initialGameState);
//   });

//   it('allows the player to choose a weapon and starts the game', () => {
//     const { result } = renderHook(() => useGameLogic(mockWeapons, mockRules));

//     act(() => {
//       result.current.chooseWeapon('rock');
//     });

//     expect(result.current.playerWeapon).toBe('rock');
//     expect(result.current.isWeaponChosen).toBe(true);
//     expect(result.current.isGameInProgress).toBe(true);
//   });

//   it('calculates the correct result and updates the score', () => {
//     const { result } = renderHook(() => useGameLogic(mockWeapons, mockRules));

//     act(() => {
//       result.current.chooseWeapon('rock');
//     });

//     act(() => {
//       jest.advanceTimersByTime(3000);
//     });

//     const updatedScore: Score = {
//       wins: 0,
//       draws: 1,
//       loses: 0,
//       totalPlays: 1,
//     };

//     expect(result.current.result).toBe('DRAW');
//     expect(result.current.score).toEqual(updatedScore);
//   });

//   it('starts a new game with updated game state', () => {
//     const { result } = renderHook(() => useGameLogic(mockWeapons, mockRules));

//     act(() => {
//       result.current.chooseWeapon('rock');
//     });

//     act(() => {
//       jest.advanceTimersByTime(3000);
//     });

//     act(() => {
//       result.current.startNewGame();
//     });

//     const initialGameState: GameLogic = {
//       playerWeapon: '',
//       computerWeapon: '',
//       result: '',
//       score: {
//         wins: 0,
//         draws: 0,
//         loses: 0,
//         totalPlays: 1,
//       },
//       isGameInProgress: true,
//       isWeaponChosen: false,
//       chooseWeapon: expect.any(Function),
//       startNewGame: expect.any(Function),
//     };

//     expect(result.current).toEqual(initialGameState);
//   });

//   // Additional test cases can be added to cover other scenarios

//   // ...
// });
