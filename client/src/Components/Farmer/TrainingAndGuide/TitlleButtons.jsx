import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import TranslateIcon from "@mui/icons-material/Translate";

const TitleButtons = () => {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white dark:text-white">
        Training & Guides
      </h1>

      {/* Buttons */}
      <div className="flex items-center gap-2">
        {/* Download All Button */}
        <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
          <DownloadIcon className="text-base" />
          <span>Download All</span>
        </button>

        {/* Language Button */}
        <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
          <TranslateIcon className="text-base" />
          <span>English</span>
        </button>
      </div>
    </div>
  );
};

export default TitleButtons;
