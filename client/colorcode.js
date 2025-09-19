tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        "background-light": "#f0fdf4",
        "background-dark": "#121212",
        "foreground-light": "#1f2937",
        "foreground-dark": "#e5e5e5",
        "card-light": "#ffffff",
        "card-dark": "#1e1e1e",
        "border-light": "#e5e7eb",
        "border-dark": "#2e2e2e",
        "muted-light": "#6b7280",
        "muted-dark": "#a3a3a3",
      },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
    },
  },
};
