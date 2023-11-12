import React from 'react'
import { Container } from '@mui/material';
import slack from '../../assests/images/slack.svg'
import descript from '../../assests/images/descript.svg'
import etsy from '../../assests/images/etsy.svg'
import spotify from '../../assests/images/spotify.svg'
import logitech from '../../assests/images/logitech.svg'
import "./Clients.css"

export default function Clients() {
  return (
    <Container>
        <div className='client-section w-full text-center default-margin-bottom'>
            <p>OUR TRUSTED CLIENTS</p>
            <div className='mt-2 md:mt-5 w-full text-center overflow-x-scroll flex md:overflow-x-hidden md:justify-evenly md:items-center md:flex-wrap'>
                <img className='company-icon slack-icon' src={slack} alt="companyIcon" />
                <img className='company-icon descript-icon' src={descript} alt="companyIcon" />
                <img className='company-icon etsy-icon' src={etsy} alt="companyIcon" />
                <img className='company-icon spotify-icon' src={spotify} alt="companyIcon" />
                <img className='company-icon logitech-icon' src={logitech} alt="companyIcon" />
            </div>
        </div>
    </Container>
  )
}
