import React from 'react'
import flutter from '../../assests/images/flutter.svg';
// import "./Development.css"

export default function AndroidTeam() {
    return (
        <div className='Development-wrapper text-center md:text-left mt-4 md:mt-8 lg:flex lg:justify-between lg:items-center'>
            <div className='development-content lg:ml-9 lg:flex-1'>
                <p className='section-title mb-6 font-bold text-xl'>DEVELOPMENT</p>
                <p className='mb-6 font-bold text-lg sm:text-2xl'>our skillful developers</p>
                <div className='mb-8'>Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta. </div>
                <a className='main-btn header-btn p-2' href="#">Get in touch</a>
            </div>
            <div className='devImage-wrapper md:w-96 lg:w-full lg:flex-1 mb-12 lg:mb-0'>
                <img src={flutter} alt="development" />
            </div>
        </div>
    )
}
