import reverse from '../functions/reverse';

describe('reverse', () => {
  it('when a string is given, the letters are reversed', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('returns empty string if no parameter given', () => {
    expect(reverse()).toBe('');
  });

  it('returns empty string if no string given', () => {
    expect(reverse(4)).toBe('');
  });
});