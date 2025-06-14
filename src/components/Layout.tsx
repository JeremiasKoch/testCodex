import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

export default Layout
