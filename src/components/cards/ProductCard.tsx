import { Title, Text, Button, Group, Image, Stack, Flex } from "@mantine/core";
import useSchemeColors from "../../hooks/useSchemeColors";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

interface Props {
    link: string;
    title: string;
    description: string;
    image: string;
    orientation?: "horizontal" | "vertical";
}

const ProductCard = (props: Props) => {
    const { title, description, image = "", link, orientation = "horizontal" } = props;
    const colors = useSchemeColors();
    const navigate = useNavigate();
    const isHorizontal = orientation === "horizontal";
    const Container = isHorizontal ? Group : Stack;

    const imageSize = 60;
    return (
        <Card p={42}>
            <Container align="start" gap={30}>
                <Flex
                    style={(theme) => ({
                        borderRadius: theme.radius.sm,
                        border: `1px solid ${colors.iconPlaceholderBackground}`,
                        boxShadow: theme.shadows.md,
                    })}
                    align="center"
                    justify="center"
                    w={imageSize + 20}
                    h={imageSize + 20}
                    px={10}
                >
                    <Image src={image} width={imageSize} radius="sm" fit="contain" />
                </Flex>

                <Stack align="start">
                    <Title order={2} c={colors.text}>
                        {title}
                    </Title>
                    <Text fz={18} lh={1.6} color={colors.textLight}>
                        {description}
                    </Text>
                    <Button
                        variant="gradient"
                        gradient={{ deg: 140, from: "primary.7", to: "primary.5" }}
                        size="sm"
                        radius="md"
                        mt="xl"
                        onClick={() => navigate(link)}
                    >
                        Read more
                    </Button>
                </Stack>
            </Container>
        </Card>
    );
};

export default ProductCard;
