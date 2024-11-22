import { getGalleryData } from "../data/galeria";
/*  import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";

import tabladatos from "./tab"; */

export const generarContextoDePagina = (page) => {
    console.log('page', page);
    const contextObject = {
/*         ...navData, */
    };
    let pageObject = {}
    switch (page) {
        case '/index.html':
            pageObject = getGalleryData();
            break;
        /* case '/index.html':
            pageObject = getHeroData();
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
           
            break;
        case '/tablas.html':
            pageObject = {
                ...pageObject,
                ...tabladatos
            };
            break; */
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
} 