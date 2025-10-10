
export interface IUser {
    id: string;
    email: string;
    password: string;    
    phone: string;
    company: string;
    fav:Array<string>;
    cart:Array<IcartItem>
}

export type Tcolor = number[];
export type Tsize = number

export interface sizes {
    size: number,
    colors: number[]
}

export interface IProduct {
    id: string;
    cat: number;
    brand: number;
    desc: string;
    img: string[];
    sticker: string;
    price: number;
    count: number;
    sizes: sizes[]
}

export interface IcartItemParam {
   size: number|undefined;
   color: number|undefined;
   count: number;
}

export interface IcartItem {
    id: string,
    params: Array<IcartItemParam>  
}