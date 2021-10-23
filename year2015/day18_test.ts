import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day18.ts";

const example = `.#.#.#
...##.
#....#
..#...
#.#..#
####..`;

const data = await Deno.readTextFile("year2015/day18_data.txt");

describe("day18", () => {
  describe("part1", () => {
    it("example", () => {
      expect(part1(example, 4), 4);
    });

    it("data", () => {
      expect(part1(data, 100), 1061);
    });
  });

  describe("part2", () => {
    it("example", () => {
      expect(part2(example, 5), 17);
    });

    it("data", () => {
      expect(part2(data, 100), 1006);
    });
  });
});
