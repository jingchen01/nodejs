var exports = module.exports = {};

var Tutor = require('./Tutorial.js');

exports.NodeTutorial = function () {
    console.log("Node Tutorial");
    function pTutor() {
        var PTutor = Tutor;
        PTutor.tutorial;
    }
}

/*
Or
var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
console.log("Node Tutorial")
this.pTutor = function ()
{
var PTutor=Tutor
PTutor.tutorial;
}
}
*/