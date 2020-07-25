import fs from "fs";

const matches = fs
  .readFileSync("./content/football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

enum MatchRsult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (const match of matches) {
  if (match[1] === "Man United" && match[5] === MatchRsult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchRsult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
