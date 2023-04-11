import { createContext, useState, useMemo } from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";

// color design tokens
export const tokens = (mode: string) => ({
 ...(mode === 'dark'
    ? {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        purple: {
            100: "#e2e2f1",
            200: "#c6c5e3",
            300: "#a9a7d5",
            400: "#8d8ac7",
            500: "#706db9",
            600: "#5a5794",
            700: "#43416f",
            800: "#2d2c4a",
            900: "#161625"
        },
        green: {
            100: "#e6f6e5",
            200: "#ceeccb",
            300: "#b5e3b1",
            400: "#9dd997",
            500: "#84d07d",
            600: "#6aa664",
            700: "#4f7d4b",
            800: "#355332",
            900: "#1a2a19"
        }
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        purple: {
            100: "#e2e2f1",
            200: "#c6c5e3",
            300: "#a9a7d5",
            400: "#8d8ac7",
            500: "#706db9",
            600: "#5a5794",
            700: "#43416f",
            800: "#2d2c4a",
            900: "#161625"
        },
        green: {
            100: "#e6f6e5",
            200: "#ceeccb",
            300: "#b5e3b1",
            400: "#9dd997",
            500: "#84d07d",
            600: "#6aa664",
            700: "#4f7d4b",
            800: "#355332",
            900: "#1a2a19"
        }
    })
});

// mui theme settings

export const themeSettings = (mode: string) : ThemeOptions | undefined => {
    
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode as any,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.grey[500]
                    },
                    secondary: {
                        main: colors.purple[500]
                    },
                    tertiary: {
                        main: colors.green[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.grey[900]
                    }
                } : {
                    primary: {
                        main: colors.grey[100]
                    },
                    secondary: {
                        main: colors.grey[500]
                    },
                    tertiary: {
                        main: colors.green[500]
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: "#fcfcfc"
                    }
                }
            )
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                color: colors.grey[100],
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            }
        }
    };
};

// context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}