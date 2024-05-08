import { Box, Container, Text } from "@mantine/core";
import useSchemeColors from "../hooks/useSchemeColors";
import { ReactNode } from "react";
import useGetScreenSize, { EScreenSize } from "../hooks/useGetScreenSize";

interface Props {
    children: ReactNode;
}

const SectionHeader: React.FC<Props> = (props) => {
    const { children } = props;

    const colors = useSchemeColors();

    const screenSize = useGetScreenSize();
    const styles = {
        fontSize: {
            [EScreenSize.large]: 64,
            [EScreenSize.medium]: 42,
            [EScreenSize.small]: 30,
        },
        py: {
            [EScreenSize.large]: 65,
            [EScreenSize.medium]: 24,
            [EScreenSize.small]: 10,
        },
    };

    return (
        <Box
            style={{
                // background: theme.fn.linearGradient(90, colors.background, colors.boxBackground),
                backgroundImage: ``,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // boxShadow: `0px 12px 18px ${theme.colors.gray[2]}`
            }}
            py={styles.py[screenSize]}
            bg={colors.boxBackground}
        >
            <Container>
                <Text fz={styles.fontSize[screenSize]} ta="center" c={colors.text} fw="bold">
                    {children}
                </Text>
            </Container>
        </Box>
    );
};

export default SectionHeader;
