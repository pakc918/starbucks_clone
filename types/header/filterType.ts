export interface filterMenuType {
    id : Number;
    name : String;
    categoryId : Number;
    subCategory? : [filterSubCategoryType]
}

export interface filterSubCategoryType {
    id: Number;
    name: String;
    menu? : [filterCategorySubType]
}

export interface filterCategorySubType{
    id:Number;
    name : String;
    subCategoryId:Number;
}