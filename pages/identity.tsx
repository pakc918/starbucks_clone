import FooterButton from '@/components/footer/FooterButton'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function identity() {
    return (
        <>
            <header className="identity-header">
                <div className="identity-header-cancel">
                    <Link href="/">
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                        width={20}
                        height={20}
                        alt= "StarBucks"
                    />
                    </Link>
                </div>
            </header>
            <section className="identity-section1">
                <div className="identity-section1-subject">
                    <p>본인확인을 위해</p>
                    <p>인증을 진행해 주세요.</p>
                </div>
                <div className="identity-policy">
                    <div className="identity-policy-all-check">
                        <input className="identity-policy-check" type="checkbox" />
                        <p>본인 인증 서비스 약관 전체동의</p>
                    </div>
                    <div className="identity-policy-detail-list">
                        <div className="identity-policy-detail">
                            <p>휴대폰 본인 인증 서비스 이용약관 동의 (필수)</p>
                            <Image
                            src="/assets/images/icons/right-arrow.png"
                            width={20}
                            height={20}
                            alt= "right-arrow"
                            />
                        </div>
                        <div className="identity-policy-detail">
                            <p>휴대폰 통신사 이용약관 동의 (필수)</p>
                            <Image
                                src="/assets/images/icons/right-arrow.png"
                                width={20}
                                height={20}
                                alt= "right-arrow"
                            />
                        </div>
                        <div className="identity-policy-detail">
                            <p>개인정보 제공 및 이용 동의 (필수)</p>
                            <Image
                                src="/assets/images/icons/right-arrow.png"
                                width={20}
                                height={20}
                                alt= "right-arrow"
                            />
                        </div>
                        <div className="identity-policy-detail">
                            <p>고유식별정보 처리 (필수)</p>
                            <Image
                                src="/assets/images/icons/right-arrow.png"
                                width={20}
                                height={20}
                                alt= "right-arrow"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="identity-input">
                <div className="identity-input-name">
                    <input type="text" placeholder="이름" />
                </div>

                <div className="identity-input-birth">
                    <input className="birth-first" type="text" placeholder="생년월일 6자리" maxLength={6} />
                    <p>-</p>
                    <div className="identity-num">
                        <input className="birth-second" type="text" maxLength={1} placeholder="●" />
                        <input className="birth-second-bg" type="text" maxLength={7} placeholder="●●●●●●●" readOnly disabled />
                    </div>
                </div>
                <div className="identity-input-phone">
                    <select>
                        <option>SKT</option>
                        <option>KT</option>
                        <option>LG U+</option>
                        <option>SKT 알뜰폰</option>
                        <option>KT 알뜰폰</option>
                        <option>LG U+ 알뜰폰</option>
                    </select>
                    <input type="text" pattern="\d*" maxLength={11} placeholder="휴대폰 번호" />
                    <button>인증요청</button>
                </div>
                <div className="identity-input-warning">
                    <ul>
                        <li>타인의 개인정보를 도용하여 가입한 경우, 서비스 이용 제한 및 법적 제재를 받으실 수 있습니다.</li>
                    </ul>
                </div>

            </section>
            <FooterButton inputvalue='다음'/>
        </>
    )
}
