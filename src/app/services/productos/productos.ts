export class Productos {
    idproducto:number;
    name:string;
    amount:number;
    suppliers:{name:string};
    price:number;
    img:string;
    date?:Date;
    category:{name:string};
}