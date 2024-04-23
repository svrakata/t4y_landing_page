import { getGradient, rgba, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useMemo } from "react";

const useSchemeColors = () => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const theme = useMantineTheme();

    return useMemo(
        () => ({
            background: dark ? theme.colors.dark[7] : theme.colors.gray[0],
            boxBackground: dark ? theme.colors.dark[6] : theme.colors.gray[1],
            backgroundAlt: dark ? rgba(theme.colors.primary[8], 0.3) : rgba(theme.colors.primary[8], 0.3),
            text: dark ? theme.colors.gray[0] : theme.colors.gray[8],
            textLight: dark ? theme.colors.gray[5] : theme.colors.gray[6],
            borderLight: dark ? theme.colors.dark[3] : theme.colors.gray[4],
            headerNavBg: dark ? "transparent" : "transparent",
            headerNavBgActive: dark ? theme.colors.dark[4] : theme.colors.gray[2],
            boxShadow: dark ? `none` : `0px 0px 18px ${rgba(theme.colors.gray[6], 0.2)}`,
            linkButtonColor: dark ? theme.colors.primary[7] : theme.colors.primary[7],
            linkButtonBackgroundHover: dark ? theme.colors.primary[7] : theme.colors.primary[7],
            linkButtonColorHover: dark ? "white" : "white",
            listBullet: dark ? theme.colors.primary[7] : theme.colors.primary[7],
            footerBackground: dark ? theme.colors.dark[9] : theme.colors.gray[2],
            iconsPrimary: dark ? theme.colors.primary[7] : theme.colors.primary[7],
            iconPlaceholderBackground: dark ? theme.colors.dark[5] : theme.colors.gray[3],
            iconsGray: dark
                ? getGradient({ deg: 45, from: theme.colors.blue[4], to: theme.colors.lime[3] }, theme)
                : getGradient({ deg: 45, from: theme.colors.blue[4], to: theme.colors.lime[3] }, theme),
        }),
        [dark, theme]
    );
};

export default useSchemeColors;
