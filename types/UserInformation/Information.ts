export interface inputRegisterType {
    userEmail : string;
    userName : string;
    userNickname: string;
    birthday : Date;
    password: string;
    confirmPassword: string;
    phone: string;
    isUserConfirm: boolean;
    privateAgree: privateAgreeType;
}

export interface privateAgreeType {
    isAgree : boolean;
    isUseConfirm : boolean;
    isAdvertisionConfirm?: boolean;
}