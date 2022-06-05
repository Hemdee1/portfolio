import "./animated.scss";

const Animate = ({ strArr, letterClass, index }) => {
  return strArr.map((value, i) => (
    <span key={i} className={`${letterClass} _${index + i}`}>
      {value}
    </span>
  ));
};

export default Animate;
