import React from 'react'
import SuccessLottie from '../lotties/SuccessLottie'
import "../componentstyles/Successmessage.css"

export default function Successmessage( { onClick }) {
  return (
    <div className='hc-success-message' onClick={onClick}>
        <SuccessLottie />
        <p>Message successfully sent!</p>
        <div className="hc-success-button">OK</div>
    </div>
  )
}