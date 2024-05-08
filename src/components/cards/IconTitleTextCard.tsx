import { useMantineColorScheme, Group, Text, List, Stack, Box } from "@mantine/core";
import { ReactNode } from "react";
import useSchemeColors from "../../hooks/useSchemeColors";

interface Props {
    title: string;
    text: string[];
    icon: ReactNode;
    orientation?: "horizontal" | "vertical";

}

const IconTitleTextCard: React.FC<Props> = (props) => {
    const { text, icon, title, orientation = "horizontal" } = props;
    const colors = useSchemeColors();
    const { colorScheme } = useMantineColorScheme();
    const isHorizontal = orientation === "horizontal"
    const Container = isHorizontal ? Group : Stack;

    return (
        <Stack
            px={30}
            py={40}
            style={(theme) => ({ borderRadius: theme.radius.md, boxShadow: colors.boxShadow })}
            bg={colorScheme === "dark" ? colors.boxBackground : "transparent"}
            gap="xl"
        >
            <Container maw={500}>
                <Group align="center" w={90} h={90} justify="center">
                    {icon}
                </Group>
                <Text c={colors.text} fw="bold" fz={32} lh={1}>
                    {title}
                </Text>
            </Container>
            <List
                style={{ alignSelf: "flex-start" }}
                icon={
                    <Box pt={4}>
                        {/* <HiChevronDoubleRight size={18} color={colors.listBullet} /> */}
                    </Box>
                }
                spacing="md"
            >
                {text.map((t, i) => (
                    <List.Item key={i}>
                        <Text size="lg" color={colors.textLight}>
                            {t}
                        </Text>
                    </List.Item>
                ))}
            </List>
        </Stack>
    );
};

export default IconTitleTextCard;
