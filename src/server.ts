import Cookie from '@fastify/cookie'
import fastify from 'fastify'

import { env } from './env'
import { transactionsRoutes } from './router/transactions'

const app = fastify()

app.register(Cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
