import { useScrollIntoView, useWindowScroll } from "@mantine/hooks";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// const easeInBack = (x: number): number => {
//     const c1 = 1.70158;
//     const c3 = c1 + 1;

//     return c3 * x * x * x - c1 * x * x;
// };
// const easeInOutCubic = (x: number): number => {
//     return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
// };
// const easeOutQuart = (x: number): number => {
//     return 1 - Math.pow(1 - x, 4);
// };

// function easeInOutQuart(x: number): number {
//     return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
// }

// function easeInOutCirc(x: number): number {
//     return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
// }
function easeInOutExpo(x: number): number {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
}

const SECTION_SCROLL_OFFSET = 60;
const SCROLL_DURATION = 400;

const useScrollToSection = (destination: any) => {
    const { pathname } = useLocation();
    const [scroll, scrollTo] = useWindowScroll();
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: SECTION_SCROLL_OFFSET,
        duration: SCROLL_DURATION,
        easing: easeInOutExpo,
    });
    console.log(scroll)
    useEffect(() => {
        if (pathname === destination) {
            scrollIntoView();
        }
        return () => {
            scrollTo({ x: 0, y: 0 });
        };
    }, [pathname]);

    return targetRef;
};

export default useScrollToSection;
