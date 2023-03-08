export interface mainEventListType{
    id: number;
    title: string;
    eventId: number;
}

export interface productListCardType {
    id: number;
    title: string;
    price: number;
    imgUrl: string;
    isNew: boolean;
}

export interface eventProductListType {
    id: number;
    eventId: number;
    productId: number;
}