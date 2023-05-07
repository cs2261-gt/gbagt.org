import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes
} from 'react-router-dom';
import Navbar from "./components/global/Navbar"
import About from "./pages/About"
import Resources from "./pages/Resources"
import Documentation from "./pages/Documentation"
import HallOfFame from "./pages/HallOfFame"
import ErrorPage from "./pages/ErrorPage";

export default function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <HashRouter>
                <Navbar />
                <Routes>
                  <Route path="/" element={ <About /> } />
                  <Route path="/resources" element={ <Resources /> } />
                  <Route path="/docs" element={ <Documentation /> } />
                  <Route path="/hall-of-fame" element={ <HallOfFame /> } />
                  <Route path="*" element={ <ErrorPage /> } />
                </Routes>
              </HashRouter>
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
