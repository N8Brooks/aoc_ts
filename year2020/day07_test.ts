import { expect } from "../test/setup.ts";
import { part1, part2 } from "./day07.ts";

const example1 =
  `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const example2 = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`;

const data = await Deno.readTextFile("year2020/day07_data.txt");

describe("day07", () => {
  describe("part1", () => {
    it("example1", () => {
      expect(part1(example1)).to.equal(4);
    });

    it("example2", () => {
      expect(part1(example2)).to.equal(0);
    });

    it("data", () => {
      expect(part1(data)).to.equal(205);
    });
  });

  describe("part2", () => {
    it("example1", () => {
      expect(part2(example1)).to.equal(32);
    });

    it("example2", () => {
      expect(part2(example2)).to.equal(126);
    });

    it("data", () => {
      expect(part2(data)).to.equal(80902);
    });
  });
});
