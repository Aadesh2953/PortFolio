import React from "react";
import SkillsText from "./SkillsText";
import AllSkill from "./AllSkill";
import AllSkillSm from "./AllSkillSm";
import { motion } from "framer-motion";
import { fadeIn } from "../Motion/variants";

function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
        >
          <SkillsText />
        </motion.div>
        <div className="button-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkill />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSm />
        </div>
      </div>
    </div>
  );
}

export default SkillsMain;
