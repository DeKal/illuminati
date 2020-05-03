import { styled } from '@material-ui/core/styles'

const Description = styled('p')(({ theme }) => ({
  color: theme.colors.dark,
  fontSize: theme.fontSizes.XL,
  fontWeight: 500,
  margin: `${theme.spaces.xsmall}px`
}))

export default Description
