import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

<<<<<<< HEAD
const { persistAtom } = recoilPersist();

export const cartState = atom({
  key: "cartState",
  default: 0,
  //effects_UNSTABLE: [persistAtom],
});
=======
export const cartState = atom<cartType>( {

    key: 'cartListState',
    default: {
        cartListFreeze: [],
        cartList: [],
    },
});
>>>>>>> 14957985e0abc3b8bf0cbee4404e471688383f4d
