import { CardTopStyle } from "./CardTopStyle";

export function About() {
    return (
        <>
            <section id="aboutSection" className="about-section container">
                <div className="about-title def-box def-box-light box-t-50">
                    <CardTopStyle />
                    <h1>Biz Haqimizda ozgina ma'lumot</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore officiis quas vero dolorum, voluptatum laborum nostrum! Quaerat, nemo architecto. Explicabo sunt, obcaecati reprehenderit velit repudiandae at iure esse incidunt consequuntur?</p>
                </div>
            </section>
        </>
    )
}