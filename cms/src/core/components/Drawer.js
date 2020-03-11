import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { pages } from 'core/const/pages'

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
    <NoPaddingList>
      {Object.keys(pages).map(key => {
        const page = pages[key]
        const isHighLight = isPathMatchUrl(history.location.pathname, page.url)
        return (
          <ListItem
            button
            key={key}
            data-test-id={`drawer-item-${key}`}
            className={
              isHighLight ? classes.highLightListItem : classes.listItem
            }
            onClick={() => history.push(page.url)}
          >
            <ListItemIcon>{page.icon}</ListItemIcon>
            <ListItemText primary={page.name} />
          </ListItem>
        )
      })}
    </NoPaddingList>
  </Drawer>
)

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

const isPathMatchUrl = (pathName, url) => {
  if (url === '/' || pathName === '/') {
    return pathName === url
  }
  return pathName.includes(url)
}
