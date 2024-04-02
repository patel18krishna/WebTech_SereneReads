import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Fiction from "./pages/Fiction";
import CivilWar from "./pages/CivilWar";
import LogIn from "./pages/LogIn";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Biography from "./pages/Biography";
import FamousAuthors from "./pages/FamousAuthors";
import TopPicks from "./pages/TopPicks";
import Help from "./pages/Help";
import BookItStartsWithUsItEnds from "./pages/BookItStartsWithUsItEnds";
import BookAfterLives from "./pages/BookAfterLives";
import BookHarryPotter from "./pages/BookHarryPotter";
import BookTheManWhoCollectedPoe from "./pages/BookTheManWhoCollectedPoe";
import BookRichDadPoorDad from "./pages/BookRichDadPoorDad";
import BookScoutingForBoys from "./pages/BookScoutingForBoys";
import BookTheFrogPrince from "./pages/BookTheFrogPrince";
import BookTheGrapesOfWrath from "./pages/BookTheGrapesOfWrath";
import BookCivilWar from "./pages/BookCivilWar";
import BookNaruto from "./pages/BookNaruto";
import BookJujutsuKaisen from "./pages/BookJujutsuKaisen";
import TheOtherName from "./pages/TheOtherName";
import AfterLives from "./pages/AfterLives";
import TheGrapesOfWrath from "./pages/TheGrapesOfWrath";
import AHeartThatWorks from "./pages/AHeartThatWorks";
import JujutsuKaisen from "./pages/JujutsuKaisen";
import ItStartsWithUs from "./pages/ItStartsWithUs";
import Poetry from "./pages/Poetry";
import NightStories from "./pages/NightStories";
import MasashiKishimoto from "./pages/MasashiKishimoto";
import StanLee from "./pages/StanLee";
// import SignIn from "./pages/SignIn";
import Genres from "./pages/Genres";
import AbdulrazakGurnah from "./pages/AbdulrazakGurnah";
import JonFosse from "./pages/JonFosse";
import JkRawling from "./pages/JkRawling";
import SelfHelp from "./pages/SelfHelp";
import HistoricalFiction from "./pages/HistoricalFiction";
import BookTheElvesAndTheShoesM from "./pages/BookTheElvesAndTheShoesM";
import BookTheOtherName from "./pages/BookTheOtherName";
import BookTheGodOfSmallThings from "./pages/BookTheGodOfSmallThings";
import BookAHeartThatWorks from "./pages/BookAHeartThatWorks";
import TheGodOfSmallThings from "./components/TheGodOfSmallThings";
import Satire from "./pages/Satire";
import Manga from "./pages/Manga";
import Horror from "./pages/Horror";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/fiction":
        title = "";
        metaDescription = "";
        break;
      case "/civil-war":
        title = "";
        metaDescription = "";
        break;
      case "/log-in":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/biography":
        title = "";
        metaDescription = "";
        break;
      case "/famous-authors":
        title = "";
        metaDescription = "";
        break;
      case "/top-picks":
        title = "";
        metaDescription = "";
        break;
      case "/help":
        title = "";
        metaDescription = "";
        break;
      case "/book-it-starts-with-us-it-ends-with-us":
        title = "";
        metaDescription = "";
        break;
      case "/book-after-lives":
        title = "";
        metaDescription = "";
        break;
      case "/book-harry-potter":
        title = "";
        metaDescription = "";
        break;
      case "/book-the-man-who-collected-poe":
        title = "";
        metaDescription = "";
        break;
      case "/book-rich-dad-poor-dad":
        title = "";
        metaDescription = "";
        break;
      case "/book-scouting-for-boys":
        title = "";
        metaDescription = "";
        break;
      case "/book-the-frog-prince":
        title = "";
        metaDescription = "";
        break;
      case "/book-the-grapes-of-wrath":
        title = "";
        metaDescription = "";
        break;
      case "/book-civil-war":
        title = "";
        metaDescription = "";
        break;
      case "/book-naruto":
        title = "";
        metaDescription = "";
        break;
      case "/book-jujutsu-kaisen":
        title = "";
        metaDescription = "";
        break;
      case "/the-other-name":
        title = "";
        metaDescription = "";
        break;
      case "/after-lives":
        title = "";
        metaDescription = "";
        break;
      case "/the-grapes-of-wrath":
        title = "";
        metaDescription = "";
        break;
      case "/a-heart-that-works":
        title = "";
        metaDescription = "";
        break;
      case "/jujutsu-kaisen":
        title = "";
        metaDescription = "";
        break;
      case "/it-starts-with-us":
        title = "";
        metaDescription = "";
        break;
      case "/poetry":
        title = "";
        metaDescription = "";
        break;
      case "/night-stories":
        title = "";
        metaDescription = "";
        break;
      case "/masashi-kishimoto":
        title = "";
        metaDescription = "";
        break;
      case "/stan-lee":
        title = "";
        metaDescription = "";
        break;
      // case "/sign-in":
      //   title = "";
      //   metaDescription = "";
      //   break;
      case "/genres":
        title = "";
        metaDescription = "";
        break;
      case "/abdulrazak-gurnah":
        title = "";
        metaDescription = "";
        break;
      case "/jon-fosse":
        title = "";
        metaDescription = "";
        break;
      case "/jk-rawling":
        title = "";
        metaDescription = "";
        break;
      case "/self-help":
        title = "";
        metaDescription = "";
        break;
      case "/historical-fiction":
        title = "";
        metaDescription = "";
        break;
      case "/book-the-elves-and-the-shoes-maker":
        title = "";
        metaDescription = "";
        break;
      case "/book-the-other-name":
        title = "";
        metaDescription = "";
        break;
      case "/the-god-of-small-things":
        title = "";
        metaDescription = "";
        break;
      case "/book-a-heart-that-works":
        title = "";
        metaDescription = "";
        break;
      case "/the-god-of-small-things1":
        title = "";
        metaDescription = "";
        break;
      case "/satire":
        title = "";
        metaDescription = "";
        break;
      case "/manga":
        title = "";
        metaDescription = "";
        break;
      case "/horror":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiction" element={<Fiction />} />
      <Route path="/civil-war" element={<CivilWar />} />
      <Route path="/log-in" element={<LogIn />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/biography" element={<Biography />} />
      <Route path="/famous-authors" element={<FamousAuthors />} />
      <Route path="/top-picks" element={<TopPicks />} />
      <Route path="/help" element={<Help />} />
      <Route
        path="/book-it-starts-with-us-it-ends-with-us"
        element={<BookItStartsWithUsItEnds />}
      />
      <Route path="/book-after-lives" element={<BookAfterLives />} />
      <Route path="/book-harry-potter" element={<BookHarryPotter />} />
      <Route
        path="/book-the-man-who-collected-poe"
        element={<BookTheManWhoCollectedPoe />}
      />
      <Route path="/book-rich-dad-poor-dad" element={<BookRichDadPoorDad />} />
      <Route path="/book-scouting-for-boys" element={<BookScoutingForBoys />} />
      <Route path="/book-the-frog-prince" element={<BookTheFrogPrince />} />
      <Route
        path="/book-the-grapes-of-wrath"
        element={<BookTheGrapesOfWrath />}
      />
      <Route path="/book-civil-war" element={<BookCivilWar />} />
      <Route path="/book-naruto" element={<BookNaruto />} />
      <Route path="/book-jujutsu-kaisen" element={<BookJujutsuKaisen />} />
      <Route path="/the-other-name" element={<TheOtherName />} />
      <Route path="/after-lives" element={<AfterLives />} />
      <Route path="/the-grapes-of-wrath" element={<TheGrapesOfWrath />} />
      <Route path="/a-heart-that-works" element={<AHeartThatWorks />} />
      <Route path="/jujutsu-kaisen" element={<JujutsuKaisen />} />
      <Route path="/it-starts-with-us" element={<ItStartsWithUs />} />
      <Route path="/poetry" element={<Poetry />} />
      <Route path="/night-stories" element={<NightStories />} />
      <Route path="/masashi-kishimoto" element={<MasashiKishimoto />} />
      <Route path="/stan-lee" element={<StanLee />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/abdulrazak-gurnah" element={<AbdulrazakGurnah />} />
      <Route path="/jon-fosse" element={<JonFosse />} />
      <Route path="/jk-rawling" element={<JkRawling />} />
      <Route path="/self-help" element={<SelfHelp />} />
      <Route path="/historical-fiction" element={<HistoricalFiction />} />
      <Route
        path="/book-the-elves-and-the-shoes-maker"
        element={<BookTheElvesAndTheShoesM />}
      />
      <Route path="/book-the-other-name" element={<BookTheOtherName />} />
      <Route
        path="/the-god-of-small-things"
        element={<BookTheGodOfSmallThings />}
      />
      <Route
        path="/book-a-heart-that-works"
        element={<BookAHeartThatWorks />}
      />
      <Route
        path="/the-god-of-small-things1"
        element={<TheGodOfSmallThings />}
      />
      <Route path="/satire" element={<Satire />} />
      <Route path="/manga" element={<Manga />} />
      <Route path="/horror" element={<Horror />} />
    </Routes>
  );
}
export default App;
