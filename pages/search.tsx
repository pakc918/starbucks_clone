import React from 'react'
import SearchBar from '@/components/ui/Searchbar';
import History from '@/components/history/history';

export default function search() {

    return (
        <>
            <div className="container">
                <SearchBar/>
                <History/>
            </div>
        </>
    )
}