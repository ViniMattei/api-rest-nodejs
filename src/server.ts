import fastify from 'fastify'
import Cookie from '@fastify/cookie'

import { transactionsRoutes } from './router/transactions'
import { env } from './env'

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
