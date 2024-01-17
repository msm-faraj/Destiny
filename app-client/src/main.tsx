import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { destinyTheme } from "./styles/theme";
import App from "./App.tsx";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={destinyTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
