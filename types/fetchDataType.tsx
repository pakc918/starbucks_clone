export interface mainEventListType{
    id: number;
    title: string;
    eventId: number;
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