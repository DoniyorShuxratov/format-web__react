import Instagram from "../../public/Icons/instagram";
import Mail from "../../public/Icons/mail";
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
                        <h4>Telefon raqam</h4><br /><br />
                        <h3>+998(97)485-40-30</h3>
                    </div>
                    <div className="footer-link">
                        <div className="footer-link__title">
                            <h3>Ijtimoiy tarmoqlar</h3>
                        </div>
                        <div className="footer-link__list">
                            <div className="footer-link__list--item">
                                <p>Email: format@mohirdev.com</p>
                            </div>
                            <div className="footer-link__list--item">
                                <p>Telegram: @format_mohirdev</p>
                            </div>
                            <div className="footer-link__list--item">
                                <p>Instagram: @format.mohirdev</p>
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
