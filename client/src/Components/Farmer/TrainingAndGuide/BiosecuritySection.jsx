import React from "react";
import BiosecurityCard from "./BiosecurityCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import paultry1 from "../../../assets/paultry1.jpg";
import paultry2 from "../../../assets/paultry2.webp"
import paultry3 from "../../../assets/paultry3.webp"

const BiosecuritySection = ({ activeTab }) => {
  const data = {
    poultry: [
      {
        title: "Biosecurity Tips for Poultry",
        description:
          "Watch a short video on essential poultry biosecurity practices.",
        imgSrc: paultry1,
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=qyKdLM1t2Zc",
      },
      {
        title: "Poultry Biosecurity Infographic",
        description:
          "Visual summary of key biosecurity measures for your farm.",
        imgSrc: paultry2,
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink: "https://www.poultrydvm.com/featured-infographic/biosecurity-backyard-poultry",
      },
      {
        title: "Poultry Biosecurity Guide",
        description:
          "Detailed guide to keep your poultry healthy and disease-free.",
        imgSrc: paultry3,
        buttonText: "Read Guide",
        buttonIcon: <AutoStoriesIcon />,
        buttonLink: "https://en.wikipedia.org/wiki/Poultry_farming",
      },
    ],
    pigs: [
      {
        title: "Pig Biosecurity Practices",
        description: "Learn best practices for pig farm biosecurity via video.",
        imgSrc: paultry3,
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=VIOwydNgAVY",
      },
      {
        title: "Pig Biosecurity Infographic",
        description: "Quick visual guide to pig farm safety measures.",
        imgSrc: paultry2,
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink: "https://www.poultrydvm.com/featured-infographic/biosecurity-backyard-poultry",
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
        buttonLink: "https://www.youtube.com/watch?v=jXHanV7ge6E",
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
          "https://harmony1.com/waste-management-and-recycling-infographic/",
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
