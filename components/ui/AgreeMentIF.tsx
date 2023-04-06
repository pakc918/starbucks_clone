import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export default function AgreeMentIF() {

    const router = useRouter();
    const handleClose = () => {
        router.back();
    };

    return (
        <>
            <div>
                <header className="agreement-header">
                    <div className="agreement-header-top" onClick={handleClose}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                            width={15}
                            height={15}
                            alt="close"
                        />
                    </div>
                </header>
                <div className="agreement-information">
                    <div className="agreement-name"><p>개인정보 수집 및 이용 동의</p></div>
                    <div>
                        <div className="agreement-title-information"><p>본인은 스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니(이하 &#039;회사&#039;라 합니다)가 제공하는 회원 서비스(이하 ‘서비스’라 합니다)를 이용하기 위해, 다음과 같이 ‘회사’가 본인의 개인정보를 수집/이용하는 것에 동의합니다.</p></div>
                        <div className="agreement-information-2">
                        <p>※ 귀하께서는 개인정보 수집·이용에 대한 동의를 거부하실 수 있으나, 동의를 거부하실 경우 회원가입, 서비스 이용 등을 하실 수 없습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
