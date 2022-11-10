import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ColorModeProvider, { ColorModeContext } from "../components/SwitchDarkMode/ColorMode";
import { CSSReset } from "../styles/globals";
import { theme } from "../styles/theme";

function ProviderWrapper(props) {
  return <ColorModeProvider initialMode={"dark"}>{props.children}</ColorModeProvider>;
}

function MyApp({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <ProviderWrapper>
      <MyApp {...props} />
    </ProviderWrapper>
  );
}
