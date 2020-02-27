import caesarCypher from '../functions/caesarCypher';

describe('caesarCypher', () => {
  it('cyphers a string given', () => {
    expect(caesarCypher(2, 'abcd')).toBe('cdef');
  });

  it('can decipher and obscured string', () => {
    expect(caesarCypher(-2, 'cdef')).toBe('abcd');
  });
});