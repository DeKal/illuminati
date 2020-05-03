import loadable from '@loadable/component'

const Post = loadable(() =>
  import(/* webpackChunkName: "post" */ 'post/containers/Post')
)

export default Post
