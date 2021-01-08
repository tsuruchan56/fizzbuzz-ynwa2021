import {main} from '../src';

it('print 1 to 100', () => {
  const spyLog = jest.spyOn(console, 'log')
  main()

  const array = spyLog.mock.calls.map((arr) => arr[0])

  // 長さが100である
  expect(array).toHaveLength(100)

  // 最小値が1である
  expect(Math.min(...array)).toBe(1)    

  // 最大値が100である
  expect(Math.max(...array)).toBe(100)
  
  // 重複がない
  expect(new Set(array).size).toBe(100)

  // 整数である
  expect(array.every((arg) => Number.isInteger(arg))).toBeTruthy()

  // 昇順ソートして比較する
  expect(array).toEqual(array.slice().sort((a, b) => a - b))


  spyLog.mockReset();
  spyLog.mockRestore();
});
