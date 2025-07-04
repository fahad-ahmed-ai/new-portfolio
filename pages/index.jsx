import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* ✅ Explosion background (behind everything) */}
      <div
        role="img"
        aria-hidden
        className="fixed inset-0 bg-explosion bg-cover bg-center bg-no-repeat z-0"
      />

      {/* ✅ Optional dark overlay (behind content, not above it) */}
      <div className="fixed inset-0 bg-black/30 z-10" />

      {/* ✅ Particles (middle layer) */}
      <div className="absolute inset-0 z-20">
        <ParticlesContainer />
      </div>

      {/* ✅ Main content (top layer) */}
      <div className="relative z-30 h-full">
        <div className="w-full h-full bg-gradient-to-r from-black/20 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* Title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>

            {/* Paragraph 1 */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-6"
            >
              As a software engineer, I specialize in developing innovative software solutions that optimize business operations. My passion for problem-solving and collaborative approach allows me to thrive in fast-paced environments, ensuring clear communication and successful project outcomes with my clients.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={fadeIn("down", 0.35)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            >
              I aim to achieve your business goals with tailored software solutions. With extensive experience in developing effective applications, I deliver results that drive growth and efficiency.
            </motion.p>

            {/* Buttons */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ✅ Avatar */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute z-40 w-full h-full max-w-[737px] max-h-[678px] -bottom-32 lg:bottom-0 lg:right-[8%]"
      >
        <Avatar />
      </motion.div>
    </div>
  );
};

export default Home;
