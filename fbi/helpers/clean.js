module.exports = (require, ctx) => {
  const rm = require('rimraf')

  return function clean () {
    rm.sync(ctx.options.dist)
    ctx.log(`deleted:   ${ctx.options.dist}`)
  }
}
