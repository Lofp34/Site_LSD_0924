import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react"; // Assurez-vous que Chakra UI est bien installé
import App from "./App";
import theme from "./theme"; // Assurez-vous que le thème est correctement configuré et exporté

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root") // Assurez-vous que l'élément avec l'ID 'root' existe dans index.html
);
