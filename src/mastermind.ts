// https://codingdojo.org/kata/Mastermind/
// Kata solution by Brandon Corfman

export function evaluate(secret: Array<string>, guess: Array<string>): Array<number> {
  if (secret.length != guess.length)
    throw new Error("secret and guess are different lengths");

  let wellPlacedColors = 0;
  let misplacedColors = 0;
  let correctColors = new Set<string>();
  let secretColors = new Set<string>();
  for (let i in secret) {
    let color = secret[i];
    if (guess[i] == color) {
      wellPlacedColors++;
      correctColors.add(color);
    }
    if (secretColors.has(color))
      throw new Error("repeated color in secret list");
    else
      secretColors.add(color);
  }
  for (let color of guess) {
    if (!correctColors.has(color) && secretColors.has(color))
      misplacedColors++;
  }
  return [wellPlacedColors, misplacedColors];
}
