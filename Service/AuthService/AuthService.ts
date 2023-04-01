import { inputUserType } from "@/types/UserInformation/Information";
import { ReIssueTokenRes } from "@/types/UserInformation/Information";
import axios from "axios";

export async function RequestLogin(req: inputUserType) {
    return await 
    axios.post('url-login', req)
    .then((res) => res.data);
}

/* 
로그아웃 시 쿠키에 전달 된 리프레쉬 토큰을 파기하는 로직이 돌고, 
Access Token이 만약 유효하다면 Redis에 Black List로 등록하는 로직이 돕니다. 
쿠키에 토큰이 없거나 엑세스 토큰이 유효기간이 지나버렸다면 그냥 서버에서 무시해버립니다. (자동 로그아웃)
*/
export async function RequestLogout() {
    return await axios.get('LOGOUT-url')
    .then((res) => res.data);
}

export async function RequestReissueToken() {
    return await axios.post('token-url')
        .then((res) => {
            const response: ReIssueTokenRes = res.data;
            const newAccessToken = response.data.accessToken;
            localStorage.removeItem("accessToken");
            localStorage.setItem("accessToken", newAccessToken);
        })
        .catch((ex) => {
            //TODO
            //자동 로그아웃 처리
        });
}