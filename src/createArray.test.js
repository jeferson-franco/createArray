const solution = require('./createArray.js');

test('test 1', () => {
    expect(solution(4)).toEqual([1, 1, 1, 1]);
});

test('test 2', () => {
    expect(solution(2)).toEqual([1, 1]);
});

test('test 3', () => {
    expect(solution(1)).toEqual([1]);
});

test('test 4', () => {
    expect(solution(5)).toEqual([1, 1, 1, 1, 1]);
});

test('test 5', () => {
    expect(solution(49)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
