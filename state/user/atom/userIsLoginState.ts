import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'

// const { persistAtom } = recoilPersist();

export const userIsLogin = atom( {
    key: "userIsLogin",
    default: false,
    // effects_UNSTABLE: [persistAtom],
})