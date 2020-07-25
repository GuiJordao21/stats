import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("./content/football.csv");
reader.read();

enum MatchRsult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchRsult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchRsult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
