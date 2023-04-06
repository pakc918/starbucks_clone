import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Config from "@/configs/config.export";
import { Keyword } from "@/types/search/searchKeywords";

const SearchBar = () => {
    const router = useRouter();
    const [keyword, setKeyword] = useState<Keyword>({
        id: Date.now(),
        keyword: "",
    });

    const { baseUrl } = Config();
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.get(`${baseUrl}/api/v1/product/get?query=${keyword.keyword}`);
            // 검색 결과 페이지로 이동

            if(keyword.keyword === ""){
                Swal.fire({
                    title: '검색어를 입력해주세요.',
                    icon: 'error',
                    confirmButtonText: '확인',
                    confirmButtonColor: '#f5a623',
                })
            } else {
                router.push(`searchresult?query=${keyword.keyword}`);
                // 검색어를 localStorage에 저장
                const keywords = JSON.parse(localStorage.getItem('keyword') || '[]');
                keywords.unshift(keyword);
                localStorage.setItem('keyword', JSON.stringify(keywords));
        }} catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        // 검색창 닫기
        router.push('/')
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <div className="header-top">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요."
                            value={keyword.keyword}
                            onChange={(event) =>
                                setKeyword({
                                    ...keyword,
                                    keyword: event.target.value,
                                })
                            }
                        />
                        <button type="submit">
                            <Image
                                src="/assets/images/icons/search.svg"
                                width={20}
                                height={20}
                                alt= "search"
                            />
                        </button>
                    </div>
                    <nav className="search-close">
                        <Image
                            src="/assets/images/icons/close.png"
                            width={20}
                            height={20}
                            alt= "close"
                            onClick={handleClose}
                        />
                    </nav>
                </div>
            </form>
        </header>
    );
}
export default SearchBar;
