import { searchKeyword } from '@/types/search/searchKeywords';
import React, { useEffect, useState } from 'react'


interface ChildProps {
    keywords: searchKeyword;
    setKeyWords: React.Dispatch<React.SetStateAction<searchKeyword>>;
}

const History = () => {



    return (
        <>
            {
                <section id="recommand-md">
                    <div className="search-result">
                        <h4>최근 검색어가 없습니다.</h4>
                    </div>
                </section>
            }
            {
                <section>
                    <div className="search-words-box">
                        <div>
                            <p>최근 검색어</p>
                        </div>
                        <div className="search-words">
                            <div className="search-word">
                                <div className="word-p">
                                    <p>텀블러</p>
                                </div>
                                <img src="assets/images/icons/close.png" onClick={} />
                            </div>
                        </div>
                        <div className="total-delete">
                            <button onClick={HandleAllDeleteWord}><p>전체 삭제</p></button>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default History;