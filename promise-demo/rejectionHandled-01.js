let rejected;
process.on("rejectionHandled", (promise) => {
    console.log(rejected === promise); // true
});

rejected = Promise.reject(new Error("Explosion!"));

// wait to add the rejection handler
setTimeout(() => {
    rejected.catch((value) => {
        console.log(value.message); // "Explosion!"
    });
}, 1000);


/* out
(node:87142) UnhandledPromiseRejectionWarning: Error: Explosion!
    at Object.<anonymous> (/Users/chen_j/Develop/myBitbucketWorkspace/nodejs/promise-demo/rejectionHandled-01.js:6:27)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
(node:87142) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing insideof an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:87142) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
true
Explosion!
*/