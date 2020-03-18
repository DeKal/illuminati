import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Body from 'posts/components/Posts/Body'
import { setSelectedPost } from 'posts/state/actions'
import {
  getPage,
  getRowsPerPage,
  getOrder,
  getOrderColumn
} from 'posts/state/selectors'

const mapStateToProps = state => ({
  page: getPage(state),
  rowsPerPage: getRowsPerPage(state),
  order: getOrder(state),
  orderColumn: getOrderColumn(state)
})

const mapDispatchToProps = {
  setSelectedPost
}

const BodyWithRouter = withRouter(Body)
export default connect(mapStateToProps, mapDispatchToProps)(BodyWithRouter)
