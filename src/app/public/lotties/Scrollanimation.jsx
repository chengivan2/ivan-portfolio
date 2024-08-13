import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Scrollanimation() {
  // const defaultOptions = {
  //     loop: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //         preserveAspectRatio: "xMidYMid slice"
  //     }
  // };

  return (
    <div className="scrollAnimationContainer">
      <DotLottieReact src="./lottie-files/scroll-animation.json" />
      {/* <Lottie
                options={defaultOptions}
                height={80}
                width={80}
            /> */}
    </div>
  );
}
