import { connect } from 'react-redux'
import Pagination from 'posts/components/Posts/Pagination'
import { changePage, changeRowsPerPage } from 'posts/state/actions'
import { getPage, getRowsPerPage } from 'posts/state/selectors'

const mapStateToProps = state => ({
  page: getPage(state),
  rowsPerPage: getRowsPerPage(state)
})

const mapDispatchToProps = {
  changePage,
  changeRowsPerPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
