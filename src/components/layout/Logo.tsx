import { Flex, Text } from "@mantine/core";
import useSchemeColors from "../../hooks/useSchemeColors";
import { ABRIEVATION } from "../../constants/layout";
interface Props {
    fill?: string;
    size?: number;
    fontSize?: number;
}

const Logo: React.FC<Props> = (props) => {
    const { size = 60, fontSize = 18 } = props;
    const colors = useSchemeColors();

    return (
        <Flex w={size} h={size} align="center">
            <Text fw="bold" fz={fontSize} c={colors.text}>
                {ABRIEVATION}
            </Text>
        </Flex>
    );
};

export default Logo;
