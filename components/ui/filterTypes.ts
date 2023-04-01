export interface MenuDataType {
    id: number;
    name: string;  
    key: string;
}

export interface MenuDatas {
    menuDatas: MenuDataType[];
}

export interface filterDataType{
    id: number;
    key:string;
    value: string;
    isCheck: boolean;
}