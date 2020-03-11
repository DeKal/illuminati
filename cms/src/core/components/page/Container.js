import { styled } from '@material-ui/core/styles'

const Container = styled('div')(({ theme }) => ({
  background: theme.colors.background,
  padding: theme.spaces.medium,
  minHeight: `calc(100vh - ${theme.navbarHeight * 2})`
}))

export default Container
