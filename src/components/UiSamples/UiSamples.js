import React from 'react'
import "./UiSamples.css"
import ui1 from '../../assests/images/ui1.jpg';
import ui2 from '../../assests/images/ui2.jpg';
import ui3 from '../../assests/images/ui3.jpg';
import ui4 from '../../assests/images/ui4.jpg';
import ui5 from '../../assests/images/ui5.jpg';
import ui6 from '../../assests/images/ui6.jpg';


export default function UiSamples() {
  return (
    <div className='flex overflow-x-scroll md:overflow-x-hidden md:grid md:grid-cols-3'>
        <img className='ui-images' src={ui1} alt="ui1" />
        <img className='ui-images' src={ui2} alt="ui2" />
        <img className='ui-images' src={ui3} alt="ui3" />
        <img className='ui-images' src={ui4} alt="ui4" />
        <img className='ui-images' src={ui5} alt="ui5" />
        <img className='ui-images' src={ui6} alt="ui6" />
    </div>
  )
}
