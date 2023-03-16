export const bottomNavData = [
    {
        id: 1,
        name: '메인',
        link: '/',
    },
    {
        id: 2,
        name:'기획전',
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
        id:1,
        name: '케이크',
        link: '/cake',
    },
    {
        id:2,
        name: '바리스타 춘식',
        link: '/chunsik',
    },
    {
        id:3,
        name: '핸디 데스크',
        link: '/handy_desk',
    },
    {
        id:4,
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
        name:'텀블러/보온병',
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
        id : 1,
        name: "전체",
        categoryId : 0
    },
    {
        id : 2,
        name: "케이크",
        categoryId : 1,
        subCategory : [{
            id : 1,
            name: "카테고리",
            menus: [
                {
                    id:1,
                    name:"롤케이크",
                    subCategoryId:1
                },
                {
                    id:2,
                    name:"홀케이크",
                    subCategoryId:2
                }
            ]
        }]
    },
    {
        id : 3,
        name: "텀블러/보온병",
        categoryId : 2
    },
]
