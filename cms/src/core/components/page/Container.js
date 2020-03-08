import { styled } from '@material-ui/core/styles'

const Container = styled('div')(({ theme }) => ({
  background: theme.colors.background,
  padding: theme.spaces.medium,
  height: '100%'
}))

export default Container
