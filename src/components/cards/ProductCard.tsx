import { createStyles, Title, Text, Button, ThemeIcon, rem, Group, Image, Box, Stack, Flex } from "@mantine/core";
import { IProductFeature } from "../../types";
import useSchemeColors from "../../hooks/useSchemeColors";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

interface Props {
    link: string;
    features: IProductFeature[];
    title: string;
    description: string;
    image: string;
    orientation?: "horizontal" | "vertical";
}

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(36),
        fontWeight: 900,
        lineHeight: 1.1,
    },
}));

const ProductCard = (props: Props) => {
    const { title, description, features = [], image = "", link, orientation = "horizontal" } = props;
    const { classes } = useStyles();
    const colors = useSchemeColors();
    const navigate = useNavigate();
    const isHorizontal = orientation === "horizontal";
    const Container = isHorizontal ? Group : Stack;

    const items = features.map((feature) => (
        <div key={feature.label}>
            {feature.icon && (
                <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }}>
                    <feature.icon size={rem(26)} stroke={1.5} />
                </ThemeIcon>
            )}
            <Text fz="lg" fw={500}>
                {feature.label}
            </Text>
            <Text c="dimmed" fz="sm">
                {feature.description}
            </Text>
        </div>
    ));
    const imageSize = 60;
    return (
        <Card p={42}>
            <Container noWrap align="start" spacing={30}>
                <Flex
                    sx={(theme) => ({
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
                    <Image withPlaceholder src={image} width={imageSize} radius="sm" fit="contain" />
                </Flex>

                <Stack align="start">
                    <Title className={classes.title} order={2} color={colors.text}>
                        {title}
                    </Title>
                    <Text size={18} lh={1.6} color={colors.textLight}>
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
