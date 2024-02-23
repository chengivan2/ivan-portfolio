import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottie-files/morph-call-animation.json';

export default function Callanimation() {
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
                height={18}
                width={18}
            />
        </div>
    );
}