import "https://deno.land/x/generator_helpers@0.0.0/monkey_patch.ts";

const pattern =
  /[a-z]+: capacity (-?\d+), durability (-?\d+), flavor (-?\d+), texture (-?\d+), calories (\d+)/g;

export function part1(data: string): number {
  const ingredients = [...data.matchAll(pattern)]
    .map((line) => line.slice(1, -1).map(Number));

  return allocation(ingredients.length, 100)
    .map((ratios) => getScore(ingredients, ratios))
    .reduce((a, b) => a > b ? a : b, -Infinity);
}

export function part2(data: string): number {
  const ingredients = [...data.matchAll(pattern)]
    .map((line) => line.slice(1).map(Number));

  return allocation(ingredients.length, 100)
    .filter((ratios) => getCalories(ingredients, ratios) === 500)
    .map((ratios) => getScore(ingredients, ratios))
    .reduce((a, b) => a > b ? a : b, -Infinity);
}

export function* allocation(r: number, n: number): Generator<number[]> {
  if (r === 0) {
    if (n === 0) {
      yield [];
    }
    return;
  }
  const indices = Array(r - 1).fill(0);
  indices[r - 1] = n;
  while (true) {
    loop: {
      yield indices;
      for (let i = r - 2; i >= 0; i--) {
        if (indices[i] === indices[r - 1]) {
          continue;
        }
        const j = i + 1;
        while (indices[j] > 0) {
          indices[j]--;
          indices[i]++;
          yield indices;
        }
        if (i === 0) {
          return;
        }
        indices[i - 1]++;
        indices[r - 1]--;
        for (let j = i; j < r - 1; j++) {
          indices[r - 1] += indices[j];
          indices[j] = 0;
        }
        break loop;
      }
      return;
    }
  }
}

function getScore(ingredients: number[][], ratios: number[]): number {
  let ratioScore = 1;
  for (let propertyIndex = 0; propertyIndex < 4; propertyIndex++) {
    let property = 0;
    for (
      let ingredientIndex = 0;
      ingredientIndex < ingredients.length;
      ingredientIndex++
    ) {
      const ingredientProperty = ingredients[ingredientIndex][propertyIndex];
      const ingredientRatio = ratios[ingredientIndex];
      property += ingredientProperty * ingredientRatio;
    }
    if (property < 0) {
      return -Infinity;
    }
    ratioScore *= property;
  }
  return ratioScore;
}

function getCalories(ingredients: number[][], ratios: number[]): number {
  let totalCalories = 0;
  for (
    let ingredientIndex = 0;
    ingredientIndex < ingredients.length;
    ingredientIndex++
  ) {
    const ingredientCalories = ingredients[ingredientIndex][4];
    const ingredientRatio = ratios[ingredientIndex];
    totalCalories += ingredientCalories * ingredientRatio;
  }
  return totalCalories;
}
