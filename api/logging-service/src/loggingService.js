const { connect } = require('nats')

async function startLoggingService() {
    const natsConnection = await connect({ servers: 'nats://localhost:4222' })

    console.log('Logging service started')

    // Subscription to 'expense.created' events
    const subscriptionCreated = natsConnection.subscribe('expense.created');
    (async () => {
        for await (const message of subscriptionCreated) {
            console.log(`Logging created expense: ${message.data}`)
        }
    })()

    const subscriptionDeleted = natsConnection.subscribe('expense.deleted');
    (async () => {
        for await (const message of subscriptionDeleted) {
            console.log(`Logging deleted expense: ${message.data}`)
        }
    })()

}

startLoggingService()
