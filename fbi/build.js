const copy = require('./helpers/copy')(require, ctx)
const clean = require('./helpers/clean')(require, ctx)
const complier = require('./helpers/complier')(require, ctx)

process.env.NODE_ENV = 'production'
clean()
complier()
copy()
