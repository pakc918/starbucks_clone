import Head from 'next/head'
import { NextPageWithLayout } from './_app'
import BestLayout from '@/components/layouts/BestLayout'
import RecommandWidget from '@/components/widgets/RecommandWidget'
import { useEffect, useState } from 'react'
import { mainEventListType } from '@/types/fetchDataType'

const Home: NextPageWithLayout = () => {

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <section className="best-product">
        <div className="best-product-list">
            <div className="product-item">
                <p className="count">1</p>
                <div className="item_img">
                    <img src="https://shop-phinf.pstatic.net/20230215_64/1676424666767CNRjg_JPEG/77560500579518181_629284917.jpg?type=m510"/>
                </div>
                <div className="item_info">
                    <p className="item-new">New</p>
                    <p>부드러운 티라미수 롤케이크</p>
                    <p className="item-price"><span>19,900원</span></p>
                </div>
            </div>
            <div className="product-item2">
                <p className="count">2</p>
                <div className="item_img">
                    <img src="https://shop-phinf.pstatic.net/20221230_87/1672371248920KrduT_JPEG/73507032581228289_908311394.jpg?type=m510"/>
                </div>
                <div className="item_info">
                    <p>부드러운 고구마 생크림 케이크</p>
                    <p className="item-price"><span>33,000원</span></p>
                </div>
            </div>
        </div>
    </section>
    <section className="best-product2">
        <div className="best-product-list">
            <div className="product-item">
                <p className="count">3</p>
                <div className="item_img">
                    <img src="https://shop-phinf.pstatic.net/20221230_294/1672371457399tDq2z_JPEG/73507241105091598_1599621290.jpg?type=m510"/>
                </div>
                <div className="item_info">
                    <p>블루베리 치즈 케이크</p>
                    <p className="item-price"><span>19,900원</span></p>
                </div>
            </div>
            <div className="product-item2">
                <p className="count">4</p>
                <div className="item_img">
                    <img src="https://shop-phinf.pstatic.net/20221230_152/1672371405306IVKOz_JPEG/73507189011853712_324497504.jpg?type=m510"/>
                </div>
                <div className="item_info">
                    <p>더블 초콜릿 케이크</p>
                    <p className="item-price"><span>33,000원</span></p>
                </div>
            </div>
        </div>
    </section>

    <section className="best-product3">
        <div className="best-product-list">
            <div className="product-item">
                <p className="count">5</p>
                <div className="item_img">
                    <img src="https://shop-phinf.pstatic.net/20230215_274/1676424690223Q4bek_JPEG/77560524030735209_1274866820.jpg?type=m510"/>
                </div>
                <div className="item_info">
                    <p>별의 별 케이크</p>
                    <p className="item-price"><span>25,000원</span></p>
                </div>
            </div>
        </div>
        
    </section>
        </>
    )
}

export default Home