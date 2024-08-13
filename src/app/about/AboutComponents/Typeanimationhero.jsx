import { TypeAnimation } from "react-type-animation";

const Abouttypinganimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hey, I know what we are gonna do today",
        2500,
        "Let's build that project together",
        2500,
      ]}
      wrapper="span"
      cursor={true}
      repeat={3}
      style={{ display: "inline-block" }}
    />
  );
};

export default Abouttypinganimation;
