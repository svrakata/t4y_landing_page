import { generateColors } from "@mantine/colors-generator";
import { createTheme, virtualColor, DefaultMantineColor, MantineColorsTuple } from "@mantine/core";

type ExtendedCustomColors = "primary" | DefaultMantineColor;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}

const theme = createTheme({
    primaryColor: "primary",
    colors: {
        primaryLight: generateColors("#c0cf49"),
        primaryDark: generateColors("#8b8b8b"),
        primary: virtualColor({
            name: "primary",
            light: "primaryLight",
            dark: "primaryDark",
        }),
    },
});

export default theme;
