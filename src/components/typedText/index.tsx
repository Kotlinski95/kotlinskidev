import './index.scss';
import Typed from 'react-typed';

const TypedText = () => {
  return (
    <div>
      <Typed
        strings={[
          'Welcome on my webstie!',
          'This page is still in working...',
          'Be patient, sonn it will be ready! :)']}
        typeSpeed={60}
        backSpeed={50}
        attr="placeholder"
        loop >
        <input type="text" className="text-typed" disabled/>
      </Typed>
    </div>
  );
};
export default TypedText;