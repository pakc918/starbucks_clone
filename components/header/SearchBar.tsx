import Link from 'next/link';
import React, { Component } from 'react'

class search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form>
                <div className="header-top">
                    <div className="search">
                        <input
                            type="text"
                            maxLength={20}
                            placeholder="검색어를 입력하세요."
                        />
                        <img src="assets/images/icons/search.svg" />
                    </div>
                    <nav className="search-close">
                        <Link href="/"><img src="assets/images/icons/close.png" /></Link>
                    </nav>
                </div>
            </form>
        )
    }
}

export default search;
