

export const buscarPorReinosId = (reino) => {
    if (reino.toLowerCase() === 'el norte' || reino.toLowerCase() === 'the north' || reino.toLowerCase() === 'norte' || reino.toLowerCase() === 'north') {
        return parseInt(1);
    } else if (reino === 'el valle' || reino === 'el valle de arryn' || reino === 'the valley' || reino === 'valle') {
        return parseInt(2);
    } else {
        return parseInt(20)
    }


};


export const casasNombre = (casa) => {
    
    if( casa === 'stark' || casa === 'Stark' || casa === 'Los stark' || casa === 'STARK'){
        return 'Stark';
    }else if ( casa.toLowerCase() === 'karstark' || casa === 'kar' || casa === 'Kar'){
        return 'Karstark';
    }
}