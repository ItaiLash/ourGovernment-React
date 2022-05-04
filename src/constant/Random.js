export const random = (min, max) => {
    //min & max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateInput = () => {
    const rands = [];
    for (let i = 0; i < 3; i++){
        rands.push(random(1, 10));
    }
    return rands;
}