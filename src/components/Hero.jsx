import {CardTopStyle} from './CardTopStyle'

export function Hero() {
    return (
        <>
            <section id='heroSection' className="hero container">
                <div className="hero-top">
                    <div className="hero__left">
                        <h1>
                            Tayyor <b>Informatika </b><br />
                            Darsliklar va <br />
                            <b>Dasturlarb</b><br />
                        </h1>
                        <div className="hero__left--pattern">
                            <img src="./Images/rec_1.png" alt="" />
                        </div>
                        <button className='btn-def'>Sotib olish</button>
                    </div>
                    <div className="hero__right">
                        <img src="./Images/web-hero-2.png" alt="" />
                    </div>
                </div>
            </section>
        </>
    ) 
}