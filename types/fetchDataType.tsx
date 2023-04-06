export interface mainEventListType{
    id: number;
    title: string;
    eventId: number;
}

export interface BestListType{
    id: number;
    title: string;
}

export interface ProductListCardType {
    id: number;
    title: string;
    price: number;
    imgUrl: string;
    isNew: boolean;
}

export interface tagListCardType {
    id: number;
    title: string;
    imgUrl: string;
}

export interface eventProductListType {
    id: number;
    eventId: number;
    productId: number;
}

export interface bestProductListType {
    id: number;
    bestId:number;
    productId: number;
}

export interface tagListCardType {
    id: number;
    eventId: number;
    tagId: number;
}

export interface eventProductListCardType {
    createDate: string;
    description: string;
    frozen: number;
    id: number;
    inventory: number;
    name: string;
    price: number;
    salesQuantity: number;
    titleImg: string;
    updateTime: string;
}


export interface eventProductType {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
    titleImg: string;
    productImageList: Array<productImageListType>;
    frozen: number;
    salesQuantity: number;
    isNew : boolean;
}

export interface productImageListType {
    id: number;
    imgUrl: string;
    imgAlt: string;
    productImageList: [
        {
            id: number;
            imgUrl: string;
            imgAlt: string;
        }
    ],
    frozen: number;
    salesQuantity: number;
}

export interface eventListType {
    id: number;
    name: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
    startDate: string;
    endDate: string;
    discountRate: number;
    isDisplay: boolean;
}

export interface CategoryListType {
    keyword: string;
    categoryLarge: string;
    categoryMiddle: string;
    option: string;
    season: string;
    price: string;
    sort: string;
    event: string;
}

export interface SortListType {
    id: number;
    name: string;
}

export interface ProductDetailType {
    id: number;
    name: string;
    description: string;
    price: number;
    inventory: number;
    titleImg: string;
    productImageList: [
        {
            id: number;
            imgUrl: string;
            imgAlt: string;
        }
    ],
    frozen: number;
    salesQuantity: number;
}

export interface CategoryLarge{
    id: number;
    name: string;
    titleImg: string;
}