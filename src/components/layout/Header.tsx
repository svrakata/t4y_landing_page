import {
    Container,
    Group,
    Burger,
    Switch,
    useMantineTheme,
    useMantineColorScheme,
    Drawer,
    Stack,
    Button,
    ActionIcon,
    Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HEADER_HEIGHT } from "../../constants/layout";
import { useNavigate } from "react-router-dom";
import useSchemeColors from "../../hooks/useSchemeColors";
import { useState } from "react";
import { IconSun, IconMoonStars, IconX } from "@tabler/icons-react";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";


interface HeaderSimpleProps {
    links: { link: string; label: string }[];
}

const Header = ({ links }: HeaderSimpleProps) => {
    const [opened, { toggle, close }] = useDisclosure(false);
    const colors = useSchemeColors();
    const theme = useMantineTheme();
    const { colorScheme, setColorScheme } = useMantineColorScheme();
    const [checked, setChecked] = useState(colorScheme === "light");
    const navigate = useNavigate();

    return (
        <Box
            h={HEADER_HEIGHT}
            bg={colors.background}
            style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 99999 }}
        >
            <Container size="xl">
                <Group p="apart">
                    <Group gap={4} onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        <Logo fill={colors.text} />
                    </Group>
                    <Group gap="lg">
                        <Group gap={4} >
                            {links.map((link, i) => (
                                <HeaderMenu key={i} to={link.link} label={link.label} />
                            ))}
                        </Group>
                        <Switch
                            size="md"
                            onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.dark[4]} />}
                            offLabel={<IconMoonStars size="1rem" stroke={2.5} color={theme.colors.dark[0]} />}
                            checked={checked}
                            onChange={(event) => {
                                setChecked(event.currentTarget.checked);
                                setColorScheme(event.currentTarget.checked ? "light" : "dark");
                            }}
                        />
                        <Burger opened={opened} onClick={toggle} size="sm" />
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
                                <Group p="apart">
                                    <Group gap={4}>
                                        <Logo fill={colors.text} />
                                    </Group>
                                    <Group>
                                        <Switch
                                            size="md"
                                            onLabel={<IconSun size="1rem" stroke={2.5} color={theme.colors.dark[4]} />}
                                            offLabel={
                                                <IconMoonStars size="1rem" stroke={2.5} color={theme.colors.dark[0]} />
                                            }
                                            checked={checked}
                                            onChange={(event) => {
                                                setChecked(event.currentTarget.checked);
                                                setColorScheme(event.currentTarget.checked ? "light" : "dark");
                                            }}
                                        />
                                        <ActionIcon onClick={close}>
                                            <IconX color="black" />
                                        </ActionIcon>
                                    </Group>
                                </Group>
                                <Stack gap={8}>
                                    {links.map((l, index) => {
                                        return (
                                            <Button
                                                onClick={() => {
                                                    navigate(l.link);
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
            </Container>
        </Box>
    );
};

export default Header;
