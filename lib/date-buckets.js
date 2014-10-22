var change = function(v1, v2) {
  return (v2 - v1) / v1 * 100;
};

var dateBucket = function(data, startDay) {
  if(typeof startDay === 'undefined') {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    startDay = Math.floor(diff / oneDay);
  }

  var daysInYear = 365;
  var year = new Date().getFullYear();
  if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return 366;
  }

  var results = {
    today: {},
    last7: {},
    last30: {}
  };

  var temp = {
    today: 0,
    yesterday: 0,
    last7: 0,
    last14: 0,
    last30: 0,
    last60: 0
  };

  for(var i = 0, newDay; i < 60; i++) {
    newDay = startDay - i;

    if(newDay < 1) {
      newDay = daysInYear - newDay;
    }

    var value = (typeof data[newDay] !== 'undefined') ? data[newDay] : 0;

    if(i < 1) {
      results.today = {
        total: value
      };
    }

    if(i < 2) {
      temp.today = value;
    }

    if(i > 1 && i < 3) {
      temp.yesterday = value;
      results.yesterday = {
        total: temp.today,
        change: change(temp.yesterday, temp.today)
      };
    }

    if(i < 7) {
      temp.last7 += value;
    }

    if(i > 6 && i < 14) {
      temp.last14 += value;
      results.last7 = {
        total: temp.last7,
        change: change(temp.last14, temp.last7)
      };
    }

    if(i < 30) {
      temp.last30 += value;
    }

    if(i > 29) {
      temp.last60 += value;
      results.last30 = {
        total: temp.last30,
        change: change(temp.last60, temp.last30)
      };
    }
  }

  return results;
};

module.exports = dateBucket;
