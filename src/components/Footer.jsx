import "../Styles/Slide1.css";
import phone from "../assets/phone.png";
import info from "../assets/info.png";
import prev from "../assets/prevButton.png";
import next from "../assets/nextButton.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="phone">
          <img src={phone} alt="phone" className="phoneImg" />
        </div>
        <div className="pagingConatiner">
          <div className="prevImg">
            <img src={prev} alt="prev" className="button1" />
          </div>
          <div className="inputContainer">
            <div className="custom-div">
              <input type="text" className="page-input" value={1} />
              <div className="vertical-line"></div>
              <button className="dropdown-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="#FFFFFF"
                >
                  <path
                    d="M5.71901 4.92556C5.75027 4.87041 5.78557 4.81807 5.82455 4.76905C7.17099 3.30418 8.51871 1.84013 9.86769 0.376904C9.99221 0.2414 10.1285 0.15532 10.3088 0.184151C10.3873 0.197781 10.4611 0.233454 10.523 0.287626C10.5848 0.341798 10.6325 0.412584 10.6614 0.492951C10.6902 0.573317 10.6991 0.660468 10.6873 0.745744C10.6755 0.83102 10.6433 0.911453 10.5939 0.979053C10.5605 1.02263 10.5246 1.0639 10.4865 1.10261L6.08801 5.87326C5.80822 6.17722 5.57893 6.17598 5.29724 5.87038C3.82424 4.27261 2.35099 2.67512 0.877491 1.0779C0.748794 0.93869 0.667174 0.786299 0.699443 0.583661C0.713589 0.50006 0.747371 0.42183 0.797522 0.356528C0.847673 0.291226 0.912497 0.24106 0.985737 0.210875C1.05898 0.18069 1.13816 0.171507 1.21562 0.184214C1.29309 0.19692 1.36622 0.231085 1.42796 0.28341C1.47125 0.323296 1.51233 0.365931 1.55097 0.411089L5.57816 4.78099C5.61423 4.82012 5.65219 4.85719 5.71901 4.92556Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="prevImg">
            <img src={next} alt="next" className="button1" />
          </div>
        </div>
        <div className="info">
          <img src={info} alt="info" className="infoImg" />
        </div>
      </div>
    </>
  );
};

export default Footer;
