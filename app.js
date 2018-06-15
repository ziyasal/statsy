'use strict';

const _ = require('lodash');
const StatsCollector = require('./stats-collector');

const MAX_RESPONSE_TIME_IN_MS = 19000;
const MIN_RESPONSE_TIME_IN_MS = 15;
const SEED_DATA_SIZE = 100000;

function main() {
    let statsCalculator = new StatsCollector(MAX_RESPONSE_TIME_IN_MS);
    
    for (var i = 0; i < SEED_DATA_SIZE; i++) {
       statsCalculator.pushValue(_.random(MIN_RESPONSE_TIME_IN_MS, MAX_RESPONSE_TIME_IN_MS))
    }

    let median = statsCalculator.getMedian();
    console.log('MEDIAN %s', median);

    let avg = statsCalculator.getAverage();
    console.log('AVG %s', avg);
}

main();
