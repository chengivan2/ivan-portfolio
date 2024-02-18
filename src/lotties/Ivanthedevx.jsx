import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottie-files/x-animation.json';

export default function Ivanthedevx() {
    const defaultOptions = {
        loop: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={56}
                width={56}
            />
        </div>
    );
}