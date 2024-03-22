import React from "react";
import Header from "../component/Common/Header";
import Banner from "../component/Common/Banner";
import Footer from "../component/Common/Footer";
import NotFound from "../component/ItemNotFound";
export default function itemNotFound() {
  return (
    <>
      <Header />
      <Banner title="Item Not Found" />
      <NotFound />
      <Footer />
    </>
  );
}
