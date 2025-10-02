export interface IcartItemParam {
   size: number;
   color: number;
   count: number;
}

export interface IcartItem {
    id: string,
    params: Array<IcartItemParam>  
}

export interface IUser {
    id: string;
    email: string;
    password: string;    
    phone: string;
    company: string;
    fav:Array<string>;
    cart:Array<IcartItem>
}

/*isActivated: boolean;
city: string;*/