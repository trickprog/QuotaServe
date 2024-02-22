import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/img/offer/Asphalt.jpg";


const BannerBottom = () => {
  const data = [
    { name: "Asphalt", id: 1, img: img1 },
    { name: "Concrete", id: 3, img: img1 },
    { name: "Drilling", id: 4, img: img1 },
    { name: "Earth Movement", id: 5, img: img1 },
    { name: "Crushing", id: 6, img: img1 },
    { name: "Parts", id: 7, img: img1 },
    { name: "Accessories", id: 8, img: img1 },
    { name: "Trucks and Trailers", id: 2, img: img1 },

  ];
  return (
    <>
      <section id="product_variation_one" className="pt-100">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {data.map((val, ind) => (
              <div key={val.id} className="col-lg-5 col-md-6">
                <div className="product_variation_one_boxed img-zoom-hover">
                  <img src={val.img} alt="img" />
                  <div className="product_var_one_text">
                    <h4 className="color_one">{val.name}</h4>
                    <h2>New</h2>
                    <h4>Collection</h4>
                    <Link to="/shop" className="theme-btn-one bg-black btn_sm">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerBottom;
