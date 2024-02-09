import { extendTheme } from "@chakra-ui/react";
// import styles from "./styles";

export const theme = extendTheme({
  // styles,
  colors: {
    transparent: "transparent",
    black: "red",
    white: "whitesmoke",
    gray: {
      50: "#FFF", // !!!
      100: "#e5e5e5", //L: (button, line)          D: (icon, )
      200: "#cacaca", //L: (input border, devider) D: (switch botton, )
      300: "#b0b0b0", //L: (switch botton, )       D: (!!!)
      400: "#959595", //L: (!!!)                   D: (Avatar, table headers, )
      500: "#7b7b7b", //L: (placeholders, )
      600: "#606060", //L: (table headers, )       D: (!!!)
      700: "#464646", //L: (!!!)                   D: (table border, )
      800: "#2b2b2b", //L: (text, )                D: (background, )
      900: "#111", // !!!
    },
    whiteAlpha: {
      50: "red",
      100: "red",
      200: "RGBA(255, 255, 255, 0.08)", // D: (button)
      300: "RGBA(255, 255, 255, 0.16)", // D: (form borders)
      400: "RGBA(255, 255, 255, 0.24)", // D: (placeholder)
      500: "red",
      600: "red",
      700: "red",
      800: "red",
      900: "RGBA(255, 255, 255, 0.92)", //D: (text)
    },
    blackAlpha: {
      50: "red",
      100: "red",
      200: "red",
      300: "red",
      400: "red",
      500: "red",
      600: "red",
      700: "RGBA(0, 0, 0, 0.64)", //D
      800: "red",
      900: "red",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
});
