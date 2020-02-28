import caesarCypher from '../functions/caesarCypher';

describe('caesarCypher', () => {
  it('cyphers a string given', () => {
    expect(caesarCypher(2, 'abcd')).toBe('cdef');
  });

  it('returns false when shift number is less than 0', () => {
    expect(caesarCypher(-1, 'abcde')).toBeFalsy();
  });

  it('cipher capital letters as capital letter', () => {
    expect(caesarCypher(4, 'AbCdE')).toBe('EfGhI');
  });
});