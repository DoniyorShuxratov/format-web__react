import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';

export function UseInViewAnimation() {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const mainControl = useAnimation();

    useEffect(() =>{
        if (isInView){
            mainControl.start('visable')
        }
    }, [isInView])

    return { ref, mainControl };
}