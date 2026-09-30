import {formatAs12HourClock} from "./timeConverter.js";

import assert from "node:assert"

import test from "node:test";

// First test

// test("correctly convert time after 12:00", function() {
//      assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
// });

// Second text

// test("can correctly convert morning time", function() {
//     assert.equal(formatAs12HourClock("08:00"), "08:00 am");
// });

// Third test

// test("can correctly convert midnight", function(){
//     assert.equal(formatAs12HourClock("00:00"),"12:00 am");
// });

// Test using arrow function

test("correctly convert time after 12:00", () => assert.equal(formatAs12HourClock("23:00"), "11:00 pm"));

test("can correctly convert morning time", () => assert.equal(formatAs12HourClock("08:00"),"08:00 am"));

test("can correctly convert midnight", () => assert.equal(formatAs12HourClock("00:00"),"12:00 am"));