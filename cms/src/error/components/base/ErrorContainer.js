import { styled } from '@material-ui/core/styles'

const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '50%',
  textAlign: 'center',
  transform: 'translateY(-50%)',
  backgroundColor: theme.colors.primaryBg
}))

export default Container
