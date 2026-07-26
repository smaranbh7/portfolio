module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0D10",
          soft: "#101317",
        },
        surface: {
          DEFAULT: "#14171C",
          hover: "#1B1F26",
        },
        border: {
          DEFAULT: "#242830",
        },
        ivory: {
          DEFAULT: "#E7E5E0",
          muted: "#8B909A",
        },
        signal: {
          DEFAULT: "#F2A93B",
          dim: "rgba(242, 169, 59, 0.12)",
        },
        online: "#4ADE80",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(231, 229, 224, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(231, 229, 224, 0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
}
