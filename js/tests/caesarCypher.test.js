import caesarCypher from '../functions/caesarCypher';

describe('caesarCypher', () => {
  it('cyphers a string given', () => {
    expect(caesarCypher(2, 'abcd')).toBe('cdef');
    expect(caesarCypher(2, 'WXYZ')).toBe('YZAB');
    expect(caesarCypher(2, 'wXyZ')).toBe('yZaB');
  });

  it('can decipher and obscured string', () => {
    expect(caesarCypher(-2, caesarCypher(2, 'abcd'))).toBe('abcd');
  });
});