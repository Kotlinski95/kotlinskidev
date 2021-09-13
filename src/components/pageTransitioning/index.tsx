import styled from 'styled-components';
import { motion } from "framer-motion";

const transition = { duration: 1.3, ease: "easeInOut" };
const variants = {
    initial: {
        y: 0,
        opacity: 0.9,
        transition: transition
    },
    initialFirst: {
        y: 0,
        opacity: 0.9,
        delay: 1,
        transition: transition
    },
    animate: {
        y: "-100%",
        opacity: 0,
        transition: transition
    },
    animateFirst: {
        y: "100%",
        opacity: 0,
        transition: transition
    },
    exit: {
        y: 0,
        opacity: 0,
        transition: transition
    },
};

const TransitionHelper = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
`

const InitialTransition = styled(TransitionHelper).attrs(() => ({
    className: 'transition-helper',
    initial: "initialFirst",
    variants,
    animate: "animateFirst",
    exit: "exit"
}))`
`;

const ExitTransition = styled(TransitionHelper).attrs(() => ({
    className: 'transition-helper',
    initial: "initial",
    variants,
    animate: "animate",
    exit: "exit"
}))`
`;

const PageTransitioning = () => {
    return (
        <>
            <InitialTransition/>
            <ExitTransition />
        </>
    )
};

export default PageTransitioning;