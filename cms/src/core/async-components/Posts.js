import loadable from '@loadable/component'

const Posts = loadable(() =>
  import(/* webpackChunkName: "posts" */ 'posts/containers/Posts')
)

export default Posts
