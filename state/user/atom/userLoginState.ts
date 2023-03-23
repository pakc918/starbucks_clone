import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userLoginState = atom({
    key: "userLoginState",
    default: {
        userEmail: "",
        accessToken: "",
        refreshToken: "",
        isLogin: false,
    },
    effects_UNSTABLE: [persistAtom],
});

