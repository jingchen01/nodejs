const get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('secret'), 100
        });
    });
}

const process = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${value}-code`), 100);
    });
}

const main = () => {
    get()
        .then(process)
        .then(result => console.log(result));
}


main(); // secret-code