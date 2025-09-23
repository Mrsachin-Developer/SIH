import React from "react";
import BiosecurityCard from "./BiosecurityCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import paultry1 from "../../../assets/paultry1.jpg";
import paultry2 from "../../../assets/paultry2.webp";
import paultry3 from "../../../assets/paultry3.webp";

const BiosecuritySection = ({ activeTab }) => {
  const data = {
    poultry: [
      {
        title: "Biosecurity Tips for Poultry",
        description:
          "Watch a playlist on essential poultry biosecurity practices.",
        imgSrc: paultry1,
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink:
          "https://www.youtube.com/playlist?list=PL5k_DwL02TAXAcinQMyQ86HhndlOkK8Zv",
      },
      {
        title: "Poultry Biosecurity Infographic",
        description:
          "Visual summary of key biosecurity measures for your farm.",
        imgSrc: paultry2,
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink: "https://poultrybiosecurity.org/",
      },
      {
        title: "Poultry Biosecurity Guide",
        description:
          "Detailed guide to keep your poultry healthy and disease-free.",
        imgSrc: paultry3,
        buttonText: "Read Guide",
        buttonIcon: <AutoStoriesIcon />,
        buttonLink:
          "https://fieldreport.caes.uga.edu/publications/B1306/biosecurity-basics-for-poultry-growers/",
      },
    ],
    pigs: [
      {
        title: "Pig Biosecurity Practices",
        description: "Learn best practices for pig farm biosecurity via video.",
        imgSrc: paultry3,
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://youtu.be/IL_jgfYcwX0?si=zjMiWE1ufzRAaLTa",
      },
      {
        title: "Pig Biosecurity Infographic",
        description: "Quick visual guide to pig farm safety measures.",
        imgSrc: paultry2,
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink:
          "https://porcinehealthmanagement.biomedcentral.com/articles/10.1186/s40813-020-00181-z",
      },
      {
        title: "Pig Biosecurity Guide",
        description:
          "Comprehensive instructions to protect pigs from diseases.",
        imgSrc: paultry1,
        buttonText: "Read Guide",
        buttonIcon: <AutoStoriesIcon />,
        buttonLink:
          "https://wikifarmer.com/library/en/article/swine-biosecurity-essential-practices-for-disease-prevention-and-herd-health",
      },
    ],
    hygiene: [
      {
        title: "Hygiene & Waste Management",
        description: "Watch a video on maintaining farm hygiene effectively.",
        imgSrc: paultry2,
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=8WfJYaBWJ78",
      },
      {
        title: "Waste Management Infographic",
        description: "Visual overview of proper waste disposal practices.",
        imgSrc: paultry3,
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink:
          "https://www.vectorstock.com/royalty-free-vector/waste-management-infographics-for-reduce-reuse-vector-30542421",
      },
      {
        title: "Hygiene & Waste Guide",
        description:
          "Step-by-step guide for safe hygiene and waste management.",
        imgSrc: paultry1,
        buttonText: "Read Guide",
        buttonIcon: <AutoStoriesIcon />,
        buttonLink:
          "https://extension.psu.edu/farm-worker-health-and-hygiene-basic-rules",
      },
    ],
  };

  return (
    <div className="space-y-8">
      {data[activeTab] && (
        <section id={activeTab}>
          <h2 className="mb-6 text-2xl font-bold text-white capitalize">
            {activeTab.replace("-", " ")}
          </h2>
          <div className="space-y-8">
            {data[activeTab].map((card) => (
              <BiosecurityCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BiosecuritySection;
