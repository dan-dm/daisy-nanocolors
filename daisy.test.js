import { Daisy } from './daisy.js';
import { yellow } from 'nanocolors';

describe('Test test:', ()=> {

    test('1 + 1 = 2', () => {
        expect(1 + 1).toBe(2);
    })

    test('Daisy(4) should be yellow(loves me)', () => {
        expect(Daisy(4)).toBe(yellow('loves me'));  // nanocolors doesn't :(
    })
})