import { styled } from '@material-ui/core/styles'

const Title = styled('h2')(({ theme }) => ({
  color: theme.colors.dark,
  fontSize: theme.fontSizes.XXXL,
  fontWeight: 700,
  textTransform: 'uppercase',
  margin: `${theme.spaces.xsmall}px`
}))

export default Title
