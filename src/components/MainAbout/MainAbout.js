import React from 'react';
import user from '../../assests/images/user.svg';
import userShape from '../../assests/images/userShape.svg';
import ActiveClient from '../../assests/images/ActiveClient.svg';
import alex from '../../assests/images/alex.svg';
import Sale from '../../assests/images/Sale.svg';
import "./MainAbout.css";

export default function () {
    return (
        <div className='main-about-wrapper lg:flex lg:items-center'>
            <div className='job-content lg:flex-1 mb-9 lg:mb-0 md:mr-3 text-center md:text-left'>
                <p className='section-title mb-6 font-bold text-xl'>ABOUT US</p>
                <p className='mb-6 font-bold text-lg sm:text-2xl'>We're More Than Digital <br /> Agency in the World</p>
                <div className='mb-8'>Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta. </div>
                <a className='main-btn header-btn p-2' href="#">Get in touch</a>
            </div>
            <div className='user-image-wrapper lg:flex-1'>
                <img style={{width:"100%"}} src={user} alt="user" />
                <img className='userShape' src={userShape} alt="user" />
                <img className='ActiveClient-icon' src={ActiveClient} alt="user" />
                <img className='alex-icon' src={alex} alt="user" />
                <img className='Sale-icon' src={Sale} alt="user" />
            </div>
        </div>
    )
}
