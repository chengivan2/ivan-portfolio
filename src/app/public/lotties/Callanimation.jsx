import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Callanimation() {
//   const defaultOptions = {
//     loop: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

  return (
    <div>
      <DotLottieReact src="./lottie-files/morph-call-animation.json" />
      {/* <Lottie options={defaultOptions} height={18} width={18} /> */}
    </div>
  );
}
