import { connect } from 'react-redux'
import Head from 'posts/components/Posts/Head'
import {
  setOrder,
  setOrderColumn,
  selectAllPosts,
  clearSelected
} from 'posts/state/actions'
import { getOrder, getOrderColumn } from 'posts/state/selectors'

const mapStateToProps = state => ({
  order: getOrder(state),
  orderColumn: getOrderColumn(state)
})

const mapDispatchToProps = {
  setOrder,
  setOrderColumn,
  selectAllPosts,
  clearSelected
}

export default connect(mapStateToProps, mapDispatchToProps)(Head)
