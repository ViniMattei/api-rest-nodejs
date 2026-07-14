import fastify from 'fastify'
import { transactionsRoutes } from './router/transactions'
import { env } from './env'

const app = fastify()

app.register(transactionsRoutes)

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
