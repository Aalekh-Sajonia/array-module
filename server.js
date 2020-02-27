module.exports = {
  sumArr: function(arr) {
    return arr.reduce((acc, val) => {
      return acc + val;
    }, 0);
  },
  avgArr: function(arr) {
    return arr.reduce((acc, val) => {
      return acc + val;
    }, 0) / (arr.length === 0 ? 1 : arr.length);
  },
  maxArr: function(arr) {
    return arr.reduce((acc, val) => {
      return Math.max(acc, val);
    });
  },
  minArr: function(arr) {
    return arr.reduce((acc, val) => {
      return Math.min(acc, val);
    });
  },
  arrUniq: function(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i]) === -1) {
        res.push(arr[i]);
      }
    }
    return res;
  },
  arrUniqSort: function(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i]) === -1) {
        res.push(arr[i]);
      }
    }
    var sort = res.sort((a, b) => {
      return a - b;
    })
    return sort;
  },
  uniqStringArr: function(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      if (res.indexOf(arr[i]) === -1) {
        res.push(arr[i]);
      }
    }
    var sort = res.sort();
    return sort;
  }
}
