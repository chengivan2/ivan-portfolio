import React from 'react'
import Lottie from 'react-lottie';
import animationData from './lottie-files/success-tick.json';

export default function SuccessLottie() {
    const defaultOptions = {
        loop: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={250}
                width={250}
            />
        </div>
    );
}