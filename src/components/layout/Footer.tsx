import { Box, Container, Group, Stack, Text } from "@mantine/core";
import useSchemeColors from "../../hooks/useSchemeColors";
import Logo from "./Logo";
import { useAppState } from "../../state/app";

const Footer: React.FC = () => {
    const colors = useSchemeColors();
    const appConfig = useAppState((state) => state.appConfig);
    return (
        <Box component="footer" h="100%" py={40} bg={colors.footerBackground}>
            <Container size="xl" h="100%">
                <Stack mih={400} gap="xl" justify="space-between" h="100%">
                    <Group>
                        <Logo fontSize={33} fill={colors.text} />
                        <Text fz={33} c={colors.text}>
                            {appConfig.title}
                        </Text>
                    </Group>
                    <Text ta="center" size="lg">
                        All rights reserved, {new Date().getFullYear()}
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
