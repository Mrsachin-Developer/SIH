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
    <article className="flex flex-col md:flex-row gap-6 overflow-hidden rounded-xl border border-gray-900 bg-black shadow-sm transition-shadow hover:shadow-lg">
      <img
        alt={title}
        className="h-48 w-full object-cover md:h-auto md:w-64"
        src={imgSrc}
      />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
          <p className="mb-4 text-sm text-gray-400">{description}</p>
        </div>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-40 h-10 bg-primary text-white rounded-lg justify-center hover:bg-primary/90 transition-colors"
        >
          <span>{buttonText}</span>
          {buttonIcon && <span className="flex">{buttonIcon}</span>}
        </a>
      </div>
    </article>
  );
};

export default BiosecurityCard;
