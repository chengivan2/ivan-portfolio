import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottie-files/scroll-animation.json';

export default function Scrollanimation() {
    const defaultOptions = {
        loop: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='scrollAnimationContainer'>
            <Lottie
                options={defaultOptions}
                height={80}
                width={80}
            />
        </div>
    );
}