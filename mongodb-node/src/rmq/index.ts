#!/usr/bin/env node
//@ts-nocheck
const amqp = require("amqplib/callback_api");
export function sendMessageToQueue(paramToSend) {
    amqp.connect("amqp://localhost", function (error0, connection) {
        if (error0) {
            throw error0;
        }
        connection.createChannel(function (error1, channel) {
            if (error1) {
                throw error1;
            }

            const queue = "email_message";

            channel.assertQueue(queue, {
                durable: false,
            });
            const msg = getMessage(paramToSend);
            channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));
            console.log(`[Producer][Sent] => ${msg.messageId} User interested ${paramToSend}  Sending to email service -  ${queue}`);
        });
    });
    let inc = 0;
    function getMessage(p) {
        return {
            messageId: inc++,
            payload: `User interested ${p}  Sending to email service`,
            timestamp: new Date().toISOString(),
        };
    }
}


// {
//     messageId: Number,
//     payload: String,
//     dateTime: String
// }

