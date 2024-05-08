import { ReactNode } from "react";
import classes from "./Layout.module.css";

import Header from "./Header";
import { Box, Container } from "@mantine/core";
import Footer from "./Footer";
import { useAppState } from "../../state/app";

interface Props {
    children: ReactNode;
    container?: boolean;
}

const Wrapper: React.FC<Props> = (props) => {
    const { container } = props;
    const appConfig = useAppState((state) => state.appConfig);

    return (
        <Box bg="bg" className={classes.wrapper}>
            <Header links={appConfig.headerMenus} />
            <Box>
                {container && <Container size="md">{props.children}</Container>}
                {!container && <>{props.children}</>}
            </Box>
            <Footer />
        </Box>
    );
};

export default Wrapper;
