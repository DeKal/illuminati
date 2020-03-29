import loadable from '@loadable/component'

const User = loadable(() =>
  import(/* webpackChunkName: "user" */ 'user/components/User')
)

export default User
