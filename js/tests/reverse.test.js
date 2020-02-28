import reverse from '../functions/reverse';

describe('reverse', () => {
  it('when a string is given, the letters are reversed', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('returns null if no parameter given', () => {
    expect(reverse()).toBeNull();
  });

  it('returns empty string if no string given', () => {
    expect(reverse(42)).toBeNull();
    expect(reverse([1, 2])).toBeNull();
    expect(reverse({ a: 1, b: 'l' })).toBeNull();
  });
});