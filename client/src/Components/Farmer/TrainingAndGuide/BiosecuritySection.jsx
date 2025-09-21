import React from "react";
import BiosecurityCard from "./BiosecurityCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const BiosecuritySection = ({ activeTab }) => {
  const data = {
    poultry: [
      {
        title: "Biosecurity Tips for Poultry",
        description:
          "Watch a short video on essential poultry biosecurity practices.",
        imgSrc: "https://via.placeholder.com/400x250?text=Poultry+Tips",
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=qyKdLM1t2Zc",
      },
      {
        title: "Poultry Biosecurity Infographic",
        description:
          "Visual summary of key biosecurity measures for your farm.",
        imgSrc: "https://via.placeholder.com/400x250?text=Poultry+Infographic",
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink: "https://www.canva.com/poultry-biosecurity-infographic",
      },
      {
        title: "Poultry Biosecurity Guide",
        description:
          "Detailed guide to keep your poultry healthy and disease-free.",
        imgSrc: "https://via.placeholder.com/400x250?text=Poultry+Guide",
        buttonText: "Read Guide",
        buttonIcon: <AutoStoriesIcon />,
        buttonLink: "https://en.wikipedia.org/wiki/Poultry_farming",
      },
    ],
    pigs: [
      {
        title: "Pig Biosecurity Practices",
        description: "Learn best practices for pig farm biosecurity via video.",
        imgSrc: "https://via.placeholder.com/400x250?text=Pig+Tips",
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=VIOwydNgAVY",
      },
      {
        title: "Pig Biosecurity Infographic",
        description: "Quick visual guide to pig farm safety measures.",
        imgSrc: "https://via.placeholder.com/400x250?text=Pig+Infographic",
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink: "https://www.canva.com/pig-biosecurity-infographic",
      },
      {
        title: "Pig Biosecurity Guide",
        description:
          "Comprehensive instructions to protect pigs from diseases.",
        imgSrc: "https://via.placeholder.com/400x250?text=Pig+Guide",
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
        imgSrc: "https://via.placeholder.com/400x250?text=Hygiene+Tips",
        buttonText: "Watch Video",
        buttonIcon: <PlayArrowIcon />,
        buttonLink: "https://www.youtube.com/watch?v=jXHanV7ge6E",
      },
      {
        title: "Waste Management Infographic",
        description: "Visual overview of proper waste disposal practices.",
        imgSrc: "https://via.placeholder.com/400x250?text=Waste+Infographic",
        buttonText: "View Infographic",
        buttonIcon: <RemoveRedEyeIcon />,
        buttonLink:
          "https://www.vectorstock.com/royalty-free-vector/waste-management-infographics-for-reduce-reuse-vector-30542421",
      },
      {
        title: "Hygiene & Waste Guide",
        description:
          "Step-by-step guide for safe hygiene and waste management.",
        imgSrc: "https://via.placeholder.com/400x250?text=Hygiene+Guide",
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
