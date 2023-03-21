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
    confirmKey: string;
}

export interface inputUserType {
    userNickname : string;
    password : string;
}

export interface privateAgreeType {
    isAgree : boolean;
    isUseConfirm : boolean;
    isAdvertisionConfirm?: boolean;
}