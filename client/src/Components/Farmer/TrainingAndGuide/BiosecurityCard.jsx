// BiosecurityCard.jsx
import React from "react";

const BiosecurityCard = ({
  title,
  description,
  imgSrc,
  buttonText,
  buttonIcon,
  buttonLink,
}) => {
  return (
    <article className="flex flex-col gap-6 overflow-hidden rounded-xl border border-gray-900 bg-black shadow-sm transition-shadow hover:shadow-lg dark:border-white/10 dark:bg-gray-950/50 md:flex-row">
      <img
        alt={title}
        className="h-48 w-full object-cover md:h-auto md:w-64"
        src={imgSrc}
      />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white dark:text-white">
            {title}
          </h3>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 self-start"
        >
          <button className="w-40 h-10 flex items-center justify-center gap-2 bg-primary text-white rounded-lg">
            <span>{buttonText}</span>
            <span className="material-symbols-outlined text-base">
              {buttonIcon}
            </span>
          </button>
        </a>
      </div>
    </article>
  );
};

export default BiosecurityCard;
