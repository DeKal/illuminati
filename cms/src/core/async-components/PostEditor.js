import loadable from '@loadable/component'

const PostEditor = loadable(() =>
  import(/* webpackChunkName: "post-editor" */ 'post/containers/Content')
)

export default PostEditor
