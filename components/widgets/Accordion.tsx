import React, { useState } from 'react'
import Image from 'next/image'
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FooterButton from '../footer/FooterButton';

export default function Accordion(props: { setdata: (arg0: boolean) => any; }) {

    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    const [value, onChange] = useState(new Date());

    return (
        <>
            <div
                style={{
                    width: "100%",
                    marginBottom: "15px",
                    lineHeight: "15px",
                }}
            >
                <button
                    style={{
                        width: "100%",
                        position: "relative",
                        textAlign: "left",
                        padding: "0 20px",
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                    onClick={() => {toggle(), props.setdata(!isShowing)}}
                    type="button"
                >
                    <p>전체</p>
                    <div
                        style={{
                            display: 'flex',
                            width: "48%",
                            justifyContent: "space-between",
                        }}>
                        2022.02.22~2023.02.21
                        <Image
                            src={'/assets/images/icons/down.png'}
                            alt={'down'}
                            width={12}
                            height={12}
                        />
                    </div>
                </button>
                <div
                    style={{
                        display: isShowing ? "block" : "none",
                        padding: "0 20px"
                    }}
                >
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <button style={{ border: '1px solid lightgray', width: '30%', height: '2rem' , borderRadius:'5px' }}>1개월</button>
                        <button style={{ border: '1px solid lightgray' , width: '30%' , borderRadius:'5px'}}>1년</button>
                        <button style={{ border: '1px solid lightgray' , width: '30%' , borderRadius:'5px'}}>기간 설정</button>
                    </div>
                    <div style={{display:'flex'}}>
                        <div style={{background:'#f6f6f6', height: '2rem', width:'45%'}}>2022.02.22</div>
                        <div>-</div>
                        <div style={{background:'#f6f6f6'}}>2023.02.21</div>
                    </div>
                    <div>
                        <div>주문 유형</div>
                        <select>
                            <option>전체</option>
                            <option>일반주문</option>
                            <option>선물주문</option>
                        </select>
                    </div>
                    <div>
                        <div>주문 상태</div>
                        <select>
                            <option>전체</option>
                            <option>주문완료</option>
                            <option>주문취소</option>
                            <option>교환/환불</option>
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}
