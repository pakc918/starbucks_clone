import Config from '@/configs/config.export';
import { menuModalState } from '@/state/atom/menuModalState';
import { CategoryLarge, CategoryListType, ProductDetailType } from '@/types/fetchDataType';
import axios from 'axios';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Menu(props: { isMenuModalOpen: boolean, setIsMenuModalOpen: Function }) {
    const router = useRouter();
    const [allmenu, setAllmenu] = useState<CategoryListType[]>([]);
    const [menucategory, setMenuCategory] = useState<CategoryLarge[]>([]);
    const { baseUrl } = Config();

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/product/get`)
            .then((res) =>{
                const data = res.data.data;
                setAllmenu(data);
                console.log(res.data)
            })
            .catch((error) => console.error(error));
    }, [baseUrl]);

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/categoryLarge/all`)
            .then((response) => response.data)
            .then((data) => setMenuCategory(data.data))
    }, [baseUrl]);

    const handleClose = () => {
        props.setIsMenuModalOpen(false)
    };

    const handleeventpush = () => {
        router.push("/event");
        props.setIsMenuModalOpen(false)
    };

    const handlebestpush = () => {
        router.push("/best");
        props.setIsMenuModalOpen(false)
    };

    const handlepush = (name:string) => {
        axios
            .get(`${baseUrl}/api/v1/product/get?categoryLarge=${name}`)
            .then((res) => {
                console.log(`${baseUrl}/api/v1/product/get?categoryLarge=${res.data.data}`)
                
                const data = res.data.data.categoryLarge;
                router.push(`/searchresult?categoryLarge=${data}`) ;
                props.setIsMenuModalOpen(false)
            })
            .catch((error) => console.error(error));
    };

    const handlePushClose = async () => {
        try {
            const response = await axios.get(`${baseUrl}/api/v1/product/get/all`);
            const products = response.data.data;
            // 전체 상품 정보를 가져온 후, 새로운 페이지로 이동

            router.push(`/searchresult?query=${products}`);
            // router.push({
            //     pathname: `/searchresult`,
            //     query: { query: products }, // 검색어(query)를 포함
            // });

            props.setIsMenuModalOpen(false);
        } catch (error) {
            console.error(error);
        }

        // router.push("/searchresult");
        // props.setIsMenuModalOpen(false);
    };

    if (!props.isMenuModalOpen) return <></>;
    return (
        <>
            <div className="menu-box">
                <header className="menu-header">
                    <div className="menu-header-top" onClick={handleClose}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                            width={20}
                            height={15}
                            alt="close"
                        />
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
                        <div onClick={handlePushClose}>
                            <a href="">전체 상품 보기 {">"}</a>
                        </div>
                    </section>
                    <section className="menu-section-mid">
                        <div className="menu-product-list">
                            {menucategory.map((menu) => (
                                <>
                                    <div className="menu-product-item" key={menu.id}>
                                        <div className="product-img">
                                            <Image
                                                src={menu.titleImg}
                                                width={170}
                                                height={170}
                                                alt={menu.name}
                                                // onClick={handlepush}
                                            />
                                        </div>
                                        <div className="product-info">
                                            <p>{menu.name}</p>
                                        </div>
                                    </div>
                                    </>
                            ))}
                        </div>
                    </section>
                </section>
                <footer className="menu-footer">
                    <div className="menu-footer-top">
                            <div className="menu-footer-top-button" onClick={handleeventpush}>
                                <div className="menu-footer-top-button-description">
                                    <span>기획전</span>
                                    <p>진행중인 기획전을 만나보세요.</p>
                                </div>
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/892/892528.png"
                                    width={20}
                                    height={20}
                                    alt="right"
                                />
                            </div>
                            <div className="menu-footer-top-button2" onClick={handlebestpush}>
                                <div className="menu-footer-top-button2-description">
                                    <span>베스트</span>
                                    <p>스타벅스의 베스트 상품을 만나보세요.</p>
                                </div>
                                <Image
                                    src="https://cdn-icons-png.flaticon.com/512/892/892528.png"
                                    width={20}
                                    height={20}
                                    alt="right"
                                />
                            </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Menu;