import React from 'react'
import TextField from '@mui/material/TextField';
import logo from '../../assests/images/logo.svg'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer md:grid md:grid-cols-2 lg:grid-cols-5 gap-4'>
        <ul>
            <li className='footer-title'><img className='footer-logo' src={logo} alt="logo" /></li>
            <li className="footer-item"><FmdGoodOutlinedIcon className='footer-icon' />Dhaka, Bangladesh</li>
            <li className="footer-item"><PhoneIcon className='footer-icon' />0943833399</li>
            <li className="footer-item"><EmailOutlinedIcon className='footer-icon' />support@proxylab.com</li>
        </ul>
        <ul>
            <li className='footer-title'>Service</li>
            <li className="footer-item">UI UX Design</li>
            <li className="footer-item">Mobile Design</li>
            <li className="footer-item">Motion Graphic </li>
            <li className="footer-item">Web Development</li>
            <li className="footer-item">Digital Marketing</li>
            <li className="footer-item">Business Development</li>
        </ul>
        <ul>
            <li className='footer-title'>Company</li>
            <li className="footer-item">Service</li>
            <li className="footer-item">Features</li>
            <li className="footer-item">Our Team</li>
            <li className="footer-item">Portfolio</li>
            <li className="footer-item">Blog</li>
            <li className="footer-item">Contact Us</li>
        </ul>
        <ul>
            <li className='footer-title'>Our Social Media</li>
            <li className="footer-item">Dribbble</li>
            <li className="footer-item">Behance</li>
            <li className="footer-item">Medium</li>
            <li className="footer-item">Instagram</li>
            <li className="footer-item">Facebook</li>
            <li className="footer-item">Twitter</li>
        </ul>
        <div className='grid gap-y-4 col-span-2 lg:col-auto lg:text-left'>
            <a className='footer-title'>Join a Newsletter</a>
            <div>
                <p style={{marginBottom:"0.5rem"}}>Your Email</p>
                <TextField id="outlined-basic" label="Email" variant="outlined" />
            </div>
            <div style={{marginTop:"0.5rem"}}><a className='main-btn header-btn p-2' href="#">Subscribe</a></div>
        </div>
    </div>
  )
}
