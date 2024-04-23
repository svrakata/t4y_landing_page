import { Text } from "@mantine/core";
import { NavLink } from "react-router-dom";
import useSchemeColors from "../../hooks/useSchemeColors";

interface Props {
    to: string;
    label: string;
}

const HeaderMenu: React.FC<Props> = (props) => {
    const { to, label } = props;
    const colors = useSchemeColors();
    return (
        <NavLink to={to} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
                <Text
                    px="xs"
                    py={3}
                    c={colors.text}
                    bg={isActive ? colors.headerNavBgActive : colors.headerNavBg}
                >
                    {label}
                </Text>
            )}
        </NavLink>
    );
};

export default HeaderMenu;
