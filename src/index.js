'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "your app id here";

var SKILL_NAME = "Brogrammer Facts";
var GET_FACT_MESSAGE = "Bro, here's your fact. I'm so pumped!";
var HELP_MESSAGE = "You can say tell me a Brogrammer fact, or, to bounce, you can say exit... Duuude, what can I help you with?";
var HELP_REPROMPT = "Brah, what can I help you with?";
var STOP_MESSAGE = "Later! I have to jet.";

var data = [
    "Write code, pump iron.",
    "Do you even git, bro?",
    "Crushing it in V.S. Code since April of 2016.",
    "Code, Fireball shot, code, repeat.",
    "Collar popped and Red Bull popped. Because legandary A. F., brah.",
    "Bug in my code? Bro, that's a feature",
    "Wanna bro down and crush some code?",
    "Dude, I'm a proud Men's Right's Activist. You mad, bro?",
    "I store my passwords in clear text, because I don't give a. f..",
    "Dude, there's this new thing it does everyting but sadly it's in preview. Bro who cares, it works right!",
    "Why did you add that extra if there? I don't know it just looked great."
];


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
