import React from 'react'
// import ui from '../../assests/images/ui.svg'
// import seo from '../../assests/images/seo.svg'
// import development from '../../assests/images/development.svg'
// import marketing from '../../assests/images/marketing.svg'



export default function Card({ title, caption, image,iconColor }) {
  return (

    <div className='card-wrapper flex-none mr-4 p-3 w-11/12 sm:w-4/5 mb-4 md:mr-0 md:w-60 lg:w-96 xl:w-56 mb-3 shadow-lg'>
      <div className='card text-center'>
        <a className={iconColor} href="#"><i className={`card-icon ${image}`}></i></a>
        <p className='card-title'>{title}</p>
        <p className='card-caption'>{caption}</p>
        <a className='card-link mb-3' href="#">Read more</a>
        <div className='card-bg'></div>
      </div>
    </div>
  )
}
