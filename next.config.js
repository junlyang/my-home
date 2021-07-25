const debug = process.env.NODE_ENV !== 'production'
const name = 'my-home'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}