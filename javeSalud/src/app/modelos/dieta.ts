import { Plato } from "./plato";

export interface Dieta{
    nombre:string;
    imagen:string;
    objetivo: string;
    descripcion:string;
    calorias:number;
    platos: Plato[];
    visible:boolean;
}