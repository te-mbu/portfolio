import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-3/4 bg-pink-300 h-full inline-block z-0 m-auto dark:bg-dark xl:w-5/6 lg:w-11/12  ${className}`}>
        {children}
    </div>
  )
}

export default Layout