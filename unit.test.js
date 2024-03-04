const isPrime = require('./Prime')

describe('test prime function', () => {
    test('17 true ', () => {
      expect(isPrime(17)).toBe(true);
    })

    test('36 true ', () => {
        expect(isPrime(36)).toBe(false);
    })
    
    test('13219 true ', () => {
        expect(isPrime(13219)).toBe(true);
    })
    
    });