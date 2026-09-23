const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const scenes = [
  'TitleCardIntro',
  'PortfolioOne',
  'PortfolioTwo',
  'PortfolioThree',
  'Disclaimer',
  'ChapterCardCore',
  'PortfolioFour',
  'PortfolioFive',
  'PortfolioSix',
  'PortfolioSeven',
  'PortfolioEight',
  'PortfolioNine',
  'ChapterCardComplementary',
  'PortfolioTen',
  'PortfolioEleven',
  'PortfolioTwelve',
  'PortfolioThirteen',
  'PortfolioFourteen',
  'PortfolioFifteen',
  'PortfolioSixteen',
  'ChapterCardDiversifier',
  'PortfolioSeventeen',
  'PortfolioEighteen',
  'PortfolioNineteen',
  'PortfolioTwenty',
  'PortfolioTwentyOne',
  'PortfolioTwentyTwo',
  'PortfolioTwentyThree',
  'PortfolioTwentyFour',
  'PortfolioTwentyFive',
  'PortfolioTwentySix',
  'ChapterCardBlueprint',
  'PortfolioTwentySeven',
  'PortfolioTwentyEight',
];

if (!fs.existsSync('out')) {
  fs.mkdirSync('out', { recursive: true });
}

console.log(`Starting render of ${scenes.length} portfolio scenes with NVENC hardware acceleration and 20M bitrate...\n`);

const startTimeTotal = Date.now();

for (let i = 0; i < scenes.length; i++) {
  const id = scenes[i];
  const outFile = `out/${id}.mp4`;
  console.log(`[${i + 1}/${scenes.length}] Rendering ${id} -> ${outFile}...`);
  const t0 = Date.now();

  try {
    const cmd = `npx remotion render build "${id}" "${outFile}" --hardware-acceleration=if-possible --video-bitrate=20M`;
    execSync(cmd, { stdio: 'inherit' });
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    const sizeMB = (fs.statSync(outFile).size / (1024 * 1024)).toFixed(2);
    console.log(`✓ Completed ${id} in ${elapsed}s (${sizeMB} MB)\n`);
  } catch (err) {
    console.error(`✗ Error rendering ${id}:`, err.message);
  }
}

const totalMin = ((Date.now() - startTimeTotal) / 60000).toFixed(1);
console.log(`========================================`);
console.log(`All ${scenes.length} scenes rendered in ${totalMin} minutes.`);
console.log(`========================================`);
