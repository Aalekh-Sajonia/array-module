var expect = require('expect');

var arr = require('../server.js');

describe('Sum Array', () => {
  it('it should exists', () => {
    var arrTemp = [1];
    var arrSum = arr.sumArr(arrTemp);
    expect(arrSum).toBeTruthy();
  });
  it('it should return a number', () => {
    var arrTemp = [1, 2, 3, 4, 5];
    var arrSum = arr.sumArr(arrTemp);
    expect(typeof arrSum).toBe('number');
  });
  it('it should return the value of the Array SUM', () => {
    var arrTemp = [1, 2, 3, 4, 5];
    var arrSum = arr.sumArr(arrTemp);
    expect(arrSum).toBe(15);
  });
});

describe('Average Array', () => {
  it('it should return average value of array', () => {
    var arrTemp = [1, 2, 3, 4, 5];
    var arrAvg = arr.avgArr(arrTemp);
    expect(arrAvg).toBe(3);
  });
});

describe('Minimum Val Array', () => {
  it("it should return minimum val in the array", () => {
    var arrTemp = [1, 2, 3, 4, 5];
    var arrMin = arr.minArr(arrTemp);
    expect(arrMin).toBe(1);
  });
});

describe('Max Val Array', () => {
  it("it should return maximum val in the array", () => {
    var arrTemp = [1, 2, 3, 4, 5];
    var arrMax = arr.maxArr(arrTemp);
    expect(arrMax).toBe(5);
  });
});

describe('Uniq Array', () => {
  it("it should return uniq Array", () => {
    var arrTemp = [1, 2, 2, 4, 4];
    var uniq = arr.arrUniq(arrTemp);
    expect(uniq).toEqual([1,2,4]);
  });
});

describe('Uniq Array Sort', () => {
  it("it should return uniq Sorted Array", () => {
    var arrTemp = [1, 2, 1, 2, 3];
    var uniqSort = arr.arrUniqSort(arrTemp);
    expect(uniqSort).toEqual([1,2,3]);
  });
});

describe('Uniq String Arr', () => {
  it("it should return uniq Sorted string Array", () => {
    var arrTemp = ["asd","aaa","ccc","abc"];
    var uniqStr = arr.uniqStringArr(arrTemp);
    expect(uniqStr).toEqual(["aaa","abc","asd","ccc"]);
  });
});
