import Test from "./test";
import "./app.css";
import { ChakraProvider } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider>
      <Test />
    </ChakraProvider>
  );
}
