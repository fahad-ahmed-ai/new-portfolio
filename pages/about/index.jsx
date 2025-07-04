import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaDatabase,
  FaCode,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiOpenai,
  SiAmazonaws,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// Calculate years of experience from 2021
const yearsOfExperience = new Date().getFullYear() - 2021;

// Realistic portfolio-based data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web & Backend Development",
        icons: [FaHtml5, FaCss3, FaPython, SiDjango, SiFastapi, SiMysql, SiMongodb],
      },
      {
        title: "AI & LLM Tools",
        icons: [SiOpenai, FaCode, SiAmazonaws],
      },
    ],
  },
{
  title: "certifications",
  info: [
    {
      title: "Python for Everybody - Coursera",
      stage: "2023",
    },
    {
      title: "LangChain & Vector DBs - DeepLearning.AI",
      stage: "2024",
    },
    {
      title: "LLMs for AI Applications - DeepLearning.AI",
      stage: "2024",
    },
    {
      title: "Vector Databases for Chatbots - DeepLearning.AI",
      stage: "2024",
    },
  ],
},

  {
    title: "experience",
    info: [
      {
        title: "Software Engineer - Kodexo Labs",
        stage: "Sep 2023 – Present",
      },
      {
        title: "Junior Software Engineer - Love For Data",
        stage: "Jun 2022 – Nov 2023",
      },
      {
        title: "Data Digitization Officer - Love For Data",
        stage: "Mar 2021 – Jun 2022",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bachelors in Commerce - University of Sindh",
        stage: "2025",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* Avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Software Engineer & <span className="text-accent">AI Specialist</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I specialize in building scalable AI-integrated software using Python, FastAPI, and Langchain. With a background in backend engineering and passion for LLMs and automation, I help teams build powerful tools that deliver real value.
          </motion.p>

          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={yearsOfExperience} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={3} />
                  <span>+</span>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>

              {/* Certifications */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certifications earned
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
