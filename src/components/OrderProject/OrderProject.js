import React from 'react'
import manThinking from '../../assests/images/man-thinking.svg';
import "./OrderProject.css"

export default function OrderProject() {
    return (
        <div className='OrderProject-wrapper flex flex-col-reverse sm:flex-row items-center sm:justify-between'>
            <div className='order-img-wrapper'>
                <img className='order-img' src={manThinking} alt="manThinking" />
            </div>
            <div className='space-getter'></div>
            <div className='description text-center'>
                <p className='mb-6 font-bold text-lg sm:text-2xl'>Have A Project In Mind? <br />Let's Get To Work.</p>
                <a class="main-btn header-btn p-2" href="#">Get in touch</a>
            </div>
        </div>
    )
}
