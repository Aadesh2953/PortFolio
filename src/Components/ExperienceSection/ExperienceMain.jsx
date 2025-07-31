import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import AllExperience from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../Motion/variants";
function ExperienceMain() {
  return (
    <div id="experience">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4  bg-lightBrown lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
}

export default ExperienceMain;
