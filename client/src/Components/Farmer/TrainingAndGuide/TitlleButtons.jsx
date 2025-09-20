import React from "react";
import DownloadIcon from "@mui/icons-material/Download";
import TranslateIcon from "@mui/icons-material/Translate";

const TitlleButtons = () => {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
      <h1 className="text-3xl font-bold text-white-900 dark:text-white">
        Training & Guides
      </h1>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
          <span>
            <DownloadIcon />
          </span>
          <span className="material-symbols-outlined text-base">
            Download All
          </span>
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
          <span className="material-symbols-outlined text-base">
            <TranslateIcon />
          </span>
          <span>English</span>
        </button>
      </div>
    </div>
  );
};

export default TitlleButtons;
