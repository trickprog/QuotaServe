import React from "react";
import ProductCard from "../../Common/Product/ProductCard";
import Heading from "../Heading";

import { useSelector } from "react-redux";
const HotProduct = () => {
  let products = useSelector((state) => state.products.products);
  const Header = [
    { name: "New Arrival", link: "#new_arrival" },
    { name: "Trending", link: "#trending" },
    { name: "Best Sellers", link: "#best_sellers" },
    { name: "Featured", link: "#featured" },
    { name: "On Sale", link: "#on_sale" },
  ];
  return (
    <>
      <section id="hot_Product_area" className="ptb-100">
        <div className="container">
          <Heading
            heading="Hot Products"
            para="Our New and Top Trending Products"
          />
          <div className="row">
            <div className="col-lg-12">
              <div className="tabs_center_button">
                <ul className="nav nav-tabs">
                  {Header.map((val, ind) => (
                    <li>
                      <a
                        data-toggle="tab"
                        href={val.link}
                        className={ind === 0 && "active"}
                      >
                        {val.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="tabs_el_wrapper">
                <div className="tab-content">
                  <div
                    id="new_arrival"
                    className="tab-pane fade show in active"
                  >
                    <div className="row">
                      {products.slice(0, 8).map((data, index) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12"
                          key={index}
                        >
                          <ProductCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="trending" className="tab-pane fade">
                    <div className="row">
                      {products.slice(0, 5).map((data, index) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12"
                          key={index}
                        >
                          <ProductCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="best_sellers" className="tab-pane fade">
                    <div className="row">
                      {products.slice(3, 5).map((data, index) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12"
                          key={index}
                        >
                          <ProductCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="featured" className="tab-pane fade">
                    <div className="row">
                      {products.slice(5, 11).map((data, index) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12"
                          key={index}
                        >
                          <ProductCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div id="on_sale" className="tab-pane fade">
                    <div className="row">
                      {products.slice(6, 13).map((data, index) => (
                        <div
                          className="col-lg-3 col-md-4 col-sm-6 col-12"
                          key={index}
                        >
                          <ProductCard data={data} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotProduct;
