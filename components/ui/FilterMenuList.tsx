import { filterDataType, MenuDataType } from '@/types/filter/filterTypes';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react'

export default function FilterMenuList(props: {
    data: MenuDataType[];
    filterFile: filterDataType[];
    setFilter: Dispatch<SetStateAction<filterDataType[]>>;
}) {

    const router = useRouter();

    const handleAddQuery = (item: MenuDataType) => {
        console.log(item);
        if (item.key === "category") {
            router.push(`/listview?category=${item.name}`);
            return;
        }

        if (props.filterFile.find((data) => data.value === item.name)) {
            props.setFilter(
                props.filterFile.filter((data) => data.value !== item.name)
            );
            return;
        }
        props.setFilter([
            ...props.filterFile,
            {
                id: item.id,
                key: item.key,
                value: item.name,
                isCheck: true,
            },
        ]);
    };

    return (
        <>
            <div className="header-bottom">
                <nav>
                    <ul>
                        {
                            props.data &&
                            props.data.map((item: MenuDataType) => (
                                <li
                                    key={item.id}
                                    onClick={() => handleAddQuery(item)}>
                                    {item.name}
                                </li>
                            ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
