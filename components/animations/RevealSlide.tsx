import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: React.ReactNode;
    width: "fit-content" | "100%"
}

export const RevealSlide = ({ children, width = "fit-content"}:Props) => {
    return(
        <div style={{ position: "relative", width, overflow:"hidden" }}>
            <motion.div
                variants={{
                    hidden: {opacity:0, y:75},
                    visible: {opacity:1, y:0},
                }}
                initial="hidden"
                animate="visible"
                transition={{}}
            >
                {children}</motion.div>
        </div>
    );
};
