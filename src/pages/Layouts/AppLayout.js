import React from 'react'

function AppLayout({children}) {
  return (
    <div className="app_layout" style={{width:"100%", maxWidth: "700px", margin:"auto",}}>
        {children}
    </div>
  )
}

export default AppLayout;