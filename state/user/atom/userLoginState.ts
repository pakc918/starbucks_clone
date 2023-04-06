import { atom } from "recoil";

const userLoginState = atom({
    key: "userLoginState",
    default: {
        userNickname: "",
        accessToken: "",
        isLogin: false
    },
});

const userIsLoginState = atom( {
    key: "userIsLoginState",
    default: false,
})

export {userLoginState, userIsLoginState};