import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Ivanthedevblogging() {
  //   const defaultOptions = {
  //     loop: true,
  //     animationData: animationData,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };

  return (
    <div>
      <DotLottieReact src="./lottie-files/blogging-animation.json" />

      {/* <Lottie options={defaultOptions} height={56} width={56} /> */}
    </div>
  );
}