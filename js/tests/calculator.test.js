import calculator from '../functions/calculator';

describe('calculator', () => {
  it('sums up two numbers', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });
});