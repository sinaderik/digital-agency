import React from 'react'
import SampleProjects from '../SampleProjects/SampleProjects'
import "./Projects.css"
export default function Projects() {
    return (
        <div className='Projects-wrapper default-margin-bottom'>
            <p className='section-title mb-6 font-bold text-xl'>OUR WORKS</p>
            <p className='mb-6 font-bold text-lg sm:text-2xl'>See Our Recent Case Studies</p>
            <SampleProjects />
        </div>
    )
}
