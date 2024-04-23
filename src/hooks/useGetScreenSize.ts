import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export enum EScreenSize {
    large = "large",
    medium = "medium",
    small = "small",
}

const useGetScreenSize = () => {
    const theme = useMantineTheme();

    const largeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);
    const mediumScreen = useMediaQuery(`(max-width: ${theme.breakpoints.lg}) and (min-width: ${theme.breakpoints.sm})`);

    if (largeScreen) {
        return EScreenSize.large;
    }

    if (mediumScreen) {
        return EScreenSize.medium;
    }

    return EScreenSize.small;
};

export default useGetScreenSize;
