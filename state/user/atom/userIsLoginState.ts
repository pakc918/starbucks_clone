import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'

export const userIsLogin = atom( {
    key: "userLoginState",
    default: false,
    effects_UNSTABLE: []
})