var dateBucket = require('../');
var assert = require('assert');

describe('date bucket', function() {
  it('should handle perfect data', function() {
    var buckets = dateBucket(require('./fixtures/perfect.json'), 260);
    assert.deepEqual(buckets, {
      today: {
        total: 260,
        change: 0.3861003861003861
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
        total: 60,
        change: 1.694915254237288
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
        total: 366,
        change: 0.273972602739726
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
        total: 44,
        change: 2.3255813953488373
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
