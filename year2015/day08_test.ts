import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day08.ts";

const data = await Deno.readTextFile("year2015/day08_data.txt");

describe("day08", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1('""'), 2);
    });

    it("example2", () => {
      expect(part1('"abc"'), 2);
    });

    it("example3", () => {
      expect(part1('"aaa\\"aaa"'), 3);
    });

    it("example4", () => {
      expect(part1('"\\x27"'), 5);
    });

    it("data", () => {
      expect(part1(data)).to.equal(1333);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2('""'), 4);
    });

    it("example2", () => {
      expect(part2('"abc"'), 4);
    });

    it("example3", () => {
      expect(part2('"aaa\\"aaa"'), 6);
    });

    it("example4", () => {
      expect(part2('"\\x27"'), 5);
    });

    it("data", () => {
      expect(part2(data)).to.equal(2046);
    });
  });
});
