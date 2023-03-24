import FooterButton from '@/components/footer/FooterButton'
import ModalHeader from '@/components/header/ModalTopHeader'
import React from 'react'

export default function collection() {
    return (
        <>
            <ModalHeader subject='배송지 정보 수집 및 이용 동의'/>
            <section id="collection1">
                <div className="information-collection">
                    스타벅스 코리아를 운영하는 주식회사 에스씨케이컴퍼니는 온라인스토어 서비스를 제공하기 위하여 아래와 같이 고객님의 배송지 정보를 수집이〮용하려고 하오니, 내용을 확인 후 동의 여부를 결정하여 주시기 바랍니다.
                </div>
                <div>
                    <b>[필수] 배송지 정보 수집이〮용 내역</b>
                </div>
                <div className="table-collection">
                    <table>
                        <tbody>
                            <tr>
                                <td className='sub'>수집•이용 목적</td>
                                <td>온라인 스토어 서비스 이용 및 상품 배송</td>
                            </tr>

                            <tr>
                                <td className='sub'>항목</td>
                                <td>배송지 주소, 수신자 연락처, 수신자 이름</td>
                            </tr>
                            <tr>
                                <td className='sub'>보유 및 이용 기간</td>
                                <th>회원 탈퇴 또는 동의 철회 시 까지</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="collection-warning">
                    ※ 위의 배송지 정보 수집•이용에 대한 동의를 거부할 권리가 있습니다. 그러나 동의를 거부할 경우 온라인 스토어 서비스 이용에 제한을 받을 수 있습니다.
                </div>
            </section>
            {/* <section id="collection2">
                <div className="address-bg">
                    <div className="address-mini-bg">
                        <a href="address.html"><input type="button" value="확인" /></a>
                    </div>
                </div>
            </section> */}
        <FooterButton inputvalue='확인'/>
        </>
    )
}
