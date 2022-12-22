import IProducts from "./products.model";

export interface CartProduct extends IProducts {
   quanity:number;
}