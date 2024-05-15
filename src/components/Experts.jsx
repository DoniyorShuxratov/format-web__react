import { CardTopStyle } from "./CardTopStyle";
import { FaUserGraduate } from "react-icons/fa";

export function Experts() {
    return (
        <>
            <section id="exportSection" className="exports-section">
                <div className="exports container">
                    <div className="exports-list">
                        <div className="export-card def-box def-box-blue box-t-50">
                            <CardTopStyle/>
                            <div className="export-card__img">
                                <img src="./Images/inst_c-3.png" alt="" />
                            </div>
                            <div className="export-card__content">
                                <div className="export-card__content--name">
                                    <h2>Lorem Ipsum</h2>
                                    <FaUserGraduate scale={25} color="#E9E9F6"/>
                                </div>
                                <div className="export-card__content--text">
                                    <p>" Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="export-card def-box def-box-blue box-t-50">
                            <CardTopStyle/>
                            <div className="export-card__img">
                                <img src="./Images/inst_c-3.png" alt="" />
                            </div>
                            <div className="export-card__content">
                                <div className="export-card__content--name">
                                    <h2>Lorem Ipsum</h2>
                                    <FaUserGraduate scale={25} color="#E9E9F6"/>
                                </div>
                                <div className="export-card__content--text">
                                    <p>" Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                        <div className="export-card def-box def-box-blue box-t-50">
                            <CardTopStyle/>
                            <div className="export-card__img">
                                <img src="./Images/inst_c-3.png" alt="" />
                            </div>
                            <div className="export-card__content">
                                <div className="export-card__content--name">
                                    <h2>Lorem Ipsum</h2>
                                    <FaUserGraduate scale={25} color="#E9E9F6"/>
                                </div>
                                <div className="export-card__content--text">
                                    <p>" Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}