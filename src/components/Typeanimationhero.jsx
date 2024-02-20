import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        'I can solve your business problems', // Types 'One'
        2500, // Waits 1s
        'I can make that cool design you need', // Deletes 'One' and types 'Two'
        2500, // Waits 2s
        'I can develop your website to meet your business needs', // Types 'Three' without deleting 'Two'
        2500,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />
  );
};

export default ExampleComponent;