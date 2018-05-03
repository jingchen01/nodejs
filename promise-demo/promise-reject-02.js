
let rejected = Promise.reject(90);

setTimeout(() => {
    console.log('wait for 500 ms ...');
}, 500);

rejected.catch((err) => {
    console.log(err); // 90
});

/* out:
 90
 wait for 500 ms ...
*/


