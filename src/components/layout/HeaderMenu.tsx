import classes from "./Layout.module.css";

import { Anchor, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface Props {
    to: string;
    label: string;
}

const HeaderMenu: React.FC<Props> = (props) => {
    const { to, label } = props;
    return (
        <Anchor component={NavLink} to={to} style={{ textDecoration: "none" }}>
            {({ isActive }) => (
                <Text
                    className={classes.header_menu_text}
                    fw="bold"
                    px="xs"
                    py={3}
                    lh={1}
                    c="text"
                    style={{ textDecoration: isActive ? "underline" : "none" }}
                >
                    {label}
                </Text>
            )}
        </Anchor>
    );
};

export default HeaderMenu;
