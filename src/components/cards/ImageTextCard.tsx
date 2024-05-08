import { Box, BoxProps, Button, Flex, Group, Image, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import Card from "./Card";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props extends BoxProps {
    imageUrl?: string;
    icon?: (color: string, size: number) => ReactNode;
    text: string;
    title: string;
    subtitle?: string;
    imagePosition?: "start" | "end";
    orientation?: "horizontal" | "vertical";
    to?: string;
}

interface VisualElementProps {
    imageUrl?: string;
    icon?: (color: string, size: number) => ReactNode;
    orientation?: "horizontal" | "vertical";
}

const VisualElement: React.FC<VisualElementProps> = (props) => {
    const { imageUrl, orientation = "horizontal", icon = null } = props;
    const isHorizontal = orientation === "horizontal";
    const imageBoxSize = isHorizontal ? 120 : "100%";
    return (
        <Box w={imageBoxSize} style={{ flexShrink: 0 }}>
            {imageUrl && <Image src={imageUrl} width={imageBoxSize} height={imageBoxSize} radius="sm" fit="cover" />}
            {icon && (
                <Flex
                    style={(theme) => ({ borderRadius: theme.radius.md, overflow: "hidden" })}
                    align="center"
                    h={imageBoxSize}
                    justify="center"
                    // bg={colors.iconsGray}
                >
                    {icon("#dcc370", 80)}
                </Flex>
            )}
        </Box>
    );
};

const ImageTextCard: React.FC<Props> = (props) => {
    const {
        text,
        title,
        orientation = "horizontal",
        subtitle,
        to,
        imagePosition = "start",
        imageUrl,
        icon,
        ...rest
    } = props;
    const isHorizontal = orientation === "horizontal";
    const navigate = useNavigate();
    const theme = useMantineTheme();
    const Container = isHorizontal ? Group : Stack;

    return (
        <Card
            style={{ borderRadius: theme.radius.lg, boxShadow: `0px 0px 22px rgba(0,0,0,0.1)` }}
            p={44}
            pb={50}
            bg="box"
            {...rest}
        >
            <Container align="flex-start">
                {imagePosition === "start" && (imageUrl || icon) && <VisualElement {...props} />}
                <Stack gap={22}>
                    <Title size="h1" c="text">
                        {title}
                    </Title>
                    {subtitle && (
                        <Text fz={22} lh={1.2} c="text" fw="bold" style={{ textAlign: "start" }} mih={56}>
                            {subtitle}
                        </Text>
                    )}
                    <Text size="lg" c="text" lh={1.6} lineClamp={6} style={{ textAlign: "start" }} mih={180}>
                        {text}
                    </Text>
                    {to && (
                        <Box>
                            <Button
                                onClick={() => navigate(to)}
                                rightSection={<IconArrowNarrowRight />}
                                variant="subtle"
                            >
                                Learn more
                            </Button>
                        </Box>
                    )}
                </Stack>
                {imagePosition === "end" && <VisualElement imageUrl={imageUrl} icon={icon} orientation={orientation} />}
            </Container>
        </Card>
    );
};

export default ImageTextCard;
