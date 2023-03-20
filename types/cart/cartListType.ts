export interface cartListType {
    cartId: number;
    productId: number;
    bigCategoryId: number;
    count: number;
    check: boolean;
}

export interface cartType {
    cartListFreeze: cartListType[];
    cartList: cartListType[];
}