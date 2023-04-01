export const bottomNavData = [
    {
        id: 1,
        name: '메인',
        link: '/',
    },
    {
        id: 2,
        name: '기획전',
        link: '/event',
    },
    {
        id: 3,
        name: '베스트',
        link: '/best',
    },
    {
        id: 4,
        name: '마이페이지',
        link: '/mypage',
    }
]

export const eventsubNavData = [
    {
        id: 1,
        name: '케이크',
        link: '/cake',
    },
    {
        id: 2,
        name: '바리스타 춘식',
        link: '/chunsik',
    },
    {
        id: 3,
        name: '핸디 데스크',
        link: '/handy_desk',
    },
    {
        id: 4,
        name: '별★ 적립 혜택',
        link: '/save_star',
    },
]


export const bestsubNavData = [
    {
        id: 1,
        name: '케이크',
        link: '/cake',
    },
    {
        id: 2,
        name: '텀블러/보온병',
        link: '/tumbler',
    },
    {
        id: 3,
        name: '머그/컵',
        link: '/mug',
    },
    {
        id: 4,
        name: '라이프스타일',
        link: '/lifestyle',
    },
    {
        id: 5,
        name: '티/커피용품',
        link: '/tea',
    },
    {
        id: 6,
        name: '세트',
        link: '/set',
    }
]

export const category = [
    {
        id: 1,
        name: "전체",
        categoryId: 0
    },
    {
        id: 2,
        name: "케이크",
        categoryId: 1,
        subCategory: [{
            id: 1,
            name: "카테고리",
            menus: [
                {
                    id: 1,
                    name: "롤케이크",
                    subCategoryId: 1
                },
                {
                    id: 2,
                    name: "홀케이크",
                    subCategoryId: 2
                }
            ]
        }]
    },
    {
        id: 3,
        name: "텀블러/보온병",
        categoryId: 2
    },
]

//전체 상품 테스트용 카테고리

export const categoryList = [
    {
        id: 0,
        name: "전체",
        key: "category",
    },
    {
        id: 1,
        name: "케이크",
        key: "category",
    },
    {
        id: 2,
        name: "텀블러/보온병",
        key: "category",
    },
    {
        id: 3,
        name: "머그/컵",
        key: "category",
    },
    {
        id: 4,
        name: "라이프스타일",
        key: "category",
    },
    {
        id: 5,
        name: "티/커피용품",
        key: "category",
    },
    {
        id: 6,
        name: "세트",
        categoryId: 6,
        key: "category",
    },
];

export const menuListDepth2 = [
    {
        id: 1,
        name: "케이크",
        data: [
            {
                id: 1,
                name: "1만원미만",
                key: "price",
            },
            {
                id: 2,
                name: "1만원대",
                key: "price",
            },
            {
                id: 3,
                name: "2만원대",
                key: "price",
            },
            {
                id: 4,
                name: "3만원대",
                key: "price",
            },
        ],
    },
    {
        id: 2,
        name: "텀블러/보온병",
        data: [
            {
                id: 1,
                name: "플라스틱 텀블러",
                key: "subCategory",
            },
            {
                id: 2,
                name: "스텐리스 텀블러",
                key: "subCategory",
            },
            {
                id: 3,
                name: "보온병",
                key: "subCategory",
            },
            {
                id: 4,
                name: "콜드컵",
                key: "subCategory",
            },
        ],
    },
];

export const menuListDepth3 = [
    {
        id: 1,
        name: "케이크",
        data: [
            {
                id: 1,
                name: "롤케이크",
                key: "categoryMiddle",
            },
            {
                id: 2,
                name: "홀케이크",
                key: "categoryMiddle",
            },
        ],
    },
    {
        id: 2,
        name: "텀블러/보온병",
        data: [
            {
                id: 1,
                name: "Short",
                key: "categoryMiddle",
            },
            {
                id: 2,
                name: "Tall",
                key: "categoryMiddle",
            },
            {
                id: 3,
                name: "Grande",
                key: "categoryMiddle",
            },
            {
                id: 4,
                name: "Venti",
                key: "categoryMiddle",
            },
        ],
    },
];

export const menuListDepth4 = [
    {
        id: 1,
        name: "케이크",
        data: [
            {
                id: 1,
                name: "Spring",
                key: "subCategory",
            },
            {
                id: 2,
                name: "커티스 쿨릭",
                key: "subCategory",
            },
            {
                id: 3,
                name: "체리블라썸",
                key: "subCategory",
            },
            {
                id: 4,
                name: "밸런타인 데이",
                key: "subCategory",
            },
        ],
    },
    {
        id: 2,
        name: "텀블러/보온병",
        data: [
            {
                id: 1,
                name: "Spring",
                key: "subCategory",
            },
            {
                id: 2,
                name: "커티스 쿨릭",
                key: "subCategory",
            },
            {
                id: 3,
                name: "체리블라썸",
                key: "subCategory",
            },
            {
                id: 4,
                name: "밸런타인 데이",
                key: "subCategory",
            },
        ],
    },
];

