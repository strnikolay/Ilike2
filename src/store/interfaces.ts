export interface IContact {
    name:"string";
    phone:"string";
}

export interface IUser {
    id: string;
    email: string;
    password: string;
    company: string;
    contact:IContact[];
    adress:string[];
    orderHistory:string[];
    fav:string[];
    cart:IcartItem[];
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
    params: IcartItemParam[]  
}