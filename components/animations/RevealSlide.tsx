import React, {useEffect, useRef} from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: React.ReactNode;
    width: "fit-content" | "100%"
}

export const RevealSlide = ({ children, width = "fit-content"}:Props) => {
    return(
        <>
            {children}
        </>
    )
}
