import './index.scss';
import Typed from 'react-typed';

const TypedText = () => {
  return (
    <div>
      <Typed
        strings={[
          `${language.typedText.text1}`,
          `${language.typedText.text2}`,
          `${language.typedText.text3}`]}
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