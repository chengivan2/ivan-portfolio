import React from 'react'
import SuccessLottie from '../../lotties/SuccessLottie'
import '../../componentstyles/AboutComponentStyles/Successmessage.css'

export default function Successmessage( { onClick }) {
  return (
    <div className='abt-success-message' onClick={onClick}>
        <SuccessLottie />
        <p>Message successfully received. I will contact you ASAP!</p>
        <div className="abt-success-button">OK</div>
    </div>
  )
}