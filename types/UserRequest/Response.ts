export interface LoginRes {
    userEmail: string;
    accessToken: string;
    refreshToken: string;
    isLogin: boolean,
}