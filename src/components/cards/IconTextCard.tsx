import { Group, Text, useMantineColorScheme } from "@mantine/core";
import { ReactNode } from "react";
import useSchemeColors from "../../hooks/useSchemeColors";

interface Props {
    text: string;
    icon: ReactNode;
}

const IconTextCard: React.FC<Props> = (props) => {
    const { text, icon } = props;
    const colors = useSchemeColors();
    const { colorScheme } = useMantineColorScheme();
    return (
        <Group
            py={30}
            pl="md"
            pr="lg"
            style={(theme) => ({ borderRadius: theme.radius.md, boxShadow: colors.boxShadow })}
            bg={colorScheme === "dark" ? colors.boxBackground : "transparent"}
            align="center"
        >
            <Group align="center" w={70} h={70} justify="center">
                {icon}
            </Group>
            <Text size="lg" lh={1.5} style={{ flexGrow: 1 }}>
                {text}
            </Text>
        </Group>
    );
};

export default IconTextCard;
