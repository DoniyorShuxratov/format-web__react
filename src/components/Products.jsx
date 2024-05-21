import ArrowTopRight from "../../public/Icons/arrow_top_right";

export function Products() {
    return (
        <>
            <section id="productSection" className="product-section container">
                <div className="product-title">
                    <h2>Produktlar</h2>
                </div>
                <div className="product-list">
                    <div className="product-list__top">
                        <div className="product-card">
                            <div className="product-card__img">
                                <img src="./Images/img_card.png" alt="" />
                            </div>
                            <div className="product-card__text">
                                <div className="product-card__text--left">
                                    <h3>Lorem ipsum</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <ArrowTopRight />
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-card__img">
                                <img src="./Images/img_card.png" alt="" />
                            </div>
                            <div className="product-card__text">
                                <div className="product-card__text--left">
                                    <h3>Lorem ipsum</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <ArrowTopRight />
                            </div>
                        </div>
                    </div>
                    <div className="product-list__bottom">
                        <div className="product-card">
                            <div className="product-card__img">
                                <img src="./Images/img_card.png" alt="" />
                            </div>
                            <div className="product-card__text">
                                <div className="product-card__text--left">
                                    <h3>Lorem ipsum</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <ArrowTopRight />
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-card__img">
                                <img src="./Images/img_card.png" alt="" />
                            </div>
                            <div className="product-card__text">
                                <div className="product-card__text--left">
                                    <h3>Lorem ipsum</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <ArrowTopRight />
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
        </>
    )
}