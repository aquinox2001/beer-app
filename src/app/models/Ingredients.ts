import { Volume } from "./Volume";

export interface Ingredients {
    hops: Hop[];
    malt: Malt[];
    yeast: string;
}


export interface Hop {
    add: string;
    amount: Volume;
    attribute: string;
    name: string;
}

export interface Malt {
    amount: Volume;
    name:   string;
   }