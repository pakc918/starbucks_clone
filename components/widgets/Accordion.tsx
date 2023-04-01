import React, { useState } from 'react'
import Image from 'next/image'
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import FooterButton from '../footer/FooterButton';

export default function Accordion(props: { title: string, content: string }) {

    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    const [value, onChange] = useState(new Date());

    return (
        <div
            style={{
                width: "100%",
                marginBottom: "15px",
                lineHeight: "15px",
                border: "1px solid rgba(209, 213, 219, 0.5)"
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
                onClick={toggle}
                type="button"
            >
                <p>{props.title}</p>
                <div
                    style={{
                        display:'flex',
                        width:"48%",
                        justifyContent:"space-between",
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
                <button>1개월</button>
                <button>1년</button>
                <button>기간 설정</button>
                <div>2022.02.22</div>
                <div>-</div>
                <div>2023.02.21</div>
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
    )
}
