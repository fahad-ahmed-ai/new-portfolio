import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

// ✅ Updated services based on your portfolio
export const serviceData = [
  {
    title: "LLM & AI Integration",
    description:
      "Design and build intelligent applications using any LLM — including open-source and proprietary models — with tools like LangChain, vector databases, and custom embeddings.",
  },
  {
    title: "Backend & API Engineering",
    description:
      "Develop high-performance APIs and backend systems using FastAPI, Django, Flask, and integrate them with SQL or NoSQL databases and third-party services.",
  },
  {
    title: "Automation & AI Agents",
    description:
      "Build AI-driven autonomous agents and workflow automation systems for infrastructure, chatbots, and data pipelines using event-based logic and cloud triggers.",
  },
  {
    title: "Cloud Deployment & DevOps",
    description:
      "Deploy full-stack and ML apps on AWS using Docker, EC2, GitHub Actions, and Infrastructure as Code (IaC) with Terraform for repeatable, scalable environments.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Left: Heading & description */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I help startups and teams build smart, scalable systems — from custom APIs and data pipelines to LLM-powered assistants and DevOps automation.
            </motion.p>
          </div>

          {/* Right: Service slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider services={serviceData} />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
