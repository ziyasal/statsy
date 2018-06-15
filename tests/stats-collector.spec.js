'use strict';

var chai = require("chai");
var StatsCollector = require("./../stats-collector");

var should = chai.should();

describe("StatsCollector:", function () {
    let sut;

    before(function () {
        var sampleResponseTimes = [1, 2, 3, 4, 5];
        sut = new StatsCollector(10);

        sampleResponseTimes.forEach(item => {
            sut.pushValue(item);
        });
    });

    describe("#ctor", function () {

        it("should create instance.", function () {
            (!!sut).should.be.equal(true);
        });
    });

    describe("#getAverage", function () {

        it("should return average", () => {
            let avg = sut.getAverage();
            avg.low.should.be.equal(3);
        });
    });
    describe("#getMedian", function () {

        it("should return median", () => {
            let median = sut.getMedian();
            median.should.be.equal(3);
        });
    });
});
