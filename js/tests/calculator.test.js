import calculator from '../functions/calculator';

describe('calculator', () => {
  it('sums up two numbers', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });
  it('substract two numbers', () => {
    expect(calculator().subtract(1, 2)).toBe(-1);
  });
  it('multiply two numbers', () => {
    expect(calculator().multiply(1, 2)).toBe(2);
  });
  it('divide two numbers', () => {
    expect(calculator().divide(4, 2)).toBe(2);
  });
});