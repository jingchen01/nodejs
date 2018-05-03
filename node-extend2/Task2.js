var exports = module.exports = {};
const task1 = require('./Task1.js');

exports.Task2 = () => {
    console.log("Task-2");
    const work2 = () => {
        const work2 = task1;
        work2.work;
    }
}

/*
Or
var Tutor=require('./Task1.js');
exports.NodeTutorial=function()
{
console.log("Task-2")
this.pTutor = function ()
{
var PTutor=Tutor
PTutor.tutorial;
}
}
*/