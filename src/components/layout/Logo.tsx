import { Flex, Image, useMantineColorScheme } from "@mantine/core";
const logoDark = "/assets/logo_dark.svg";
const logoLight = "/assets/logo_light.svg";

interface Props {
    fill?: string;
    size?: number;
}

const Logo: React.FC<Props> = (props) => {
    const { size = 60 } = props;
    const { colorScheme } = useMantineColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <Flex w={size} h={size} align="center">
            <Image src={isDark ? logoLight : logoDark} />
        </Flex>
    );
};

export default Logo;
