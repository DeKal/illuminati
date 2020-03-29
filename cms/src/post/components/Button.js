import { styled } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const PostButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors.primary,
  marginLeft: '8px',
  padding: '12px 24px'
}))

export default PostButton
