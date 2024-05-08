import { Box, BoxProps, useMantineColorScheme } from "@mantine/core";
import { ReactNode } from "react";
import useSchemeColors from "../../hooks/useSchemeColors";

interface Props extends BoxProps {
    children: ReactNode;
    noShadow?: boolean;
}

const Card: React.FC<Props> = (props) => {
    const { children, style, noShadow = false, ...rest } = props;
    const { colorScheme } = useMantineColorScheme();
    const colors = useSchemeColors();
    return (
        <Box
            p="lg"
            bg={colorScheme === "dark" ? colors.boxBackground : colors.background}
            style={[
                (theme) => ({
                    boxShadow: colorScheme === "light" ? (noShadow ? "none" : colors.boxShadow) : "none",
                    borderRadius: theme.radius.md,
                    color: colors.text,
                }),
                Array.isArray(style) ? undefined : style,
            ]}
            {...rest}
        >
            {children}
        </Box>
    );
};

export default Card;
