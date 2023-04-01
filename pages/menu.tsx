import React from 'react'

export default function menu() {
    return (
        <>
            <header className="menu-header">
                <div className="menu-header-top">
                    <a href="index.html"><img src="https://cdn-icons-png.flaticon.com/512/864/864393.png"/></a>
                </div>
                <div className="menu-header-bottom">
                    <a>Welcome!</a>
                </div>
                <div className="menu-header-sub">
                    <a>온라인 스토어에 오신 것을 환영합니다.</a>
                </div>
            </header>

            <section className="menu-section">
                <section className="menu-section-top">
                    <div>
                        <a href="">전체 상품 보기 {">"}</a>
                    </div>
                </section>
                <section className="menu-section-mid">
                    <div className="menu-product-list">
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>케이크</p>
                            </div>
                        </div>
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>텀블러/보온병</p>
                            </div>
                        </div>
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>머그/컵</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="menu-section-bot">
                    <div className="menu-product-list">
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>라이프스타일</p>
                            </div>
                        </div>
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>티/커피용품</p>
                            </div>
                        </div>
                        <div className="menu-product-item">
                            <div className="product-img">
                                <img src="assets/images/double_cake.jpg"/>
                            </div>
                            <div className="product-info">
                                <p>세트</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <footer className="menu-footer">
                <div className="menu-footer-top">
                    <a href="special.html">
                        <div className="menu-footer-top-button">
                            <div className="menu-footer-top-button-description">
                                <span>기획전</span>
                                <p>진행중인 기획전을 만나보세요.</p>
                            </div>
                            <img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" />
                        </div>
                    </a>
                    <a href="best.html">
                        <div className="menu-footer-top-button2">
                            <div className="menu-footer-top-button2-description">
                                <span>베스트</span>
                                <p>스타벅스의 베스트 상품을 만나보세요.</p>
                            </div>
                            <img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" />
                        </div>
                    </a>
                </div>
            </footer>
        </>
    )
}
