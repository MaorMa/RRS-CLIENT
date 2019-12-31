import { Nutrient } from './nutrient';

export class MetaData {
    private sID: string;
    private description: string;
    private quantity: string;
    private price: string;
    // private nutrients: Nutrient[];
    private optionalProductNames: string[];
    private validProduct: boolean;
    //private yCoordinate: number;

    deserialize(input: any): this {
        this.sID = input.sID;
        this.description = input.description;
        this.quantity = input.quantity;
        this.price = input.price;
        this.optionalProductNames = input.optionalProductNames;
        // this.nutrients = 
        //this.yCoordinate = input.yCoordinate;
        this.validProduct = input.validProduct;
        return this;
    }

    getsID(){
        return this.sID;
    }

    getDescription(){
        return this.description;
    }

    getQuantity(){
        return this.quantity;
    }

    getPrice(){
        return this.price;
    }
}