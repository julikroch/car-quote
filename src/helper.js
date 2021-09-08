export const yearDiff = year => new Date().getFullYear() - year

export const calculateBrand = brand => {
    let increment
    switch(brand){
        case 'european':
            increment = 1.3;
            break;
        case 'american':
            increment = 1.15;
            break;
        case 'asiatic': 
            increment= 1.5;
            break;
        default:
            break;
    }
    return increment
}

export const planCheck = plan => plan === 'basic' ? 1.20 : 1.5