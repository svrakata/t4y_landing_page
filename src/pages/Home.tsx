import { Container, Stack, Text, Title } from "@mantine/core";
import useGetMediaQueries, { EScreenSize } from "../hooks/useGetScreenSize";
import { EMenuDestination } from "../types";
import useSchemeColors from "../hooks/useSchemeColors";
import useScrollToSection from "../hooks/useScrollToSection";

const Home: React.FC = () => {
    const colors = useSchemeColors();

    const screenSize = useGetMediaQueries();
    const stackStyles = {
        spacing: {
            [EScreenSize.large]: 60,
            [EScreenSize.medium]: 40,
            [EScreenSize.small]: 20,
        },
        py: {
            [EScreenSize.large]: 60,
            [EScreenSize.medium]: 40,
            [EScreenSize.small]: 20,
        },
    };

    const scrollRef = useScrollToSection(EMenuDestination.home);

    return (
        <Stack gap={stackStyles.spacing[screenSize]} ref={scrollRef}>
            <Container size="lg">
                <Stack gap="lg" py={stackStyles.py[screenSize]}>
                    <Title c={colors.text} order={1} maw={800}>
                        Your{" "}
                        <Text variant="gradient" gradient={{ from: "primary.9", to: "primary.4" }} span>
                            ChatGPT
                        </Text>{" "}
                        Solution
                    </Title>
                    <Text c={colors.textLight}>
                        Adopt GPT or be history
                    </Text>
                    <Text c={colors.text}>
                        We make businesses more efficient and competitive by integrating GPT, a tool that excels in
                        understanding and generating human-like text. With Zmei, you're not just adapting to future
                        technology trends, you're actively shaping them.
                    </Text>
                </Stack>
            </Container>
        </Stack>
    );
};

export default Home;
