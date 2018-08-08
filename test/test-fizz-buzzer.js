const expect = require("chai").expect;

const expect = require("../fizzBuzzer");

describe("fizzBuzzer", function() {
    it("If the number is divisible by 15, should return the string \"fizz buzz\"", function() {
        const normalFizzBuzzCases = [
            {a: 15, expected: "fizz buzz"},
            {a: 30, expected: "fizz buzz"},
            {a: 45, expected: "fizz buzz"}
        ];

        normalFizzBuzzCases.forEach(function(item) {
            const input = fizzBuzzer(item.a);
            expect(input).to.equal(item.expected);
        });
    });

    it("If the number is divisible by 5, should return the string \"buzz\"", function() {
        const normalBuzzCases = [
            {a: 5, expected: "buzz"},
            {a: 10, expected: "buzz"},
            {a: 20, expected: "buzz"}
        ];

        normalBuzzCases.forEach(function(item) {
            const input = fizzBuzzer(item.a);
            expect(input).to.equal(item.expected);
        });
    });

    it("If the number is divisible by 3, should return the string \"fizz\"", function() {
        const normalFizzCases = [
            {a: 3, expected: "fizz"},
            {a: 6, expected: "fizz"},
            {a: 9, expected: "fizz"}
        ];

        normalFizzCases.forEach(function(item) {
            const input = fizzBuzzer(item.a);
            expect(input).to.equal(item.expected);
        });
    });

    it("If the number is any number other than 3, 5, or 15, should return that number", function() {
        const normalNumCases = [
            {a: 1, expected: 1},
            {a: 2, expected: 2},
            {a: 4, expected: 4}
        ];

        normalNumCases.forEach(function(item) {
            const input = fizzBuzzer(item.a);
            expect(input).to.equal(item.expected);
        });
    });

    it("Should throw an error if the input is anything other than a number", function() {
        const edgeCases = ["3", "abc", true, [3,4,5], {key: "number", value: "1"}, false];

        edgeCases.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
        });
    });
});