import ArrowTopRight from "../../public/Icons/arrow_top_right";
import InformationCircle from "../../public/Icons/information_circle";
import { CardTopStyle } from "./CardTopStyle";

export function About() {
    return (
        <>
            <section id="aboutSection" className="about-section container">
                <div className="about__card def-box def-box-light">
                    <div className="about__card--top">
                        <h2>Biz Haqimizda</h2>
                        <InformationCircle/>
                    </div>
                    <hr />
                    <div className="about__card--text">
                        <h3>Lorem ipsum dolor fit amet</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis quas vero dolorum, voluptatum laborum nostrum! Quaerat, nemo architecto. Explicabo sunt, obcaecati reprehenderit velit repudiandae at iure esse incidunt consequuntur?</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis quas vero dolorum, voluptatum laborum nostrum! Quaerat, nemo architecto. Explicabo sunt, obcaecati reprehenderit velit repudiandae at iure esse incidunt consequuntur?</p>
                    </div>
                    <div className="about__card--button">
                        <button className="btn btn-empt"><ArrowTopRight/> Yaqinroq tanishing</button>
                    </div>
                </div>
                <div className="about__video">
                    <div className="def-box def-box-light">
                        <div className="vieo">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}