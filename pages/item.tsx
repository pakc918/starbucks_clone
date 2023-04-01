import FooterButton from '@/components/footer/FooterButton'
import ProductListCard from '@/components/ui/ProductListCard'
import Separator from '@/components/ui/Separator'
import Separator_large from '@/components/ui/Separator_large'
import ItemNoticeWidget from '@/components/widgets/ItemNoticeWidget'
import { eventProductListType, ProductListCardType } from '@/types/fetchDataType'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function item() {

    const [eventItemList, setEventItemList] = useState<eventProductListType[]>()
    useEffect(() => {
        fetch(`http://localhost:3001/event-product-list?eventId=2`)
            .then(res => res.json())
            .then(data => setEventItemList(data))
    }, [])

    return (
        <>
            <div className="container">
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
                <Separator_large color='#f7f7f7' height={10} />
                <section id="recommand-md2">
                    <div>
                        <p className="item-product-info">상품 정보</p>
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
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information4.png" />
                    </div>
                    <div className="border-color">
                        <img src="assets/images/item_information/item_information5.png" />
                    </div>
                    <div>
                        <img src="assets/images/item_information/item_information6.png" />
                    </div>
                </section>
                <Separator_large color='#f7f7f7' height={10} />
                <section className='same_event'>
                    <p className='same_event_subject'>체리블라썸 상품</p>
                    <section id="recommand-md">
                        <div className="recommand-md-products">
                            <div className="recommand-product-list">
                                {
                                    eventItemList && eventItemList.map(item => (
                                        <ProductListCard
                                            key={item.id}
                                            productId={item.productId}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </section>
                <Separator_large color='#f7f7f7' height={10} />
                <section className='watch_with'>
                    <p className='watch_with_subject'>다른 고객이 함께 본 상품</p>
                    <section id="recommand-md">
                        <div className="recommand-md-products">
                            <div className="recommand-product-list">
                                {
                                    eventItemList && eventItemList.map(item => (
                                        <ProductListCard
                                            key={item.id}
                                            productId={item.productId}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </section>
                <ItemNoticeWidget />
                <FooterButton inputvalue='구매하기' />
            </div>
        </>
    )
}
