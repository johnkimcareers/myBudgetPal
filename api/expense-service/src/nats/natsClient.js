const { connect } = require('nats');

let natsConnection;

const connectNATS = async () => {
    try {
        natsConnection = await connect({ servers: 'nats://localhost:4222' });
        console.log('Connected to NATS');
    } catch (error) {
        console.error('Error connecting to NATS:', error);
    }
};

const publishEvent = (subject, message) => {
    if (!natsConnection) {
        console.error('Not connected to NATS');
        return;
    }

    const msg = JSON.stringify(message);
    natsConnection.publish(subject, msg);
    console.log(`Published message to ${subject}`);
};

module.exports = {
    connectNATS,
    publishEvent,
};
