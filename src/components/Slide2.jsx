// import React from 'react'
import funlogo from "../assets/funfoxlogo.png";
import moon from "../assets/moon.svg";
import beach from "../assets/beach.svg";
import home from "../assets/home.png";
import alarm from "../assets/alarm.png";

import spiral from "../assets/spiral1.png";
import pensil from "../assets/pensil.svg";
import scale from "../assets/scale.svg";
import quesMark from "../assets/quesmark.png";

import cap from "../assets/cap.svg";
import book from "../assets/book.svg";
import bag from "../assets/bag.svg";
import "../Styles/Slide1 copy.css";
import Footer from "./Footer";
import "../Styles/Sidebar.css";
const Slide2 = () => {
  const images = [
    { id: 1, text: "Sunny day at a beach", image: beach },
    {
      id: 2,
      text: "A cold rainy night in a haunted house  October",
      image: moon,
    },
  ];
  return (
    <>
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="header">
            <div className="logo">
              <img src={funlogo} alt="logo" className="logoImg" />
            </div>
          </div>
          <div className="mainBody">
            <div className="cont">
              <img src={spiral} alt="logo" className="imgStyle" />
              <img src={pensil} alt="pensil" className="image" />
              <img src={book} alt="diary" className="image" />
              <img src={bag} alt="scale" className="image" />
            </div>

            <div className="centerContainer">
              <div className="container1">
                <p className="insidepara1">
                  Can you figure out the definition of setting from the
                  following examples?
                </p>
                <p className="smallPara">(take a minute to think about this)</p>
              </div>
              <div className="image-container">
                {images.map((image) => (
                  <div key={image.id} className="image-wrapper">
                    <div className="image-item">
                      <img src={image.image} alt={image.text} />
                    </div>
                    <div className="caption-wrapper">
                      <p className="caption">{image.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="askQuestion">
                <p className="question">
                  So, what do you think the definition of setting is?
                </p>
              </div>

              <div className="answer">
                <span className="question">Any guesses?</span>
                <div className="inputWrapper">
                  <input
                    type="text"
                    autoFocus="true"
                    className="inputQuestion"
                  />
                </div>
                <div className="hint">
                  <span className="question">Hint: </span>
                  <div className="helpIcons">
                    <img src={alarm} alt="alarm" />
                    <img src={home} alt="home" />
                  </div>
                </div>
              </div>

              <div className="container2">
                <div className="para2">
                  <p className="insidepara2">
                    Setting is the time
                    <img src={alarm} alt="alarm" className="Icon" /> and place{" "}
                    <img src={home} alt="home" className="Icon" />
                    of a story. It often answers the questions: when? and where?
                  </p>
                </div>
              </div>

              <div className="postImageContainer">
                <p className="postImagePara">
                  The time of the story could be in the past, future, day,
                  night, summer or winter. A story may take place in a school, a
                  mall, a desert, an airplane or in a variety of other places.
                </p>
              </div>
            </div>

            <div className="cont">
              <img src={spiral} alt="logo" className="imgStyle" />
              <img src={scale} alt="pensil" className="image" />
              <img src={quesMark} alt="diary" className="image" />
              <img src={cap} alt="scale" className="image" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Slide2;
