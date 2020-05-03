import loadable from '@loadable/component'

const Dashboard = loadable(() =>
  import(/* webpackChunkName: "post" */ 'dashboard/components/Dashboard')
)

export default Dashboard
