function buildConfig(env){
  if(!env){
    env = "dev"
  }
  process.env.NODE_ENV = (env === 'dev') ? 'staging' : 'production'
  if (env === 'dev' || env === 'prod')
    return require(`./src/config/${env}.js` )
  else
    console.log("Wrong webpack build parameter.Pssible choices: `dev` or `prod`")
}

module.exports = buildConfig