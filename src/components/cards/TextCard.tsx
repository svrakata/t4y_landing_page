import { Box, BoxProps, Flex, Text, useMantineTheme } from "@mantine/core";

interface Props extends BoxProps {
    text: string;
}

const TextCard: React.FC<Props> = (props) => {
    const { text, sx, ...rest } = props;
    const theme = useMantineTheme();
    return (
        <Flex
            align="center"
            justify="center"
            px="md"
            py={40}
            sx={[
                { borderRadius: theme.radius.md, fontWeight: "bold", fontSize: 30, textAlign: "center" },
                Array.isArray(sx) ? undefined : sx,
            ]}
            {...rest}
        >
            {text}
        </Flex>
    );
};

export default TextCard;
