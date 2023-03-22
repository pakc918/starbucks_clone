export interface filterMenuType {
    id: Number;
    name: String;
    categoryId: Number;
    subCategory?: [filterSubCategoryType]
}

export interface filterSubCategoryType {
    id: Number;
    name: String;
    menu?: [filterCategorySubType]
}

export interface filterCategorySubType {
    id: Number;
    name: String;
    subCategoryId: Number;
}

export interface filterType {
    name: String,
    value: String,
    checked: Boolean
}

export interface smallCategoryType {
    name: String;
    bigCategory: String;
}

export interface sizeType {
    name: String;
}