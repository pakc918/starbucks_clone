import atom from 'recoil'

export const cartState = atom<cartType>( {

    key: 'cartListState',
    default: {
        cartListFreeze: [],
        cartList: [],
    },
});
