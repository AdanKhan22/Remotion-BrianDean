import "./index.css";
import { Composition } from "remotion";
import Eight from "./Three BEST Short-Term Bond ETF/eight";
import Eighteen from "./Three BEST Short-Term Bond ETF/eighteen";
import Eleven from "./Three BEST Short-Term Bond ETF/eleven";
import Fifteen from "./Three BEST Short-Term Bond ETF/fifteen";
import Five from "./Three BEST Short-Term Bond ETF/five";
import Four from "./Three BEST Short-Term Bond ETF/four";
import Fourteen from "./Three BEST Short-Term Bond ETF/fourteen";
import Nine from "./Three BEST Short-Term Bond ETF/nine";
import Nineteen from "./Three BEST Short-Term Bond ETF/nineteen";
import One from "./Three BEST Short-Term Bond ETF/one";
import Seven from "./Three BEST Short-Term Bond ETF/seven";
import Seventeen from "./Three BEST Short-Term Bond ETF/seventeen";
import Six from "./Three BEST Short-Term Bond ETF/six";
import Sixteen from "./Three BEST Short-Term Bond ETF/sixteen";
import Ten from "./Three BEST Short-Term Bond ETF/ten";
import Thirteen from "./Three BEST Short-Term Bond ETF/thirteen";
import Three from "./Three BEST Short-Term Bond ETF/three";
import Twelve from "./Three BEST Short-Term Bond ETF/twelve";
import Twenty from "./Three BEST Short-Term Bond ETF/twenty";
import Two from "./Three BEST Short-Term Bond ETF/two";
import PortfolioOne from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/one";
import PortfolioTwo from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/two";
import PortfolioThree from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/three";
import PortfolioFour from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/four";
import PortfolioFive from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/five";
import PortfolioSix from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/six";
import PortfolioSeven from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/seven";
import PortfolioEight from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/eight";
import PortfolioNine from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/nine";
import PortfolioTen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/ten";
import PortfolioEleven from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/eleven";
import PortfolioTwelve from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twelve";
import PortfolioThirteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/thirteen";
import PortfolioFourteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/fourteen";
import PortfolioFifteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/fifteen";
import PortfolioSixteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/sixteen";
import PortfolioSeventeen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/seventeen";
import PortfolioEighteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/eighteen";
import PortfolioNineteen from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/nineteen";
import PortfolioTwenty from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twenty";
import PortfolioTwentyOne from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyOne";
import PortfolioTwentyTwo from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyTwo";
import PortfolioTwentyThree from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyThree";
import PortfolioTwentyFour from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyFour";
import PortfolioTwentyFive from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyFive";
import PortfolioTwentySix from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentySix";
import PortfolioTwentySeven from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentySeven";
import PortfolioTwentyEight from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/twentyEight";
import Disclaimer from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/disclaimer";
import {
  TitleCardIntro,
  ChapterCardCore,
  ChapterCardComplementary,
  ChapterCardDiversifier,
  ChapterCardBlueprint,
} from "./The BEST 3 ETF Portfolio for 2026 (to Grow Wealth and Dodge the AI Bubble)/chapterCards";

