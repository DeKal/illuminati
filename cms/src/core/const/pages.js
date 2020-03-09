import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import PeopleIcon from '@material-ui/icons/People'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import SettingsIcon from '@material-ui/icons/Settings'

export const pages = {
  dashboard: {
    name: 'Dashboard',
    icon: <HomeIcon />,
    url: '/'
  },
  posts: {
    name: 'Posts',
    icon: <LibraryBooksIcon />,
    url: '/posts'
  },
  users: {
    name: 'Users',
    icon: <PeopleIcon />,
    url: '/users'
  },
  profile: {
    name: 'Profile',
    icon: <AccountBoxIcon />,
    url: '/profile'
  },
  settings: {
    name: 'Settings',
    icon: <SettingsIcon />,
    url: '/settings'
  }
}
