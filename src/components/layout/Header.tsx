import {
    Group,
    Burger,
    Switch,
    useMantineTheme,
    useMantineColorScheme,
    Drawer,
    Stack,
    Button,
    ActionIcon,
    Text,
    Box,
    Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import useSchemeColors from "../../hooks/useSchemeColors";
import { IconSun, IconMoonStars, IconX } from "@tabler/icons-react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import { useAppState } from "../../state/app";

interface HeaderSimpleProps {
    links: { to: string; label: string }[];
}

const Header = ({ links }: HeaderSimpleProps) => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const appConfig = useAppState((state) => state.appConfig);
    const colors = useSchemeColors();
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme({ keepTransitions: true });
    const navigate = useNavigate();

    const iconColor = colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[4];

    return (
        <Group h={appConfig.layout.headerHeight} bg="transparent" align="center">
            <Box maw={appConfig.layout.containerWidth} w="100%" m="auto" p="lg" style={{ zIndex: 99999 }}>
                <Group justify="space-between">
                    <Group gap={50} style={{ cursor: "pointer" }}>
                        <Text fz={28} fw="bold" onClick={() => navigate("/")} c="text">
                            {appConfig.title}
                        </Text>
                        <Group
                            gap="md"
                            p="lg"
                            style={(theme) => ({
                                borderRadius: theme.radius.xl,
                                boxShadow: `0px 0px 22px rgba(0,0,0,0.1)`,
                            })}
                            bg="box"
                            visibleFrom="md"
                        >
                            {links.map((link, i) => (
                                <HeaderMenu key={i} to={link.to} label={link.label} />
                            ))}
                        </Group>
                    </Group>
                    <Group gap="lg">
                        <Group gap={60} visibleFrom="md">
                            <Group gap="xl">
                                <Anchor c="text" href="https://t4y.bioseek.eu/en/register">
                                    Sign in
                                </Anchor>
                                <Anchor c="text" href="https://t4y.bioseek.eu/en/register">
                                    Register
                                </Anchor>
                            </Group>
                            <Switch
                                size="md"
                                color="gray.9"
                                onLabel={<IconSun size="1rem" stroke={2.5} color={iconColor} />}
                                offLabel={<IconMoonStars size="1rem" stroke={2.5} color={iconColor} />}
                                onChange={toggleColorScheme}
                                visibleFrom="md"
                                defaultChecked
                            />
                        </Group>
                        <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="md" />
                        <Drawer
                            opened={opened}
                            onClose={close}
                            position="right"
                            size="sm"
                            zIndex={999999}
                            withCloseButton={false}
                            padding="xs"
                        >
                            <Stack>
                                <Group justify="space-between">
                                    <Group gap={4}>
                                        <Logo fill={colors.text} />
                                    </Group>
                                    <Group>
                                        <Switch
                                            size="md"
                                            onLabel={<IconSun size="1rem" stroke={2.5} color={iconColor} />}
                                            offLabel={<IconMoonStars size="1rem" stroke={2.5} color={iconColor} />}
                                            onChange={toggleColorScheme}
                                            defaultChecked
                                        />
                                        <ActionIcon variant="transparent" onClick={close}>
                                            <IconX color="black" />
                                        </ActionIcon>
                                    </Group>
                                </Group>
                                <Stack gap={8}>
                                    {links.map((l, index) => {
                                        return (
                                            <Button
                                                onClick={() => {
                                                    navigate(l.to);
                                                    close();
                                                }}
                                                key={index}
                                            >
                                                {l.label}
                                            </Button>
                                        );
                                    })}
                                </Stack>
                            </Stack>
                        </Drawer>
                    </Group>
                </Group>
            </Box>
        </Group>
    );
};

export default Header;
