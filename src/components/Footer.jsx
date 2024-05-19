import Instagram from "../../public/Icons/instagram";
import Mail from "../../public/Icons/mail";
import Telegram from "../../public/Icons/telegram";

export function Footer(){
    return (
        <>
            <footer className="footer-section">
                <div className="footer container">
                    <div className="footer__left">
                        <div className="footer__left--phone">
                            <p>Aloqa uchun</p>
                            <h2>+998(90)695-29-09</h2>
                        </div>
                        <div className="footer__left--links">
                            <div className="footer__left--top">
                                <h3>Bizni kuzating</h3>
                            </div>
                            <div className="footer__left--list">
                                <div className="footer__left--row"><Mail/> format@mohirdev.com</div>
                                <div className="footer__left--row"><Telegram/>fromat_mohirdev</div>
                                <div className="footer__left--row"><Instagram/>fromat.mohirdev</div>
                            </div>
                       </div>
                    </div>
                    <div className="footer__right">
                        <hr />
                        <p>Foramt project @ 2024</p>
                    </div>
                </div>
            </footer>
        </>
    )
}