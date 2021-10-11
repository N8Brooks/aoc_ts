export function part1(data: string): number {
  return Math.max(...data.split("\n").map(getSeatId));
}

export function part2(data: string): number {
  const seatIds = data
    .split("\n")
    .map(getSeatId)
    .sort((a, b) => a - b);
  let previousSeatId = seatIds[0] - 1;
  for (const currentSeatId of seatIds) {
    if (previousSeatId + 1 !== currentSeatId) {
      return previousSeatId + 1;
    } else {
      previousSeatId = currentSeatId;
    }
  }
  throw Error("no missing seat was found.");
}

function getSeatId(seat: string): number {
  return parseInt(seat.replace(/./g, binarySpacePartition), 2);
}

function binarySpacePartition(char: string): string {
  return char === "B" || char === "R" ? "1" : "0";
}
