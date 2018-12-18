var pack = require('../../package.json')
const env = process.env.NODE_ENV
pack.scripts.postinstall = `npm run build-${env}`
