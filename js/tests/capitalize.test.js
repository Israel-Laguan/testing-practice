import capitalize from '../functions/capitalize';

describe('capitalize', () => {
  it('When you give an lower case string it is capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
  });
});