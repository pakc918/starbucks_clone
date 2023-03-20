// import searchIcon from '/assets/images/icons/search.svg';
// import cartIcon from '/assets/images/icons/shopping-cart.svg';
// import userIcon from '/assets/images/icons/user.svg';

export const headerNavMenus = [
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
    link: '/signup',
  }
]

export const headerIcons = [
  {
    id: 1,
    name: 'search',
    link: '/search',
    icon: '/assets/images/icons/search.svg',
  },
  {
    id: 2,
    name: 'cart',
    link: '/cart',
    icon: '/assets/images/icons/shopping-cart.svg',
  },
  {
    id: 3,
    name: 'mypage',
    link: '/signup',
    icon: '/assets/images/icons/user.svg',
  }
]

export const categoryList = [
  {
    id: 1,
    name: '전체',
    categoryId: 0,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]
  },

  {
    id: 2,
    name: '케이크',
    categoryId: 1,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]
  },
  {
    id: 3,
    name: '텀블러/보온병',
    categoryId: 2,
    subCategory:  [
      {
        id: 1,
        name:"용량",
        menus:  [
          {
            id: 1,
            name: 'short',
            subCategoryId: 3
          },
          {
            id: 2,
            name: 'tall',
            subCategoryId: 4
          },
          {
            id: 3,
            name: 'grande',
            subCategoryId: 5
          },
          {
            id: 4,
            name: 'venti',
            subCategoryId: 6
          }
        ]
      },
      {
        id: 2,
        name:"카테고리",
        menus:  [
          {
            id: 1,
            name: '롤케이크',
            subCategoryId: 1
          },
          {
            id: 2,
            name: '홀케이크',
            subCategoryId: 2
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: '머그/컵',
    categoryId: 3,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]

  },
  {
    id: 5,
    name: '라이프스타일',
    categoryId: 4,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]
  },
  {
    id: 6,
    name: '티/커피용품',
    categoryId: 5,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]
  },
  {
    id: 7,
    name: '세트',
    cattegoryId: 6,
    subCategory:  [{
      id: 1,
      name:"카테고리",
      menus:  [
        {
          id: 1,
          name: '롤케이크',
          subCategoryId: 1
        },
        {
          id: 2,
          name: '홀케이크',
          subCategoryId: 2
        }
      ]
    }]
  }
]