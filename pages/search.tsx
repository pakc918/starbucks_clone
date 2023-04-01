import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/header/SearchBar'
import { seacrchKeyword } from '@/types/search/searchKeywords';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';

export default function search() {
    // const navigate = useNavigate();
    const router = useRouter();
    const [keyword, setKeyWord] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setKeyWord(value);
    }

    const handleAddKeyWord = () => {
        router.push(`/searchreuslt/${keyword}`);
        // navigate(`/searchreuslt/${keyword}`);
    }

    // const [keywords, setKeyWords] = useState<searchKeyword[]>([])
    // const router = useRouter()
    // const [searchvalue, setSearchValue] = useState<string>('')

    // useEffect(() => {
    //     const result = localStorage.getItem('keywords') || '[]'
    //     setKeyWords(JSON.parse(result))
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('keywords', JSON.stringify(keywords))
    // }, [keywords])


    // const HandleAddWord = (keyword: string) => {
    //     const newKeyword = {
    //         id: Date.now(),
    //         keyword: "",
    //     }
    //     setKeyWords([newKeyword, ...keywords])
    // }

    // const HandleDeleteWord = (id: number) => {
    //     const nextKeyword = keywords.filter((keywords) => {
    //         return keywords.id != id
    //     })
    //     setKeyWords(nextKeyword)
    // }

    // const HandleAllDeleteWord = () => {
    //     setKeyWords([])
    // }

    return (
        <>
            <div className="container">
                <header>
                    <form>
                        <div className="header-top">
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요."
                                    onChange={handleInputChange}
                                />
                                <Link href={`/searchreuslt/${keyword}`}><img src="assets/images/icons/search.svg" onClick={handleAddKeyWord}/></Link>
                            </div>
                            <nav className="search-close">
                                <Link href="/"><img src="assets/images/icons/close.png" /></Link>
                            </nav>
                        </div>
                    </form>
                </header>
            </div>
            {/* <section>
                        <div className="search-words-box">
                            <div>
                                <p>최근 검색어</p>
                            </div>
                            <div className="search-words">
                                <div className="search-word">
                                    <div className="word-p">
                                        <p>텀블러</p>
                                    </div>
                                    <img src="assets/images/icons/close.png" onClick={ } />
                                </div>
                            </div>
                            <div className="total-delete">
                                <button onClick={HandleAllDeleteWord}><p>전체 삭제</p></button>
                            </div>
                        </div>
                    </section>
                <section id="recommand-md">
                    <div className="search-result">
                        <h4>최근 검색어가 없습니다.</h4>
                    </div> */}
        </>
    )
}