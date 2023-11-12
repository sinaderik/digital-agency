import React from 'react'
import Cards from '../Cards/Cards'
import { Container } from '@mui/material';

export default function Job() {
    return (
        <Container>
            <div className='job-section default-margin-bottom'>
                <div className='xl:flex justify-evenly items-center'>
                    <div className='job-content lg:flex-1 mb-9 lg:mb-0 md:mr-3 text-center md:text-left'>
                        <p className='section-title mb-6 font-bold text-xl'>WHAT WE DO</p>
                        <p className='mb-6 font-bold text-lg sm:text-2xl'>We Are Here To Help You <br /> Build Your Business</p>
                        <div className='mb-8'>Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta. </div>
                        <a className='main-btn header-btn p-2' href="#">Explore all services</a>
                    </div>
                    <div className='lg:flex-1'>
                        <Cards />
                    </div>
                </div>
            </div>
        </Container>
    )
}
