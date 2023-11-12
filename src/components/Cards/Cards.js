import React from 'react'
import { Container } from '@mui/material';
import { useState } from 'react';
import Card from './Card';
import "./Cards.css"
// import ui from '../../assests/images/ui.svg'
// import seo from '../../assests/images/seo.svg'
// import development from '../../assests/images/development.svg'
// import marketing from '../../assests/images/marketing.svg'

export default function Cards() {
    const [cardDetail, setCardDetail] = useState([
        { id: 1, icon: "fa-solid fa-bullseye", title: "Digital Marketing", caption: "That is the simply dummy text the printing and typesetting industry.", img: "fa-solid fa-bullseye",color:"Marketing-icon" },
        { id: 2, icon: "fa-solid fa-bullseye", title: "SEO", caption: "That is the simply dummy text the printing and typesetting industry.", img: "fa-solid fa-chart-simple",color:"seo-icon" },
        { id: 3, icon: "fa-solid fa-bullseye", title: "UI UX Design", caption: "That is the simply dummy text the printing and typesetting industry.", img: "fa-solid fa-layer-group",color:"ui-icon" },
        { id: 4, icon: "fa-solid fa-bullseye", title: "Web Development", caption: "That is the simply dummy text the printing and typesetting industry.", img: "fa-solid fa-laptop-code",color:"web-icon" },
    ])
    return (
        <div className='flex mt-6 xl:mt-0 overflow-x-scroll p-0 md:overflow-x-hidden md:flex-wrap md:justify-evenly'>
            {cardDetail.map(post => {
                return <Card key={post.id} title={post.title} caption={post.caption} image={post.img} iconColor={post.color} />
            })}
        </div>
    )
}
