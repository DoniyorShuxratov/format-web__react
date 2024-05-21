
import { useInView, motion as m, useAnimation } from "framer-motion";
export function Billboard() {
    return (
        <>
            <m.section
            className="bilboard">
                <div className="bilboard-img">
                    <img src="./Images/billboard_1.png" alt="" />
                </div>
            </m.section>
        </>
    )

}