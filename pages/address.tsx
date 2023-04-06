import ModalTopHeader from '@/components/header/ModalTopHeader'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Address() {
    return (
        <>
        <ModalTopHeader subject='배송지 변경'/>
        <div className="container">
            <section style={{ margin: "12% 0" }}>
                <div style={{ padding: "10px", margin: "5px;" }}>
                    <h2 style={{ fontSize: "25px;" }}>배송지 정보</h2>
                    <div className="address-box-list">
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="주소별칭" />
                        </div>
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="받는 분 *" />
                        </div>
                        <div className="address-border-color2">
                            <div className="address-border-color3">
                                <input className="input-address-box2" type="text" placeholder="우편번호 *" />
                            </div>
                            <div style={{ width: "30%;" }}>
                                <button className="address-btn">주소 검색</button>
                            </div>
                        </div>
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="기본주소 *" />
                        </div>
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="상세주소 *" />
                        </div>
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="연락처1 *" />
                        </div>
                        <div className="address-border-color">
                            <input className="input-address-box" type="text" placeholder="연락처2" />
                        </div>
                        <div className="address-border-color" style={{ position: "relative" }}>
                            <div style={{ position: "absolute", bottom: "14px", left: "4px", fontSize: "13px" }}>
                                <p>배송 메모</p>
                            </div>
                            <div style={{ width: "100%" }}>
                                <input className="input-address-box" style={{ textAlign: "left", backgroundColor: "white" }}
                                    type="button" value="배송 메모를 선택해 주세요." />
                            </div>
                        </div>
                        <div className="address-border-color4">
                            <input className="address-checkbox" type="checkbox" />
                            <p style={{ fontSize: "15px", position: "absolute", left: "70px" }}>배송지 정보 수집 및 이용 동의[필수]</p>
                            <Link href="/collection">
                                <Image
                                    src="/assets/images/icons/next.png"
                                    width={20}
                                    height={20}
                                    alt= "next"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ padding: "0%" }}>
                <div className="address-bg">
                    <div className="address-mini-bg">
                        <Link href="/buypage"><input type="button" value="변경하기" /></Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
