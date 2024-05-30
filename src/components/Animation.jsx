import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';

export function UseInViewAnimation() {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControl = useAnimation();

    useEffect(() =>{
        if (isInView){
            mainControl.start('visable')
        }
    }, [isInView])

    return { ref, mainControl };
}