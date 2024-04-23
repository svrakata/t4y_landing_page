import { Box, Container, Group, Stack, Text, useMantineTheme } from "@mantine/core";
import useSchemeColors from "../../hooks/useSchemeColors";
import Logo from "./Logo";

const Footer: React.FC = () => {
    const colors = useSchemeColors();
    const theme = useMantineTheme();
    return (
        <Box component="footer" mih={200} h="100%" py={40} bg={colors.footerBackground} sx={{}}>
            <Container size="xl">
                <Stack spacing="xl">
                    <Group>
                        <Logo fill={colors.text} />
                        <Text size="lg" color={colors.text}>
                            Zmei Tech
                        </Text>
                    </Group>
                    <Text align="center" size="xs">All rights reserved, Bioseek, 2023</Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
