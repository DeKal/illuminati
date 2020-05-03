import { styled } from '@material-ui/core/styles'

const Button = styled('a')(({ theme }) => ({
  fontSize: theme.fontSizes.base,
  textDecoration: 'none',
  textTransform: 'uppercase',
  background: theme.colors.primary,
  display: 'inline-block',
  padding: '15px 30px',
  borderRadius: '40px',
  color: theme.colors.primaryBg,
  fontWeight: '700',
  boxShadow: `0 4px 15px -5px ${theme.colors.primary}`,
  border: 'none',
  margin: `${theme.spaces.xsmall}px`,
  cursor: 'pointer'
}))

export default Button
