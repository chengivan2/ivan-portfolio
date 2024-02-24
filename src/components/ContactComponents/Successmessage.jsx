import React from 'react'
import SuccessLottie from '../../lotties/SuccessLottie'
import '../../componentstyles/HomeComponentStyles/Successmessage.css'

export default function Successmessage( { onClick }) {
  return (
    <div className='hc-success-message' onClick={onClick}>
        <SuccessLottie />
        <p>Message successfully received. I will contact you ASAP!</p>
        <div className="hc-success-button">OK</div>
    </div>
  )
}