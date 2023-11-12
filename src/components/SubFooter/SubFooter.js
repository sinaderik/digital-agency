import React from 'react'
import "./SubFooter.css"

export default function SubFooter() {
  return (
    <div className='subfooter-wrapper md:flex justify-between items-center'>
        <div className='mb-5 md:mb-0'>© 2023 proxylab - All rights reserved.</div>
        <div className='mb-5 md:mb-0'>
            <span className='ml-2 md:ml-5'>Privacy</span>
            <span className='ml-2 md:ml-5'>Security</span>
            <span className='ml-2 md:ml-5'>Terms</span>
        </div>
    </div>
  )
}
