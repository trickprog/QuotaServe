import React from "react";
import Header from "../component/Common/Header";
import Banner from "../component/Common/Banner";
import Footer from "../component/Common/Footer";
import Verify from "../component/Verification";
export default function verification() {
  return (
    <>
      <Header />
      <Banner title="Verification" />
      <Verify />
      <Footer />
    </>
  );
}
