import React from "react";
import BanImg from "../../../assets/img/common/Excavation.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="banner_one">
        <div className="container">
          <div className="row justify-content-center">
            {/* <div className="col-lg-6"> */}
              <div className="banner_text_one">
                <h1
                  className="wow flipInX"
                  data-wow-duration="3.0s"
                  data-wow-delay=".3s"
                >
                  equipos de contrcion
                  <span
                    className="wow flipInX"
                    data-wow-duration="2.0s"
                    data-wow-delay=".5s"
                  >
                    Trust.Knowledge.Value
                  </span>
                </h1>
                <h3>Save Up To 50%</h3>
                <Link to="/shop" className="theme-btn-one bg-black btn_md">
                  Shop Now
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6">
                    <div className="hero_img" >
                        <img src={BanImg} alt="img" />
                    </div>
                </div> */}
          </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Banner;
