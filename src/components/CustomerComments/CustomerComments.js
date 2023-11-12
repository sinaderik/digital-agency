import React from 'react'
import { useState } from 'react';
import PostGallery from '../PostGallery/PostGallery'
import commentIcon1 from '../../assests/images/commentIcon1.jpg';
import commentIcon2 from '../../assests/images/commentIcon2.jpg';
import commentIcon3 from '../../assests/images/commentIcon3.jpg';
import commentImage from '../../assests/images/comment-img.svg';
import "./CustomerComments.css"

export default function CustomerComments() {
    const [showRotate,setShowRotate]=useState(false)
    
    const comments = [
        { name: "Johne Abram", image: commentIcon1, caption: "React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is community of individual." },
        { name: "Pitter Smith", image: commentIcon2, caption: "Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript community of individua" },
        { name: "Katrin Nova", image: commentIcon3, caption: "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications from a single codebase" },
    ]

    const handleAction = () => {
        // Your action code here
        console.log('Function called from ParentComponent');
        setShowRotate(!showRotate)
    };

      
    return (
        <div className='CustomerComments-section flex flex-col items-center justify-between lg:flex-row lg:items-center lg:justify-between default-margin-bottom'>
            <div className="comment-container xl:flex-1 mb-10 lg:mb-0">
                <PostGallery rotateImage={handleAction} comment={comments} />
            </div>
            <div className={showRotate?"comment-img-container mt-10 lg:mt-0 md:w-80 lg:w-80 xl:flex-1 rotateRight":"comment-img-container mt-10 lg:mt-0 md:w-80 lg:w-80 xl:flex-1"}>
                <img src={commentImage} alt="comments" />
            </div>
        </div>
    )
}
