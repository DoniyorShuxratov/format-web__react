import ArrowTopRight from "../../public/Icons/arrow_top_right";

export function Products() {
    return (
        <>
            <section id="productSection" className="product-section container">
                <div className="">
                    <h2>Produktlar</h2>
                </div>
                <div className="product-list">
                    <div className="product-card">
                        <div className="product-card__img">
                            <img src="./Images/inst_c-1.png" alt="" />
                        </div>
                        <div className="product-card__text">
                            <div className="product-card__text--left">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <ArrowTopRight />
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card__img">
                            <img src="./Images/inst_c-1.png" alt="" />
                        </div>
                        <div className="product-card__text">
                            <div className="product-card__text--left">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <ArrowTopRight />
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card__img">
                            <img src="./Images/inst_c-1.png" alt="" />
                        </div>
                        <div className="product-card__text">
                            <div className="product-card__text--left">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <ArrowTopRight />
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-card__img">
                            <img src="./Images/inst_c-1.png" alt="" />
                        </div>
                        <div className="product-card__text">
                            <div className="product-card__text--left">
                                <h2>Lorem ipsum</h2>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <ArrowTopRight />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}