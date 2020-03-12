import { styled } from '@material-ui/core/styles'

const Container = styled('div')(({ theme }) => ({
  height: '100%',
  margin: `${theme.spaces.small}px 0`,
  padding: `${theme.spaces.medium}px`,
  border: `1px solid ${theme.colors.grey1}`,
  boxShadow: '0 1px 1px rgba(0,0,0,.04)',
  background: theme.colors.primaryBg,
  flexGrow: 1
}))

export default Container
