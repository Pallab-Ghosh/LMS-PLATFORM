 import React from 'react'
import Sidebar from './_components/sidebar'
 
 const Dashboardlayout = ({children}:{children:React.ReactNode}) => {
   return (
     <div className='h-full'>

        <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'  >
          <Sidebar/>
        </div>

        <div className='md p-56 '>
        {children}
        </div>

      
     </div>
   )
 }
 
 export default Dashboardlayout