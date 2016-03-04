'use strict';
const _ = require('lodash');
const constants = require('./constants');
const BigInteger = require('node-biginteger');

class StatsCollector {
    constructor() {
        this.total = 0;
        this._responseArray = _.times(constants.MAX_RESPONSE_TIME, _.constant(0));
    }

    pushValue(value) {
        this.total += 1;
        this._responseArray[value] += 1;
    }

    getMedian() {
        var mid = this.total / 2.0;
        var even = this.total % 2;
        var tmpSum = 0;
        for (var i = 0; i < this._responseArray.length; i++) {
            tmpSum += this._responseArray[i];
            if (tmpSum >= mid) return even === 0 ? ( i + this.__getNext(i)) / 2 : i;
        }
    }

    getAverage() {
        var sum = BigInteger.fromString('0', 10);
        this._responseArray.forEach((item, index)=> {
            var tmp = item * index;
            if (tmp !== 0)sum = sum.add(BigInteger.fromString(tmp.toString(), 10));
        });

        var div = sum.divide(BigInteger.fromString(this.total.toString(), 10));
        return div.longValue();
    }

    __getNext(index) {
        for (var i = index; i < this._responseArray.length; i++) {
            if (this._responseArray[i] !== 0) return i;
        }
    }
}

module.exports = StatsCollector;