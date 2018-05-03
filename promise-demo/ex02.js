
const get = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('secret'), 100
        });
    });
}

const process = async (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100);
    });
}

const main = async () => {
    const val = await get();
    const result = await process(val);
    console.log(result);
}


main(); // secret-code
