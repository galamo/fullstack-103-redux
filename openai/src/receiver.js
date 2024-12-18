#!/usr/bin/env node
import lib from "amqplib/callback_api.js"
const amqp = lib
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

        console.log("[=====] Consumer is waiting for new message [=====]");

        channel.consume(
            queue,
            function (msg) {
                console.log(`[Consumer][received] => ${msg.content.toString()}`);
            },
            {
                noAck: true,
            }
        );
    });
});
