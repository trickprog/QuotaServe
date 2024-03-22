import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import logoWhite from "../../../assets/img/footlogo.webp";
import { MenuData } from "./MenuData";
import NaveItems from "./NaveItems";
import TopHeader from "./TopHeader";
import { useHistory } from "react-router-dom";
import svg from "../../../assets/img/svg/cancel.svg";
import svgsearch from "../../../assets/img/svg/search.svg";
import Translate from '../GoogleTranslate/Translate'

import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

const Header = () => {
  const [click, setClick] = useState(false);
  const [show, setShow] = useState();
  const history = useHistory();
  let carts = useSelector((state) => state.products.carts);
  let favorites = useSelector((state) => state.products.favorites);
  let dispatch = useDispatch();

  const rmCartProduct = (id) => {
    dispatch({ type: "products/removeCart", payload: { id } });
  };

  const rmFavProduct = (id) => {
    dispatch({ type: "products/removeFav", payload: { id } });
  };

  const cartTotal = () => {
    return carts.reduce(function (total, item) {
      return total + (item.quantity || 1) * item.price;
    }, 0);
  };

  const handleClick = () => {
    if (click) {
      document.querySelector("#offcanvas-add-cart").style =
        "transform: translateX(100%);";
    } else {
      document.querySelector("#offcanvas-add-cart").style =
        "transform: translateX(0%);";
    }
    setClick(!click);
  };
  const handleWish = () => {
    if (click) {
      document.querySelector("#offcanvas-wishlish").style =
        "transform: translateX(100%);";
    } else {
      document.querySelector("#offcanvas-wishlish").style =
        "transform: translateX(0);";
    }
    setClick(!click);
  };

  const handleSearch = () => {
    if (click) {
      document.querySelector("#search").style =
        "transform: translate(-100%, 0); opacity: 0";
    } else {
      document.querySelector("#search").style =
        "transform: translate(0px, 0px); opacity: 1";
    }
    setClick(!click);
  };
  const handleabout = () => {
    if (click) {
      document.querySelector("#offcanvas-about").style =
        "transform: translateX(100%);";
    } else {
      document.querySelector("#offcanvas-about").style =
        "transform: translateX(0%);";
    }
    setClick(!click);
  };
  const handlemenu = () => {
    if (click) {
      document.querySelector("#mobile-menu-offcanvas").style =
        "transform: translateX(100%);";
    } else {
      document.querySelector("#mobile-menu-offcanvas").style =
        "transform: translateX(0%);";
    }
    setClick(!click);
  };

  const handleShow = (value) => {
    value === show ? setShow("") : setShow(value);
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    if (header) {
      const scrollTop = window.scrollY;
      scrollTop >= 250
        ? header.classList.add("is-sticky")
        : header.classList.remove("is-sticky");
    }
  };

  return (
    <>
      <TopHeader />
      <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          <div className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <div className="footer_left_side">
                      <Link to="/">
                        <img src={logo} alt="logo" />
                      </Link>
                    </div>
                  </div>
                  <div className="main-menu menu-color--black menu-hover-color--golden d-none d-xl-block">
                    <nav className="d-flex justify-content-center">
                      <ul>
                        {MenuData.map((item, index) => (
                          <NaveItems item={item} key={index} />
                        ))}
                      </ul>
                    </nav>
                  </div>

                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <Translate />
                    </li>
                    <li>
                      {favorites.length ? (
                        <a
                          href="#offcanvas-wishlish"
                          className="offcanvas-toggle"
                          onClick={handleWish}
                        >
                          <i className="fa fa-heart"></i>
                          <span className="item-count">{favorites.length}</span>
                        </a>
                      ) : (
                        <a
                          href="#offcanvas-wishlish"
                          className="offcanvas-toggle"
                        >
                          <i className="fa fa-heart"></i>
                          <span className="item-count">{favorites.length}</span>
                        </a>
                      )}
                    </li>
                    <li>
                      {carts.length ? (
                        <a
                          href="#!"
                          className="offcanvas-toggle"
                          onClick={handleClick}
                        >
                          <i className="fa fa-shopping-bag"></i>
                          <span className="item-count">{carts.length}</span>
                        </a>
                      ) : (
                        <a href="#!" className="offcanvas-toggle">
                          <i className="fa fa-shopping-bag"></i>
                          <span className="item-count">{carts.length}</span>
                        </a>
                      )}
                    </li>
                    <li>
                      <a
                        href="#search"
                        className="search_width"
                        onClick={handleSearch}
                      >
                        <img src={svgsearch} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#offcanvas-about"
                        className="offacnvas offside-about offcanvas-toggle"
                        onClick={handleabout}
                      >
                        <i className="fa fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-header sticky-header sticky-color--golden mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="mobile-header-left">
                <ul className="mobile-menu-logo">
                  <li>
                    <Link to="/">
                      <div className="logo">
                        <img src={logo} alt="logo" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mobile-right-side">
                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li>
                    <a
                      href="#!"
                      className="search_width"
                      onClick={handleSearch}
                    >
                      <img src={svgsearch} alt="img" />
                    </a>
                  </li>
                  <li>
                    {favorites.length ? (
                      <a
                        href="#offcanvas-wishlish"
                        className="offcanvas-toggle"
                        onClick={handleWish}
                      >
                        <i className="fa fa-heart"></i>
                        <span className="item-count">{favorites.length}</span>
                      </a>
                    ) : (
                      <a
                        href="#offcanvas-wishlish"
                        className="offcanvas-toggle"
                      >
                        <i className="fa fa-heart"></i>
                        <span className="item-count">{favorites.length}</span>
                      </a>
                    )}
                  </li>
                  <li>
                    {carts.length ? (
                      <a
                        href="#!"
                        className="offcanvas-toggle"
                        onClick={handleClick}
                      >
                        <i className="fa fa-shopping-bag"></i>
                        <span className="item-count">{carts.length}</span>
                      </a>
                    ) : (
                      <a href="#!" className="offcanvas-toggle">
                        <i className="fa fa-shopping-bag"></i>
                        <span className="item-count">{carts.length}</span>
                      </a>
                    )}
                  </li>
                  <li>
                    <a
                      href="#!"
                      className="offcanvas-toggle offside-menu"
                      onClick={handlemenu}
                    >
                      <i className="fa fa-bars"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu-offcanvas"
        className="offcanvas offcanvas-rightside offcanvas-mobile-menu-section"
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={handlemenu}>
            <img src={svg} alt="icon" />
          </button>
        </div>
        <div className="offcanvas-mobile-menu-wrapper">
          <div className="mobile-menu-bottom">
            <div className="offcanvas-menu">
              <ul>
                {/* <li>
                                    <a href="#!" onClick={() => handleShow("home")}><span>Home</span></a>
                                    {
                                        show === "home" ?
                                            <ul className="mobile-sub-menu">
                                                <li><Link to="/">Home</Link></li>
                                                <li><Link to="/furniture">Asphalt</Link></li>
                                                <li><Link to="/electronics"></Link></li>
                                            </ul> : null
                                    }

                                </li> */}
                <li>
                  <a href="#!" onClick={() => handleShow("home")}>
                    <span>Home</span>
                  </a>
                  {show === "home" ? (
                    <>
                      <ul className="mobile-sub-menu">
                        <li>
                          <ul className="mobile-sub-menu">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/about">About Us</Link>
                            </li>
                            <li>
                              <Link to="/contact-two">Contact Us</Link>
                            </li>
                            <li>
                              <Link to="/faqs">Frequently Questions</Link>
                            </li>
                            <li>
                              <Link to="/privacy-policy">Privacy Policy</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </>
                  ) : null}
                </li>
                <li>
                  <a href="#!" onClick={() => handleShow("shop")}>
                    <span>View Shop</span>
                  </a>
                  {show === "shop" ? (
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link to="/cart">Cart</Link>
                      </li>

                      <li>
                        <Link to="/empty-cart">Empty Cart</Link>
                      </li>
                      <li>
                        <Link to="/checkout-one">Checkout</Link>
                      </li>

                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>

                      <li>
                        <Link to="/order-tracking">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="/order-complete">Order Complete</Link>
                      </li>
                      <li>
                        <Link to="/order-success">Order Success</Link>
                      </li>
                    </ul>
                  ) : null}
                </li>

                <li>
                  <a href="#!" onClick={() => handleShow("pages")}>
                    <span>Pages</span>
                  </a>

                  {show === "pages" ? (
                    <ul className="mobile-sub-menu">
                      <li>
                        <Link to="/vendor-dashboard">Vendor</Link>
                      </li>
                      <li>
                        <Link to="/my-account">Customer</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/error">404 Page</Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
              </ul>
            </div>
          </div>
          <div className="mobile-contact-info">
            <div className="logo">
              <Link to="/">
                <img src={logoWhite} alt="img" />
              </Link>
            </div>
            <address className="address">
              <span>Address: Your address goes here.</span>
              <span>Call Us: 0123456789, 0123456789</span>
              <span>Email: demo@example.com</span>
            </address>
            <ul className="social-link">
              <li>
                <a href="#!">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <ul className="user-link">
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/checkout-one">Checkout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="offcanvas-about"
        className="offcanvas offcanvas-rightside offcanvas-mobile-about-section"
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={handleabout}>
            <img src={svg} alt="icon" />
          </button>
        </div>
        <div className="mobile-contact-info">
          <address className="address">
            <img src={logoWhite} alt="logo" />
            <span>Address: Your address goes here.</span>
            <span>Call Us: 0123456789, 0123456789</span>
            <span>Email: demo@example.com</span>
          </address>
          <ul className="social-link">
            <li>
              <a href="#!">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <ul className="user-link">
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/checkout-one">Checkout</Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="offcanvas-add-cart"
        className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={handleClick}>
            <img src={svg} alt="icon" />
          </button>
        </div>
        <div className="offcanvas-add-cart-wrapper">
          <h4 className="offcanvas-title">Shopping Cart</h4>
          <ul className="offcanvas-cart">
            {carts.map((data, index) => (
              <li className="offcanvas-wishlist-item-single" key={index}>
                <div className="offcanvas-wishlist-item-block">
                  <Link
                    to={`/product-details-one/${data.id}`}
                    className="offcanvas-wishlist-item-image-link"
                  >
                    <img
                      src={data.img}
                      alt="img"
                      className="offcanvas-wishlist-image"
                    />
                  </Link>
                  <div className="offcanvas-wishlist-item-content">
                    <Link
                      to={`/product-details-one/${data.id}`}
                      className="offcanvas-wishlist-item-link"
                    >
                      {data.title}
                    </Link>
                    <div className="offcanvas-wishlist-item-details">
                      <span className="offcanvas-wishlist-item-details-quantity">
                        {data.quantity || 1} x
                      </span>
                      <span className="offcanvas-wishlist-item-details-price">
                        {" "}
                        ${data.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="offcanvas-wishlist-item-delete text-right">
                  <a
                    href="#!"
                    className="offcanvas-wishlist-item-delete"
                    onClick={() => rmCartProduct(data.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="offcanvas-cart-total-price">
            <span className="offcanvas-cart-total-price-text">Subtotal:</span>
            <span className="offcanvas-cart-total-price-value">
              ${cartTotal()}.00
            </span>
          </div>
          <ul className="offcanvas-cart-action-button">
            <li>
              <Link
                to="/cart"
                className="theme-btn-one btn-black-overlay btn_md"
              >
                View Cart
              </Link>
            </li>
            <li>
              <Link
                to="/checkout-one"
                className="theme-btn-one btn-black-overlay btn_md"
              >
                Checkout
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="offcanvas-wishlish"
        className="offcanvas offcanvas-rightside offcanvas-add-cart-section"
      >
        <div className="offcanvas-header text-right">
          <button className="offcanvas-close" onClick={handleWish}>
            <img src={svg} alt="icon" />
          </button>
        </div>
        <div className="offcanvas-wishlist-wrapper">
          <h4 className="offcanvas-title">Wishlist</h4>

          <ul className="offcanvas-wishlist">
            {favorites.map((data, index) => (
              <li className="offcanvas-wishlist-item-single" key={index}>
                <div className="offcanvas-wishlist-item-block">
                  <Link
                    to={`/product-details-one/${data.id}`}
                    className="offcanvas-wishlist-item-image-link"
                  >
                    <img
                      src={data.img}
                      alt="img"
                      className="offcanvas-wishlist-image"
                    />
                  </Link>
                  <div className="offcanvas-wishlist-item-content">
                    <Link
                      to={`/product-details-one/${data.id}`}
                      className="offcanvas-wishlist-item-link"
                    >
                      {data.title}
                    </Link>
                    <div className="offcanvas-wishlist-item-details">
                      <span className="offcanvas-wishlist-item-details-quantity">
                        1 x
                      </span>
                      <span className="offcanvas-wishlist-item-details-price">
                        {data.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="offcanvas-wishlist-item-delete text-right">
                  <a
                    href="#!"
                    className="offcanvas-wishlist-item-delete"
                    onClick={() => rmFavProduct(data.id)}
                  >
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <ul className="offcanvas-wishlist-action-button">
            <li>
              <Link
                to="/wishlist"
                className="theme-btn-one btn-black-overlay btn_md"
              >
                View wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div id="search" className="search-modal">
        <button type="button" className="close" onClick={handleSearch}>
          <img src={svg} alt="icon" />
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
            Swal.fire("Success", "Check out the Results", "success");
            history.push("/shop");
          }}
        >
          <input type="search" placeholder="type keyword(s) here" required />
          <button type="submit" className="btn btn-lg btn-main-search">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
