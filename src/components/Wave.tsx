import { useMantineTheme } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useEffect, useRef } from "react";



const Wave: React.FC = () => {
    const [scroll] = useWindowScroll();
    const ref = useRef<SVGPathElement>(null);
    const phase1 = useRef(0);
    const phase2 = useRef(0);
    const phase3 = useRef(0);
    const phase4 = useRef(0);
    const theme = useMantineTheme();

    const generateWavePath = () => {
        let pathData = `M 0 20 `;
        // const maxAmplitude = 3; // Maximum amplitude based on scroll
        // const minAmplitude = 1
        // const amplitude = minAmplitude + (maxAmplitude - minAmplitude) * scrollPercentage; // Calculate dynamic amplitude


        for (let x = 0; x <= 100; x += 0.1) {
            let y = 7;
            // Distinct waves with different frequencies and phases
            y += Math.sin(0.12 * (x - phase1.current)); // Lower frequency, higher amplitude
            y += Math.sin(0.09 * (x - phase2.current)); // Slightly faster frequency, lower amplitude
            y += Math.sin(0.15 * (x - phase3.current)); // Even faster, smaller amplitude
            y += Math.sin(0.17 * (x - phase4.current)); // Even faster, smaller amplitude
                
            pathData += `L ${x} ${y} `;
        }
        pathData += "L 100 20 Z"; // Return to bottom-right corner and close the path
        return pathData;
    };

    useEffect(() => {
        const updateWave = () => {
            const path = ref.current;
            if (path === null) {
                return;
            }

            const scrollPercentage = scroll.y / (document.body.scrollHeight - window.innerHeight);
            phase1.current = scrollPercentage * 320;
            phase2.current = scrollPercentage * 220;
            phase3.current = scrollPercentage * 120;
            phase4.current = scrollPercentage * 20;
            const newPath = generateWavePath();
            path.setAttribute("d", newPath);
        };
        updateWave();
    }, [scroll.y]);

    return (
        <svg viewBox="0 0 100 20">
            <path ref={ref} fill={`${theme.colors.bgDark[5]}99`}></path>
        </svg>
    );
};

export default Wave;
