import { extendTheme } from "@chakra-ui/react";
// import styles from "./styles";

export const theme = extendTheme({
  // styles,
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      // 900: "#492F36",
      900: "#171923",
      800: "#1A202C",
      700: "#2D3748",
      600: "#4A5568",
      500: "#718096",
      400: "#A0AEC0",
      300: "#CBD5E0",
      200: "#E2E8F0",
      100: "#EDF2F7",
      50: "#F7FAFC",
      // 50: "#FFEDCB",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});
