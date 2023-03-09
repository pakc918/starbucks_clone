import Link from 'next/link'
import React from 'react'

export default function search() {
    return (
        <>
            <div className="container">
                <header>
                    <div className="header-top">
                        <div className="search">
                            <input type="text" placeholder="검색어를 입력하세요." />
                            <a href="searchresult.html"><img src="assets/images/icons/search.svg" /></a>
                        </div>
                        <nav className="search-close">
                            <Link href="/"><img src="assets/images/icons/close.png" /></Link>
                        </nav>
                    </div>
                </header>
                <section id="recommand-md">
                    <div className="search-result">
                        <h4>최근 검색어가 없습니다.</h4>
                    </div>
                </section>
                <section id="recommand-md">
                    <div>
                        <h2>추천 태그</h2>
                    </div>
                </section>
            </div>
        </>
    )
}