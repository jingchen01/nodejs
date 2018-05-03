let rejected;
process.on("unhandledRejection", (reason, promise) => {
    console.log(reason.message); // "Explosion!"
    console.log(rejected === promise); // true
});

rejected = Promise.reject(new Error("Explosion!"));


/* out
Explosion!
true
*/