var dateBucket = require('../');
var assert = require('assert');

describe('date bucket', function() {
  it('should handle perfect data', function() {
    var buckets = dateBucket(require('./fixtures/perfect.json'), 260);
    assert.deepEqual(buckets, {
      today: {
        total: 259,
        change: 0.3875968992248062
      },
      last7: {
        total: 1799,
        change: 2.8000000000000003
      },
      last30: {
        total: 7365,
        change: 13.921113689095128
      }
    });
  });

  it('should handle starting from jan 1st', function() {
    var buckets = dateBucket(require('./fixtures/startOfYear.json'), 60);
    assert.deepEqual(buckets, {
      today: {
        total: 59,
        change: 1.7241379310344827
      },
      last7: {
        total: 399,
        change: 14.000000000000002
      },
      last30: {
        total: 1365,
        change: 193.5483870967742
      }
    });
  });

  it('should handle end of leap year', function() {
    var buckets = dateBucket(require('./fixtures/endOfYear.json'), 366);
    assert.deepEqual(buckets, {
      today: {
        total: 365,
        change: 0.27472527472527475
      },
      last7: {
        total: 2541,
        change: 1.9662921348314606
      },
      last30: {
        total: 10545,
        change: 9.331259720062208
      }
    });
  });

  it('should handle new years', function() {
    var buckets = dateBucket(require('./fixtures/newYear.json'), 44);
    assert.deepEqual(buckets, {
      today: {
        total: 43,
        change: 2.380952380952381
      },
      last7: {
        total: 287,
        change: 20.588235294117645
      },
      last30: {
        total: 885,
        change: 5.861244019138756
      }
    });
  });
});
