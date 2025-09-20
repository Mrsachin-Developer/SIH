// BiosecuritySection.jsx
import React from "react";
import BiosecurityCard from "./BiosecurityCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const BiosecuritySection = ({ activeTab }) => {
  return (
    <div className="space-y-8">
      {/* Poultry Section */}
      {activeTab === "poultry" && (
        <section id="poultry">
          <h2 className="mb-6 text-2xl font-bold text-white dark:text-white">
            Poultry Biosecurity
          </h2>
          <div className="space-y-8">
            <BiosecurityCard
              title="Biosecurity Tips for Poultry"
              description="Watch a short video on essential poultry biosecurity practices."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Watch Video"
              buttonIcon={<PlayArrowIcon />}
              buttonLink="https://www.youtube.com/watch?v=qyKdLM1t2Zc"
            />
            <BiosecurityCard
              title="Poultry Biosecurity Infographic"
              description="Visual summary of key biosecurity measures for your farm."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="View Infographic"
              buttonIcon={<RemoveRedEyeIcon />}
              buttonLink="https://www.canva.com/poultry-biosecurity-infographic"
            />
            <BiosecurityCard
              title="Poultry Biosecurity Guide"
              description="Detailed guide to keep your poultry healthy and disease-free."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Read Guide"
              buttonIcon={<AutoStoriesIcon />}
              buttonLink="https://en.wikipedia.org/wiki/Poultry_farming"
            />
          </div>
        </section>
      )}

      {/* Pig Section */}
      {activeTab === "pigs" && (
        <section id="pigs">
          <h2 className="mb-6 text-2xl font-bold text-white dark:text-white">
            Pig Biosecurity
          </h2>
          <div className="space-y-8">
            <BiosecurityCard
              title="Pig Biosecurity Practices"
              description="Learn best practices for pig farm biosecurity via video."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Watch Video"
              buttonIcon={<PlayArrowIcon />}
              buttonLink="https://www.youtube.com/watch?v=VIOwydNgAVY"
            />
            <BiosecurityCard
              title="Pig Biosecurity Infographic"
              description="Quick visual guide to pig farm safety measures."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="View Infographic"
              buttonIcon={<RemoveRedEyeIcon />}
              buttonLink="https://www.canva.com/pig-biosecurity-infographic"
            />
            <BiosecurityCard
              title="Pig Biosecurity Guide"
              description="Comprehensive instructions to protect pigs from diseases."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Read Guide"
              buttonIcon={<AutoStoriesIcon />}
              buttonLink="https://wikifarmer.com/library/en/article/swine-biosecurity-essential-practices-for-disease-prevention-and-herd-health"
            />
          </div>
        </section>
      )}

      {/* Hygiene & Waste Section */}
      {activeTab === "hygiene" && (
        <section id="hygiene">
          <h2 className="mb-6 text-2xl font-bold text-white dark:text-white">
            Hygiene & Waste
          </h2>
          <div className="space-y-8">
            <BiosecurityCard
              title="Hygiene & Waste Management"
              description="Watch a video on maintaining farm hygiene effectively."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Watch Video"
              buttonIcon={<PlayArrowIcon />}
              buttonLink="https://www.youtube.com/watch?v=jXHanV7ge6E"
            />
            <BiosecurityCard
              title="Waste Management Infographic"
              description="Visual overview of proper waste disposal practices."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="View Infographic"
              buttonIcon={<RemoveRedEyeIcon />}
              buttonLink="https://www.vectorstock.com/royalty-free-vector/waste-management-infographics-for-reduce-reuse-vector-30542421"
            />
            <BiosecurityCard
              title="Hygiene & Waste Guide"
              description="Step-by-step guide for safe hygiene and waste management."
              imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuALXvbHG8P35MWABBKsLfWB8nfD1Tbs7vH18mC-1DVI0P1vyDmGGDTcfEN_jhqFK2Iwu7yUhUNNghS82InaL8PkpK3uFT98j_0HYSQgozhh8BqhdFpqNasx__T5NYPepbxfImoOF98EL9KYgfj060XaHA6FPQoge0AhOQ6dVPfQKazJfO2TSqeui0UMSOxi15-H4D0junYBNdY0cZJtTqanf9M55huYeliLURNM6YgYYSB38zIYev2qoMkrwNWuH8DK75x6Gifv5j84"
              buttonText="Read Guide"
              buttonIcon={<AutoStoriesIcon />}
              buttonLink="https://harmony1.com/waste-management-and-recycling-infographic/"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default BiosecuritySection;
