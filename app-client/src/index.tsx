import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { destinyTheme } from "./styles/theme";
import "../src/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={destinyTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
