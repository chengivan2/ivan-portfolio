import { TypeAnimation } from 'react-type-animation';

const Abouttypinganimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Hey, I know what we are gonna do today', // Types 'One'
        2500, // Waits 1s
        'Let\'s build that project together', // Deletes 'One' and types 'Two'
        2500, // Waits 2s
      ]}
      wrapper="span"
      cursor={true}
      repeat={3}
      style={{ display: 'inline-block' }}
    />
  );
};

export default Abouttypinganimation;