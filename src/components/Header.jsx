import funlogo from "../assets/funfoxlogo.png";
import Svg1 from "./Svg1";
// import "../Styles/Slide1.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={funlogo} alt="logo" className="logoImg" />
        </div>
        <Svg1 />
      </div>
    </>
  );
};

export default Header;
