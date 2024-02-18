import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottie-files/blogging-animation.json';

export default function Ivanthedevblogging() {
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