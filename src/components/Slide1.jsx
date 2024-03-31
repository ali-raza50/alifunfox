import kid from "../assets/kid.png";
import cloud from "../assets/cloud.svg";
import cloud2 from "../assets/cloud2.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.svg";
import spiral from "../assets/spiral1.png";
import pensil from "../assets/pensil.svg";
import scale from "../assets/scale.svg";
import cap from "../assets/cap.svg";
import book from "../assets/book.svg";
import quesMark from "../assets/quesmark.png";

import bag from "../assets/bag.svg";
import "../Styles/Slide1.css";
import Footer from "./Footer";
import Header from "./Header";
import "../Styles/Sidebar.css";

const Slide1 = () => {
  // Define an array of menu items
  const menuItems = [
    { id: 1, text: "Setting", image: cloud },
    { id: 2, text: "CHARACTERS", image: cloud2 }, // Add more menu items as needed
    { id: 3, text: "PLOT", image: cloud },
    { id: 4, text: "PROBLEM OR CONFLICT", image: cloud4 },
    { id: 5, text: "RESOLUTION", image: cloud5 },
  ];
  return (
    <>
      <div className="outerContainer">
        <div className="innerContainer">
          <Header />

          <div className="mainBody">
            <div className="cont">
              <img src={spiral} alt="logo" className="imgStyle" />
              <img src={pensil} alt="pensil" className="image" />
              <img src={book} alt="diary" className="image" />
              <img src={bag} alt="scale" className="image" />
            </div>
            <div className="centerContainer">
              <div className="heading">
                <p className="Headtext">Elements of Story Writing</p>
              </div>
              <div className="container1">
                <p className="insidepara1">
                  Welcome to term 2 of Writers Club. Are you excited for this
                  amazing journey?
                  <br /> Over the next week, we will be practicing the different
                  elements of story writing. Our aim is to make stories more
                  interesting and exciting.
                </p>
              </div>
              <div className="container2">
                <div className="para2">
                  <p className="insidepara2">
                    There are <strong>five</strong> elements which make the
                    foundation for story
                    {/* <br /> */}
                    writing. An element is an essential part of something and
                    {/* <br /> */}
                    every fiction story has the same key elements:
                  </p>
                </div>
                <div className="imgContainer">
                  <img src={kid} alt="logo" className="kid" />
                </div>
              </div>

              <div className="menu">
                {menuItems.map((item) => (
                  <div key={item.id}>
                    <img src={item.image} alt={item.text} />
                    <div className="overlayText">
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="postImageContainer">
                <p className="postImagePara">
                  You must be familiar with some of these. If not, do not worry!
                  we will cover all these elements as we go along.
                </p>
              </div>
              <div className="outro">
                <svg
                  className="outrosvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="999"
                  height="141"
                  viewBox="0 0 999 141"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M121.646 139.291C151.68 140.799 883.074 140.045 998.699 138.392C997.712 135.492 996.866 132.331 996.02 129.287L954.705 128.591L995.456 126.735C991.602 111.966 988.969 97.1286 987.559 82.224L965.563 80.7451L987.277 79.3532C985.585 58.1271 984.457 21.7065 987.559 0.422376H937.785C930.593 -0.215567 123.197 1.00231 4.89324 1.90123C6.86731 8.74461 8.51238 15.5783 9.82843 22.4024L25.762 24.3452L18.5708 26.172L19.9808 27.5639L10.8155 28.7818C14.3876 50.8778 14.0586 72.8771 9.82843 94.7798L21.9549 95.9977L15.8917 98.1145L32.9533 99.7964L8.55938 100.985C6.5853 110.071 3.95321 119.147 0.663086 128.214L121.646 139.175V139.291Z"
                    fill="url(#paint0_linear_132_1221)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_132_1221"
                      x1="499.681"
                      y1="140.103"
                      x2="499.681"
                      y2="0.364373"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFF7ED" />
                      <stop offset="1" stopColor="#FFFAF4" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="textOverlay">
                  <p>
                    For today’s lesson, we will try to understand and practice
                    writing the setting for our stories. The setting is an
                    important element of every fiction story.
                  </p>
                </div>
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

export default Slide1;
