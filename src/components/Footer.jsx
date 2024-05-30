import Instagram from "../../public/Icons/instagram";
import Mail from "../../public/Icons/mail";
import Phone from "../../public/Icons/phone";
import Telegram from "../../public/Icons/telegram";
import HeartPt from "../../public/Pattern/heart";

export function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="line-ticker">
                    <hr />
                    <div className="line-ticker__wrapper">
                        <div className="line-ticker__list">
                            {Array(10).fill().map((_, index) => (
                                <div className="line-ticker__list--text" key={index}>
                                    <HeartPt />
                                    <h3>Biz bilan bog'laning</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="footer-container container">
                    <div className="footer-phone">
                        <div className="footer-phone__title">
                            <Phone size={30}/>
                            <h3> Telefon raqam</h3>
                        </div>
                        <div className="footer-phone__number">
                            <h3><a href="tel:+998974854030">+998(97)485-40-30</a></h3>
                        </div>
                    </div>
                    <div className="footer-link">
                        <div className="footer-link__title">
                            <h3>Ijtimoiy tarmoqlar</h3>
                        </div>
                        <div className="footer-link__list">
                            <div className="footer-link__list--item">
                                <Telegram/> 
                                <p>@format_mohirdev</p>
                            </div>
                            <div className="footer-link__list--item">
                                <Instagram/>
                                <p>@format.mohirdev</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-mark container">
                    <hr />
                    <div className="footer-mark__text">
                        <p>Copyright © 2024 Format | Mohirdev</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
