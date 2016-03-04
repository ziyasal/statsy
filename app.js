'use strict';

const _ = require('lodash');
const StatsCollector = require('./stats-collector');
const constants = require('./constants');
const makeRandomArray = require('./random-array-maker');

function main() {
    let statsCalculator = new StatsCollector();
    var sampleResponseTimes = makeRandomArray(15, constants.MAX_RESPONSE_TIME, 100000);

    sampleResponseTimes.forEach(item => {
        statsCalculator.pushValue(item);
    });

    let median = statsCalculator.getMedian();
    console.log('MEDIAN %s', median);

    let avg = statsCalculator.getAverage();
    console.log('AVG %s', avg);
}

main();