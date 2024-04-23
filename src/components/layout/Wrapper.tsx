import { ReactNode } from "react";
import Header from "./Header";
import { Box, Container } from "@mantine/core";
import useSchemeColors from "../../hooks/useSchemeColors";
import { HEADER_HEIGHT } from "../../constants/layout";
import Footer from "./Footer";
import { EMenuDestination } from "../../types";

interface Props {
    children: ReactNode;
    container?: boolean;
}

const Wrapper: React.FC<Props> = (props) => {
    const { container } = props;
    const colors = useSchemeColors();
    const links: { link: string; label: string }[] = [
        {
            label: "Home",
            link: `${EMenuDestination.home}`,
        },
        {
            label: "What we do",
            link: `${EMenuDestination.whatWeDo}`,
        },
        {
            label: "GPT Solutions",
            link: `${EMenuDestination.gptSolutions}`,
        },
        {
            label: "Applications",
            link: `${EMenuDestination.industryApplications}`,
        },
        {
            label: "Zmei solutions",
            link: `${EMenuDestination.zmeiSolutions}`,
        },
        {
            label: "Pricing",
            link: `${EMenuDestination.pricing}`,
        },
        {
            label: "Contact us",
            link: `${EMenuDestination.contact}`,
        },
    ];

    return (
        <Box bg={colors.background} mih={`calc(100vh - ${HEADER_HEIGHT}px)`}>
            <Header links={links} />
            <Box pb={140}>
                {container && <Container size="md">{props.children}</Container>}
                {!container && <>{props.children}</>}
            </Box>
            <Footer />
        </Box>
    );
};

export default Wrapper;
