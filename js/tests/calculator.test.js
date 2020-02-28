import calculator from '../functions/calculator';

describe('calculator', () => {
  it('sums up two numbers', () => {
    expect(calculator().add(1, 2)).toBe(3);
  });

  it('return given number if one addend passed', () => {
    expect(calculator().add(5)).toBe(5);
  });

  it('When given incorrect data return 0', () => {
    expect(calculator().add()).toBeNull();
    expect(calculator().add('1')).toBeNull();
  });

  it('substract two numbers', () => {
    expect(calculator().subtract(1, 2)).toBe(-1);
  });

  it('return given number if only minuend passed', () => {
    expect(calculator().subtract(5)).toBe(5);
  });

  it('When given incorrect data return 0', () => {
    expect(calculator().subtract()).toBeNull();
    expect(calculator().subtract('2', 1)).toBeNull();
  });

  it('multiply two numbers', () => {
    expect(calculator().multiply(1, 2)).toBe(2);
  });

  it('return given number if only one factor passed', () => {
    expect(calculator().multiply(5)).toBe(5);
  });

  it('When given incorrect data return 0', () => {
    expect(calculator().multiply()).toBeNull();
    expect(calculator().multiply('2', 1)).toBeNull();
  });

  it('divide two numbers', () => {
    expect(calculator().divide(4, 2)).toBe(2);
  });

  it('return given number if only one factor passed', () => {
    expect(calculator().divide(5)).toBe(5);
  });

  it('return null if divisor is 0', () => {
    expect(calculator().divide(5, 0)).toBeNull();
  });

  it('When given incorrect data return 0', () => {
    expect(calculator().divide()).toBeNull();
    expect(calculator().divide('2', 1)).toBeNull();
  });
});