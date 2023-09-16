import { Volume } from "./Volume";

export interface Method {
    fermentation: Fermentation;
    mash_temp: MashTemp[];
    twist: null | string;
}

export interface Fermentation {
    temp: Volume;
}

export interface MashTemp {
    duration: number | null;
    temp: Volume;
}