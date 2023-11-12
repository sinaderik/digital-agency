import React, { useState, useEffect } from 'react'
import "./PostGallery.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function PostGallery({ comment, rotateImage }) {

    const [postIndex, setPostIndex] = useState(0)
    const [showAnimation, setShowAnimation] = useState(true);
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        setShowAnimation(true)

        return () => {
            setShowAnimation(false)

        };
    }, [postIndex]);

    useEffect(() => {
        setShowAnimation(true);
        console.log("anime show")
        return () => {
            setShowAnimation(false)

        };
    }, [buttonClicked]);

    function showPreviousPost() {
        setPostIndex((previousIndex) => {
            if (previousIndex === 0) return comment.length - 1
            return previousIndex - 1
        })
        setButtonClicked(!buttonClicked);
        setShowAnimation(!showAnimation)
        rotateImage();
    }
    function showNextPost() {
        setPostIndex((previousIndex) => {
            if (previousIndex === comment.length - 1) return 0
            return previousIndex + 1
        })
        setButtonClicked(!buttonClicked);
        setShowAnimation(!showAnimation);
        rotateImage();
    }
    return (
        <div>
            <div className='mb-12'>
                <p className='section-title mb-6 font-bold text-xl'>testimonial</p>
                <p className='mb-6 font-bold text-lg sm:text-2xl'>What Our Customer Say <br />About Us</p>
            </div>
            <div className={showAnimation ? "comment-wrapper pt-3 pb-3 pl-5 pr-5 showAnime" : "comment-wrapper pt-3 pb-3 pl-5 pr-5"}>
                <div className='comment'>
                    <div className='flex items-center'>
                        <img className='comment-icon' src={comment[postIndex].image} alt="user-icon" />
                        {/* <p>{comment[postIndex].image}</p> */}
                        <h3>{comment[postIndex].name}</h3>
                    </div>
                    <div className='comment-caption mt-5'>
                        <p>{comment[postIndex].caption}</p>
                    </div>
                </div>
                <button className='main-btn header-btn p-1 arrowbtn nextbtn' onClick={() => showNextPost()}><ArrowForwardIcon /></button>
                <button className='main-btn header-btn p-1 arrowbtn backbtn' onClick={() => showPreviousPost()}><ArrowBackIcon /></button>
            </div>
        </div>
    )
}
