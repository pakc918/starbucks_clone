import Link from 'next/link'

export default function item() {
    return (
        <>
            <div className="container">
                <header>
                    <div className="header-top-item">
                        <div className="back-icon">
                            <Link href="/"><img src="assets/images/icons/back.png" alt="뒤로가기" /></Link>
                        </div>
                        <h1><Link href="/">온라인 스토어</Link></h1>
                        <nav>
                            <ul>
                                <li><Link href="/search"><img src="assets/images/icons/search.svg" /></Link></li>
                                <li><img src="assets/images/icons/shopping-cart.svg" /></li>
                                <li><Link href="/mypage"><img src="assets/images/icons/user.svg" /></Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section id="item-event-banner">
                    <div className="event-banner">
                        <div className="event-banner__item">
                            <div className="event-banner__item__img">
                                <img className="item_img" src="https://shop-phinf.pstatic.net/20230213_282/1676250820294ccH77_JPEG/77386648106178298_1928937226.jpg?type=m510" alt="23 SS 체리 콕시클 라벤더 콜드컵 591ml" />
                            </div>
                        </div>
                    </div>
                </section>
                <section id="recommand-md">
                    <div>
                        <div className="item-info">
                            <div>
                                <p className="item-info-1"><b>23 SS 체리 콕시클 라벤더 콜드컵 591ml </b><span className="item-new"> New</span></p>
                            </div>
                            <div>
                                <button className="openBtn"><img src="assets/images/icons/share.svg" /></button>
                            </div>
                        </div>
                        <div>
                            <p className="item-info-2">라일락이 떠오르는 퍼플 컬러로 구성된 591ml 용량의 찬 음료 전용 콜드컵입니다.</p>
                        </div>
                        <div>
                            <p className="item-info-1"><b>55,000원</b></p>
                        </div>
                    </div>
                </section>
                <section id="recommand-md2">
                    <div>
                        <p className="item-product-info"><b>상품 정보</b></p>
                    </div>
                    <div className="border-color">
                        <img src="https://prod-starbucks-product-details.s3.ap-northeast-2.amazonaws.com/naver/product/11140349.jpg" />
                    </div>
                    <div>
                        <img src="assets/images/item_information/item_information1.png" />
                    </div>
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information2.png" />
                    </div>
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information3.png" />
                    </div>
                    <div >
                        <img src="assets/images/item_information/item_information4.png" />
                    </div>
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information5.png" />
                    </div>
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information6.png" />
                    </div>
                </section>

                <footer className="item-footer">
                    <div className="item-buy-btn">
                        <p>구매하기</p>
                    </div>
                </footer>
            </div>
        </>
    )
}
