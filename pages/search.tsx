import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/header/SearchBar'
import { seacrchKeyword } from '@/types/search/searchKeywords';

export default function search() {

    return (
        <>
            <div className="container">
                <header>
                    <SearchBar />
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