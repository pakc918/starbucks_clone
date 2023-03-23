import Link from 'next/link';
import React from 'react'

const SearchBar = () => {
    return (
        <div className="header-top">
            <div className="search">
                <input type="search" placeholder="검색어를 입력하세요." />
                <Link href="/searchresult"><img src="assets/images/icons/search.svg" /></Link>
            </div>
            <nav className="search-close">
                <Link href="/"><img src="assets/images/icons/close.png" /></Link>
            </nav>
        </div>
    )
}

export default SearchBar;