
let rejected = Promise.reject(90);

rejected.catch((err) => {
    console.log(err); // 90
});



