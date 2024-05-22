import Instagram from "../../public/Icons/instagram";
import Mail from "../../public/Icons/mail";
import Telegram from "../../public/Icons/telegram";

export function Footer(){
    return (
        <>
            <footer className="footer-section">
                <div className="line-ticker">
                    <hr />
                        <div className="line-ticker__list">
                            <div className="line-ticker__list--text"></div>
                            <div className="line-ticker__list--text"></div>
                            <div className="line-ticker__list--text"></div>
                            <div className="line-ticker__list--text"></div>
                        </div>
                    <hr />
                </div>
            </footer>
        </>
    )
}