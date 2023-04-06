import Image from 'next/image';
import React from 'react';

const Step03 = () => {

    return (
        <>
            <div className="container">
                <section className="signup-logo">
                    <Image
                        src="https://www.starbucks.co.kr/common/img/common/logo.png"
                        width={20}
                        height={20}
                        alt= "logo"
                    />
                </section>

                <section className="signup-notice">
                    <p className="customer">회원가입이</p>
                    <p className="welcome">완료되었습니다!</p>
                </section>
            </div>
        </>
    )
}

export default Step03;