import { generateColors } from "@mantine/colors-generator";
import { createTheme, virtualColor, DefaultMantineColor, MantineColorsTuple, colorsTuple } from "@mantine/core";

type ExtendedCustomColors = "primary" | "bg" | "text" | "textFixed" | DefaultMantineColor;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

const theme = createTheme({
    primaryColor: "primary",
    primaryShade: 3,
    colors: {
        primary: generateColors("#5474B4"),
        bgLight: colorsTuple("#f5f4f0"),
        bgDark: colorsTuple("#555555"),
        bg: virtualColor({
            name: "bg",
            light: "bgLight",
            dark: "bgDark",
        }),
        boxLight: colorsTuple("#ffffff"),
        boxDark: colorsTuple("#333333"),
        box: virtualColor({
            name: "box",
            light: "boxLight",
            dark: "boxDark",
        }),
        textLight: colorsTuple("#333333"),
        textDark: colorsTuple("#ffffff"),
        text: virtualColor({
            name: "text",
            light: "textLight",
            dark: "textDark",
        }),
        textFixed: colorsTuple("#333333"),
    },
    fontFamily: "'Quicksand', sans-serif;",
});

export default theme;
