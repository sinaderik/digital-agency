import React from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import girls from '../../assests/images/Happy girls.svg';
import linkedin from '../../assests/images/linkedin-icon.svg'
import bing from '../../assests/images/bing-icon.svg'
import google from '../../assests/images/google-icon.svg'
import client from '../../assests/images/client.svg';
import member from '../../assests/images/member.svg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './Header.css'
// import icons from '../../assests/images/social-icons.svg'

export default function Header() {
    return (
        <Container>
            <div className='header-wrapper mt-6 md:mt-2 default-margin-bottom'>
                <Grid container alignItems="center" spacing={2}>
                    <Grid xs={12} md={6} >
                        <div className='p-0 md:p-4 header-description' style={{ textAlign: "left" }}>
                            <h1 className='header-title text-center md:text-left'>Best <span className='section-title'>Marketing</span> Digital Agency</h1>
                            <div className='mb-6 mt-6 md:mt-5 text-center md:text-left md:w-80'>
                                <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                            </div>
                            <div className='header-btn-wrapper w-full mt-8 mb-6 text-center md:text-left'>
                                <a className='main-btn header-btn p-2 mr-4' href="#">Get Started</a>
                                <a className='header-btn p-2' href="#"><PlayCircleIcon style={{color:"var(--orangeBackGround"}}/> Watch Video</a>
                                
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} md={6} >
                        <div className='header-image' style={{ textAlign: "center" }}>
                            <img src={girls} alt="girls" />
                            <img className='social-icons linkedin-icon' src={linkedin} alt="girls" />
                            <img className='social-icons bing-icon' src={bing} alt="girls" />
                            <img className='social-icons google-icon' src={google} alt="girls" />
                            <img className='social-icons client-icon' src={client} alt="client" />
                            <img className='social-icons member-icon' src={member} alt="member" />
                            {/* <img className='social-icons' src={icons} alt="girls" /> */}
                        </div>
                    </Grid>

                </Grid>
            </div>
        </Container>
    )
}
