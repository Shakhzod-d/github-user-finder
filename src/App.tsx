import { useThemeStore } from "./store";
import {
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Home } from "./pages";
import { Brightness4, Brightness7 } from "@mui/icons-material";

import "./App.css";

function App() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <IconButton
        onClick={toggleDarkMode}
        color="inherit"
        sx={{ position: "absolute", top: 16, right: 16 }}
        aria-label="toggle theme"
      >
        {darkMode ? <Brightness7 /> : <Brightness4 />}
      </IconButton>

      <Home />
    </ThemeProvider>
  );
}

export default App;
