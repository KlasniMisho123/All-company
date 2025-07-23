import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: React.ReactNode;
    width: "fit-content" | "100%"
    direction: "left" | "right" | "up"
}

export const RevealSlide = ({ children, width = "fit-content", direction = "up"}:Props) => {
   const ref = useRef(null)
   const inView = useInView(ref, {once:true});

   const mainControls = useAnimation();
//    const slideControls = useAnimation();

   useEffect(() => {
    if(inView) {
        mainControls.start("visible")
    }
   }, [inView, mainControls])

    return(
        <div ref={ref} style={{ position: "relative", width, overflow:"hidden" }}>
            <motion.div
                variants={{
                    hidden: {opacity:0, y:75},
                    visible: {opacity:1, x:0, y:0},
                    hiddenLeft: {opacity:0, x:"100%"},
                    visibleCenter: {opacity:1, x:0, y:0},
                    hiddenRight: {opacity:0, x:"100%"},
                }}
                initial={direction=="up"? "hidden": (direction == "left"? "hiddenLeft":(direction == "right"? "hiddenRight":""))}
                animate={mainControls}
                transition={{ duration: 0.5, delay:0.25 }}
            >
                {children}
            </motion.div>
            {/* <motion.div
                variants={{
                    hidden: {left:0},
                    visible: {left:"100%"},
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, delay:0.25 }}
            >
                {children}
            </motion.div> */}
        </div>
    );
};
