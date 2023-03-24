import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userLoginState = atom({
    key: "userLoginState",
    default: {
        userEmail: "",
        accessToken: "",
        refreshToken: "",
        isLogin: false,
    },
    effects_UNSTABLE: [persistAtom],
});

const userIsLoginState = atom( {
    key: "userIsLoginState",
    default: false,
    effects_UNSTABLE: [persistAtom],
})

export {userLoginState, userIsLoginState};