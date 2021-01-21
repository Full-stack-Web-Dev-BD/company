import React from 'react'
import CIcon from '@coreui/icons-react'
// import cil-home from '@coreui/icons-react'
import { cifAU } from '@coreui/icons';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/home',
    icon: (<i class="fas fa-home"></i>)
  },










  // Quotation Tools
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Quotation Tools']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Companies',
    route: '/companies',
    icon: (<i class="fas fa-sitemap"></i>),
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create',
        to: '/companies/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage',
        to: '/companies/manage',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: (<i class="fas fa-user-tie"></i>),
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Add User /Companies',
        to: '/users/add-user',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage',
        to: '/users/manage-user',
      },
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Taxes & Tax Groups',
    route: '/taxes',
    icon: (<i class="fas fa-hand-holding-usd"></i>),
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create',
        to: '/texes/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage',
        to: '/taxes/cards',
      },
    ],
  },














  // Admin Tools Route
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin Tools Tools']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'System Settings',
    to: '/settings',
    icon: (<i class="fas fa-user-shield"></i>),
    badge: {
      color: 'info',
      text: 'Admin',
    },
  },




  {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Extras pages '],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Page 1',
        to: '/login',
      },
    ],
  },

  
  
  {
    _tag: 'CSidebarNavDivider',
    className: 'm-2'
  }
]

export default _nav
