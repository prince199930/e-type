import { ProductType } from "./Products";

export interface ProductProps{
    fetchData:(e:string)=>void;
    productName:string;
    final:ProductType[]
}