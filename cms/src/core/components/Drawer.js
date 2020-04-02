import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { drawerPages } from 'core/const/pages'
import { isPathMatchUrl } from 'core/utils/misc'

const LeftDrawer = ({ classes, open, history }) => (
  <Drawer
    className={classes.drawer}
    variant="persistent"
    anchor="left"
    open={open}
    classes={{
      paper: classes.drawerPaper
    }}
  >
    <div className={classes.drawerHeader}>Blogs</div>
    <NoPaddingList>{renderDrawerItems(classes, history)}</NoPaddingList>
  </Drawer>
)

const renderDrawerItems = (classes, history) => {
  const matchedPath = getMatchingPath(history.location.pathname)
  return Object.keys(drawerPages).map(key => {
    const page = drawerPages[key]
    const isHighLight = matchedPath === page.url
    return (
      <ListItem
        button
        key={key}
        data-test-id={`drawer-item-${key}`}
        className={isHighLight ? classes.highLightListItem : classes.listItem}
        onClick={() => history.push(page.url)}
      >
        <ListItemIcon>{page.icon}</ListItemIcon>
        <ListItemText primary={page.name} />
      </ListItem>
    )
  })
}

export const getMatchingPath = pathName => {
  let matchingPath = null
  Object.keys(drawerPages).map(key => {
    const page = drawerPages[key]
    const isHighLight = isPathMatchUrl(pathName, page.url, page.exact)
    if (isHighLight && !matchingPath) {
      matchingPath = page.url
    }
    return null
  })
  return matchingPath
}

export default LeftDrawer

LeftDrawer.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  history: PropTypes.object,
  openDrawer: PropTypes.func,
  closeDrawer: PropTypes.func
}

const NoPaddingList = withStyles({
  padding: {
    padding: 0
  }
})(List)
