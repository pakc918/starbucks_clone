export interface cartListType {
    id: number;
    productId: number;
    titleImg: string;
    price: number;
    name: string;
    frozen: number;
    productAmount: number;
    checkbox: boolean;
}

export interface cartType {
    cartListFreeze: cartListType[];
    cartList: cartListType[];
}