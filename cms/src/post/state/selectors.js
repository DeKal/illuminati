export const getPostTitle = state => state.post.content.title

export const getEditedTitle = state => state.post.editedContent.title

export const getPostSlug = state => state.post.content.slug

export const getEditedSlug = state => state.post.editedContent.slug

export const getPostBrief = state => state.post.content.brief

export const getEditedBrief = state => state.post.editedContent.brief

export const getPostAuthor = state => state.post.content.author

export const getEditedAuthor = state => state.post.editedContent.author

export const getPostTime = state => state.post.content.time

export const getEditedTime = state => state.post.editedContent.time

export const getPostTags = state => state.post.content.tag

export const getEditedTags = state => state.post.editedContent.tag

export const getEditedContent = state => state.post.editedContent.content

export const getSavingContent = state => state.post.editedContent

export const getIsPostLoading = state => state.post.loading
