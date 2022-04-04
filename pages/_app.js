import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./layout/Layout";

import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  colors: {
    white: "#ffffff",
    green: "#defcb2",
    200: "#caf884",
    300: "#b5f554",
    400: "#a1f226",
    500: "#88d90d",
    600: "#69a905",
    700: "#4a7801",
    800: "#2b4800",
    900: "#d87093",
    teal10: "#002014",
    teal20: "#003824",
    teal30: "#558574",
    teal40: "#86A89C",
    teal50: "#AAC2B9",
    lightGray: "#DADADA",
  },
  transition: {
    custom: {
      property: "transform",
      duration: "0.5s",
      easing: "ease-in-out",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
