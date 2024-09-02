/*main things to do
store responses
read responses
use stored response as possible replies
*/
/*
storing messages sent by user are done in store.js
this will take the users responses and organizes them into categories of conversation
such as Greetings, & interests.
*/
/*
Responses given to the user will be read and sent through respond.js
this will take already categorized and stored responses and send them based on what the user is saying
and example being the user says hi and the bot goes to the category labeled greeting and chooses one of the greetings
*/
/*
simply declare, & double check pathing


const ai = require('./modules/ai/indexai.js')
ai.load()


in your index file
*/
module.exports = {
    load: function () {
        response = require('./response.js'),
        response.read()
    }
}
