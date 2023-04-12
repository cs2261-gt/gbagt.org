import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import SampleComponent from "./components/global/SampleComponent"
import Navbar from "./components/global/Navbar"

export default function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <Navbar />
              <SampleComponent />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
