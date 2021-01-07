import {main} from '../src';

const spyLog = jest.spyOn(console, 'log')
const array = spyLog.mock.calls

main()

it('print 1 to 100', () => {

  expect(array).toHaveLength(100)
  expect(array[0][0]).toBe(1)

})