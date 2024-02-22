import React from 'react'
import SuccessLottie from '../lotties/SuccessLottie'
import "../componentstyles/Successmessage.css"

export default function Successmessage() {
  return (
    <div className='hc-success-message'>
        <SuccessLottie />
        <p>Message successfully sent!</p>
    </div>
  )
}