import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import SampleComponent from "./components/global/SampleComponent"
import Navbar from "./components/global/Navbar"
import About from "./pages/About"
import Resources from "./pages/Resources"
import Documentation from "./pages/Documentation"
import HallOfFame from "./pages/HallOfFame"

const router = createBrowserRouter([
  {
    path: "/",
    element: <SampleComponent />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "resources",
    element: <Resources />
  },
  {
    path: "documentation",
    element: <Documentation />
  },
  {
    path: "hall-of-fame",
    element: <HallOfFame />
  },
]);

export default function App() {

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>
        <CssBaseline>
          <div className="app">
            <main className="content">
              <Navbar />
              <RouterProvider router={ router } />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
