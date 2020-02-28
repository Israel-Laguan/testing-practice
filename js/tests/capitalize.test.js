import capitalize from '../functions/capitalize';

describe('capitalize', () => {
  it('When you give an lower case string it is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('return same string if given already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('return null if no string given', () => {
    expect(capitalize()).toBeNull();
    expect(capitalize(42)).toBeNull();
    expect(capitalize({})).toBeNull();
  });
});