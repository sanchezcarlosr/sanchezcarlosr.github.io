import { useState } from "react";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./ui/navbar/navbar";
import About from "./ui/components/about-component/about";

/**
 * Componentes para poder hacer la traducción
 */
import "./i18n/i18n";

/**
 * Theme to Dark Mode
 */
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#03071E",
    },
    primary: {
      main: "#CC1E4A",
      light: "#FFC906",
      contrastText: "#ffff",
    },
  },
});
/**
 * Theme to Light Mode
 */
const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E0BBE4",
    },
    primary: {
      main: "#000000",
      light: "#03071E",
      contrastText: "#000000",
    },
    secondary: {
      main: "#ff0b0bff",
    },
  },
});

function App() {
  const [mode, setMode] = useState("light");

  const theme = mode === "dark" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar mode={mode} setMode={setMode} />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/proyects" exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
