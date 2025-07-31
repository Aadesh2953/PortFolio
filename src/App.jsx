import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavbarMain from "./Components/navbar/NavbarMain.jsx";
import ProjectMain from "./Components/ProjectSection/ProjectMain.jsx";
import HeroMain from "./Components/HeroSection/HeroMain.jsx";
import SubHeroSection from "./Components/SubHero/SubHeroSection.jsx";
import AboutMeMain from "./Components/AboutMeSectiom/AboutMeMain.jsx";
import HelperSection from "./Components/HelperSection.jsx";
import SkillsMain from "./Components/SkillSection/SkillsMain.jsx";
import Subskills from "./Components/SkillSection/Subskills.jsx";
import ExperienceMain from "./Components/ExperienceSection/ExperienceMain.jsx";
import AllExperience from "./Components/ExperienceSection/AllExperience.jsx";
import FooterMain from "./Footer/FooterMain.jsx";
function App() {
  return (
    <>
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <Subskills />
      <ExperienceMain />
      {/* <AllExperience /> */}
      <ProjectMain />
      <FooterMain />
    </>
  );
}

export default App;
