export interface LoginRes {
    userNickname: string;
    accessToken: string;
    // refreshToken: string;
    isLogin: boolean;
}

// refreshToken https 변경시 사용(배포)