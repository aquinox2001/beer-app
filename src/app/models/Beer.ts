import { Ingredients } from "./Ingredients";
import { Method } from "./Method";
import { Volume } from "./Volume";

export interface Beer {
    abv: number;
    attenuation_level: number;
    boil_volume: Volume;
    brewers_tips: string;
    contributed_by: string;
    description: string;
    ebc: number | null;
    first_brewed: string;
    food_pairing: string[];
    ibu: number | null;
    id: number;
    image_url: string;
    ingredients: Ingredients;
    method: Method;
    name: string;
    ph: number | null;
    srm: number | null;
    tagline: string;
    target_fg: number;
    target_og: number;
    volume: Volume;
}










