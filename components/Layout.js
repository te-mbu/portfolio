import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-11/12 h-full inline-block z-0 md:max-w-6xl m-auto ${className}`}>
        {children}
    </div>
  )
}

export default Layout