const compositions: Array<{ id: string; component: React.FC; durationInFrames?: number }> = [
  { id: "One", component: One },
  { id: "Two", component: Two },
  { id: "Three", component: Three },
  { id: "Four", component: Four },
  { id: "Five", component: Five },
  { id: "Six", component: Six },
  { id: "Seven", component: Seven },
  { id: "Eight", component: Eight },
  { id: "Nine", component: Nine },
  { id: "Ten", component: Ten },
  { id: "Eleven", component: Eleven },
  { id: "Twelve", component: Twelve },
  { id: "Thirteen", component: Thirteen },
  { id: "Fourteen", component: Fourteen },
  { id: "Fifteen", component: Fifteen },
  { id: "Sixteen", component: Sixteen },
  { id: "Seventeen", component: Seventeen },
  { id: "Eighteen", component: Eighteen },
  { id: "Nineteen", component: Nineteen },
  { id: "Twenty", component: Twenty },
  { id: "PortfolioOne", component: PortfolioOne, durationInFrames: 1050 },
  { id: "PortfolioTwo", component: PortfolioTwo, durationInFrames: 750 },
  { id: "PortfolioThree", component: PortfolioThree, durationInFrames: 690 },
  { id: "PortfolioFour", component: PortfolioFour, durationInFrames: 1050 },
  { id: "PortfolioFive", component: PortfolioFive, durationInFrames: 900 },
  { id: "PortfolioSix", component: PortfolioSix, durationInFrames: 1200 },
  { id: "PortfolioSeven", component: PortfolioSeven, durationInFrames: 1200 },
  { id: "PortfolioEight", component: PortfolioEight, durationInFrames: 1140 },
  { id: "PortfolioNine", component: PortfolioNine, durationInFrames: 1050 },
  { id: "PortfolioTen", component: PortfolioTen, durationInFrames: 1050 },
  { id: "PortfolioEleven", component: PortfolioEleven, durationInFrames: 960 },
  { id: "PortfolioTwelve", component: PortfolioTwelve, durationInFrames: 840 },
  { id: "PortfolioThirteen", component: PortfolioThirteen, durationInFrames: 900 },
  { id: "PortfolioFourteen", component: PortfolioFourteen, durationInFrames: 960 },
  { id: "PortfolioFifteen", component: PortfolioFifteen, durationInFrames: 1050 },
  { id: "PortfolioSixteen", component: PortfolioSixteen, durationInFrames: 840 },
  { id: "PortfolioSeventeen", component: PortfolioSeventeen, durationInFrames: 960 },
  { id: "PortfolioEighteen", component: PortfolioEighteen, durationInFrames: 1050 },
  { id: "PortfolioNineteen", component: PortfolioNineteen, durationInFrames: 750 },
  { id: "PortfolioTwenty", component: PortfolioTwenty, durationInFrames: 690 },
  { id: "PortfolioTwentyOne", component: PortfolioTwentyOne, durationInFrames: 1140 },
  { id: "PortfolioTwentyTwo", component: PortfolioTwentyTwo, durationInFrames: 960 },
  { id: "PortfolioTwentyThree", component: PortfolioTwentyThree, durationInFrames: 900 },
  { id: "PortfolioTwentyFour", component: PortfolioTwentyFour, durationInFrames: 900 },
  { id: "PortfolioTwentyFive", component: PortfolioTwentyFive, durationInFrames: 900 },
  { id: "PortfolioTwentySix", component: PortfolioTwentySix, durationInFrames: 840 },
  { id: "PortfolioTwentySeven", component: PortfolioTwentySeven, durationInFrames: 1200 },
  { id: "PortfolioTwentyEight", component: PortfolioTwentyEight, durationInFrames: 450 },
  { id: "Disclaimer", component: Disclaimer, durationInFrames: 750 },
  { id: "TitleCardIntro", component: TitleCardIntro, durationInFrames: 180 },
  { id: "ChapterCardCore", component: ChapterCardCore, durationInFrames: 150 },
  { id: "ChapterCardComplementary", component: ChapterCardComplementary, durationInFrames: 150 },
  { id: "ChapterCardDiversifier", component: ChapterCardDiversifier, durationInFrames: 150 },
  { id: "ChapterCardBlueprint", component: ChapterCardBlueprint, durationInFrames: 150 },
];

const durationInFrames = 3000;
const fps = 30;
const width = 3840;
const height = 2160;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {compositions.map(({ id, component, durationInFrames: customDuration }) => (
        <Composition
          key={id}
          id={id}
          component={component}
          durationInFrames={customDuration || durationInFrames}
          fps={fps}
          width={width}
          height={height}
        />
      ))}
    </>
  );
};
