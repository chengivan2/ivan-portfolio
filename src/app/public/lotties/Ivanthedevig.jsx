import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Ivanthedevig() {
  // const defaultOptions = {
  //     loop: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //         preserveAspectRatio: "xMidYMid slice"
  //     }
  // };

  return (
    <div>
      <DotLottieReact src="./lottie-files/instagram-animation.json" />
      {/* <Lottie
                options={defaultOptions}
                height={56}
                width={56}
            /> */}
    </div>
  );
}
