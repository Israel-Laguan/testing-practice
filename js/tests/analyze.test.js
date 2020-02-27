import analyze from '../functions/analyze';

describe('analyze', () => {
  it('When you analyze an array it detects correct length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toStrictEqual(6);
  });

  test('When you analyze an array it detects correct average', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average).toStrictEqual(4);
  });

  test('When you analyze an array it detects correct length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).min).toStrictEqual(1);
  });

  test('When you analyze an array it detects correct length', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).max).toStrictEqual(8);
  });

  test('When you analyze an empty array it detects correct data in average', () => {
    expect(analyze([]).average).toBeNull();
  });

  test('When you analyze an empty array it detects correct data in min', () => {
    expect(analyze([]).min).toBeNull();
  });

  test('When you analyze an empty array it detects correct data in max', () => {
    expect(analyze([]).max).toBeNull();
  });

  test('When you analyze an empty array it detects correct data in length', () => {
    expect(analyze([]).length).toBe(0);
  });

  test('When you analyze and array you get average, min, max and length', () => {
    const solution = {
      average: 4, min: 1, max: 8, length: 6,
    };
    expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual(solution);
  });
});
