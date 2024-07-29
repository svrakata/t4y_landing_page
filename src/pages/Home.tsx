import { Button, Flex, Group, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./Home.module.css";
import useGetMediaQueries, { EScreenSize } from "../hooks/useGetScreenSize";
import { useAppState } from "../state/app";
import Section from "../components/Section";
import Wave from "../components/Wave";
import { animated, useSpring } from "@react-spring/web";

const Home: React.FC = () => {
    const appConfig = useAppState((state) => state.appConfig);
    const screenSize = useGetMediaQueries();
    const theme = useMantineTheme();


    const stackStyles = {
        spacing: {
            [EScreenSize.large]: 60,
            [EScreenSize.medium]: 40,
            [EScreenSize.small]: 20,
        },
        py: {
            [EScreenSize.large]: 80,
            [EScreenSize.medium]: 40,
            [EScreenSize.small]: 20,
        },
    };

    const spring = useSpring({
        borderColor: theme.colors.gray[4],
    });



    return (
        <>
            <Stack gap={stackStyles.spacing[screenSize]}>
                <Flex
                    maw={appConfig.layout.containerWidth}
                    w="100%"
                    m="auto"
                    h={`calc(100vh - ${appConfig.layout.headerHeight}px - 400px)`}
                    p="lg"
                    justify="center"
                >
                    <Stack gap={50} py={stackStyles.py[screenSize]} align="center" pos="relative">
                        <Title ff={`"Reddit Sans", sans-serif`} fw="700" maw={1000} w="100%" c="text" order={1} fz={54}>
                            {appConfig.slogan}
                        </Title>
                        <Group maw={1000} w="100%" gap="xl">
                            <Text fz={26} fw="500" c="text">
                                {appConfig.description[0]}
                            </Text>
                            <Text fz={20} c="text">
                                {appConfig.description[1]}
                            </Text>
                        </Group>
                        <animated.div
                            style={{
                                borderRadius: 34,
                                height: 104,
                                borderWidth: 2,
                                marginTop: 100,
                                borderStyle: "solid",
                                ...spring,
                            }}
                        >
                            <Button
                                variant="gradient"
                                gradient={{ from: "#e9d8e3", to: "#e5f1eb" }}
                                className={classes.hero_button}
                                radius="xl"
                                size="xl"
                                c="textFixed"
                            >
                                Improve your CV
                            </Button>
                        </animated.div>
                    </Stack>
                </Flex>
                <Wave />
            </Stack>
            {appConfig.sections.map((s, i) => (
                <Section key={i} scrollTo={s.to} items={s.items} columns={s.columns} />
            ))}
        </>
    );
};

export default Home;
