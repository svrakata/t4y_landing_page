import { Stack, SimpleGrid, Box, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import useGetScreenSize, { EScreenSize } from "../hooks/useGetScreenSize";
import useScrollToSection from "../hooks/useScrollToSection";
import { SectionItem } from "../types";
import SectionHeader from "./SectionHeader";
import ImageTextCard from "./cards/ImageTextCard";
import { useAppState } from "../state/app";
import { IconAffiliate, IconAnalyze, IconNeedleThread, IconNotification, IconPuzzle, IconRobot, IconScan, IconShare, IconSquareRoundedCheck, IconTrendingUp3, IconWand, IconWorldLatitude } from "@tabler/icons-react";

interface SectionProps {
    label?: string;
    scrollTo: string;
    items?: SectionItem[];
    columns?: number;
}

const Section: React.FC<SectionProps> = (props) => {
    const { label, scrollTo, items = [], columns = 1 } = props;
    const appConfig = useAppState((state) => state.appConfig);
    const scrollRef = useScrollToSection(scrollTo);
    const screenSize = useGetScreenSize();
    const cardOrientation = screenSize === EScreenSize.small ? "vertical" : "horizontal";
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme({ keepTransitions: true });

    const icons: any = {
        wand: (color: string, size: number) => <IconWand size={size} color={color} stroke={1} />,
        puzzle: (color: string, size: number) => <IconPuzzle size={size} color={color} stroke={1} />,
        analyze: (color: string, size: number) => <IconAnalyze size={size} color={color} stroke={1} />,
        improvement: (color: string, size: number) => <IconTrendingUp3 size={size} color={color} stroke={1} />,
        tailored: (color: string, size: number) => <IconNeedleThread size={size} color={color} stroke={1} />,
        global: (color: string, size: number) => <IconWorldLatitude size={size} color={color} stroke={1} />,
        credibility: (color: string, size: number) => <IconScan size={size} color={color} stroke={1} />,
        robot: (color: string, size: number) => <IconRobot size={size} color={color} stroke={1} />,
        notification: (color: string, size: number) => <IconNotification size={size} color={color} stroke={1} />,
        affiliate: (color: string, size: number) => <IconAffiliate size={size} color={color} stroke={1} />,
        share: (color: string, size: number) => <IconShare size={size} color={color} stroke={1} />,
        check: (color: string, size: number) => <IconSquareRoundedCheck size={size} color={color} stroke={1} />,
    }

    const sectionBgColor = colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.bgDark[5];

    return (
        <Stack p="lg" pb={180} gap={60} ref={scrollRef} bg={`${sectionBgColor}99`}>
            {label && <SectionHeader>{label}</SectionHeader>}
            <Box maw={appConfig.layout.containerWidth} w="100%" m="auto">
                <SimpleGrid cols={columns} spacing="lg">
                    {items.map((s, i) => (
                        <ImageTextCard
                            key={i}
                            orientation={cardOrientation}
                            imageUrl={s.imageUrl}
                            title={s.title}
                            subtitle={s.subtitle}
                            text={s.description}
                            icon={icons[s.icon]}
                        />
                    ))}
                </SimpleGrid>
            </Box>
        </Stack>
    );
};

export default Section;
