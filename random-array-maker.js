'use strict';

const _ = require('lodash');

function makeRandomArray(start, max, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(_.random(start, max))
    }
    return arr;
}

module.exports = makeRandomArray;