import analyze from '../functions/analyze';

describe('analyze', () => {
  it('When you analyze an array it detects correct information', () => {
    expect(analyze([1, 8, 3, 4, 2, 6]).average).toStrictEqual(4);
    expect(analyze([1, 8, 3, 4, 2, 6]).min).toStrictEqual(1);
    expect(analyze([1, 8, 3, 4, 2, 6]).max).toStrictEqual(8);
    expect(analyze([1, 8, 3, 4, 2, 6]).length).toStrictEqual(6);
  });

  test('When you analyze an empty array you get null data', () => {
    expect(analyze([]).average).toBeNull();
    expect(analyze([]).min).toBeNull();
    expect(analyze([]).max).toBeNull();
    expect(analyze([]).length).toBe(0);
  });

  test('When you analyze a not number array you get null data', () => {
    const solution = {
      average: null, min: null, max: null, length: 0,
    };
    expect(analyze(['1', 2])).toStrictEqual(solution);
    expect(analyze([null, undefined])).toStrictEqual(solution);
    expect(analyze([])).toStrictEqual(solution);
    expect(analyze({})).toStrictEqual(solution);
    expect(analyze({ a: 1, b: 'l' })).toStrictEqual(solution);
    expect(analyze('lknbhlk')).toStrictEqual(solution);
    expect(analyze(42)).toStrictEqual(solution);
  });
});
