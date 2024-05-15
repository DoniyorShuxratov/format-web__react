import {CardTopStyle} from './CardTopStyle'

export function Hero() {
    return (
        <>
            <section id='heroSection' className="hero container">
                <div className="hero__left">
                    <h1>
                        Tayyor Informatika <br />
                        Darsliklar va <br />
                        Dasturlar<br />
                    </h1>
                    <div className="hero__left--ptn">
                        <img src="./Images/rec_1.png" alt="" />
                    </div>
                </div>
                <div className="hero__right">
                    <div className="hero__right--content def-box box-t-50">
                        <CardTopStyle />
                        <img src="./Images/hero_img.png" alt="" />
                        <div className="hero__right--actives">
                            <h2>Ushbu Taqdimotlarni qo'lga kiriting</h2>
                            <button className='def-box def-box-blue'><h2>Sotib olish!</h2></button>
                        </div>
                    </div>
                </div>
                <div className="hero-info">
                    <div className="hero-info__card empt-box">
                        <div className="hero-info__card--text">
                            <p>Dars Soni:</p>
                            <h1>62</h1>
                        </div>
                    </div>
                    <div className="hero-info__card empt-box">
                        <div className="hero-info__card--text">
                            <p>Dars Soni:</p>
                            <h1>62</h1>
                        </div>
                    </div>
                    <div className="hero-info__card empt-box">
                        <div className="hero-info__card--text">
                            <p>Dars Soni:</p>
                            <h1>62</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    ) 
}