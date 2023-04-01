import ProductListCard from "@/components/ui/ProductListCard";
import ProductCategory from "@/components/widgets/ProductCategory";

export default function listview() {

    // postman 에서 공백 혹은 띄워쓰기 처리 방식

    return (
        <>
            <header />
            <div className="header-top"/>
            <ProductCategory />
            <div style={{display:'flex', justifyContent:"end"}}>
            <select style={{display:"flex",}}>
                <option value="1">신상품순</option>
                <option value="2">추천순</option>
                <option value="3">낮은가격순</option>
                <option value="4">높은가격순</option>
            </select>
            </div>
            <section id="searchresult_section_product">
                <div className="searchresult-product-list">
                    <div className="searchresult-product-item">
                        <div className="searchresult-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20210914_1/16315986291206EJHr_JPEG/32734471814575345_1923131179.jpg?type=m510"
                                alt="[4+1] SS 그린 사이렌 원핸드 텀블러 473ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">[4+1] SS 그린 사이렌 원핸드 텀블러 473ml</p>
                            <p className="item-price"><span>132,000</span>원</p>
                        </div>
                    </div>
                    <div className="searchresult-product-item2">
                        <div className="searchresult-product-item__img">
                            <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9300000004104]_20220810152652583.jpg"
                                alt="[4+1] 파스텔 블루 텀블러 473ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">[4+1] 파스텔 블루 텀블러 473ml</p>
                            <p className="item-price"><span>64,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="searchresult_section_product">
                <div className="searchresult-product-list">
                    <div className="searchresult-product-item">
                        <div className="searchresult-product-item__img">
                            <img src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9300000004105]_20220810152839570.jpg"
                                alt="[4+1] 파스텔 핑크 텀블러 473ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">[4+1] 파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>64,000</span>원</p>
                        </div>
                    </div>
                    <div className="searchresult-product-item2">
                        <div className="searchresult-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_195/1676251036143rKN01_JPEG/77386819855230701_560737894.jpg?type=m510"
                                alt="23 체리 아이코닉 글리터 텀블러 473ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 체리 아이코닉 글리터 텀블러 473ml</p>
                            <p className="item-price"><span>23,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="searchresult_section_product">
                <div className="searchresult-product-list">
                    <div className="searchresult-product-item">
                        <div className="searchresult-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_200/1676251009069F0Yc8_JPEG/77386792779074247_671977658.jpg?type=m510"
                                alt="23 체리 플로런스 로맨틱 텀블러 473ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 체리 플로런스 로맨틱 텀블러 473ml</p>
                            <p className="item-price"><span>19,000</span>원</p>
                        </div>
                    </div>

                    <div className="searchresult-product-item2">
                        <div className="searchresult-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_151/1676250911506rREHP_JPEG/77386739308987584_401162669.jpg?type=f140"
                                alt="23 SS 체리 밸류 로맨틱 텀블러 355ml" />
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 SS 체리 밸류 로맨틱 텀블러 355ml</p>
                            <p className="item-price"><span>32,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
