const copy = require('./helpers/copy')(require, ctx)
const clean = require('./helpers/clean')(require, ctx)
const watch = require('./helpers/watch')(require, ctx)
const complier = require('./helpers/complier')(require, ctx)

clean()
complier()
copy()
watch()

// start server
function startServer () {
  const nodemon = require('nodemon')
  nodemon({
    script: ctx.options.dist + 'index.js',
    ext: 'js json',
    watch: false, // [ ctx.options.dist ],
    verbose: true, // for debug purpose only
    ignore: [
      '.git',
      'node_modules',
      'src',
      'test',
      'fbi'
    ],
    env: {
      'NODE_ENV': 'development'
    }
  })

  nodemon
    .on('start', () => {
      ctx.log('Service started', 1)
    })
    .on('quit', () => {
      ctx.log('Service quit', -1)
    })
    .on('restart', files => {
      ctx.log(`Service restarted`, 1)
    })
    .on('crash', () => {
      ctx.log('Service crashed for some reason', 0)
    })
}

startServer()
