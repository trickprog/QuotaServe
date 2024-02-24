import React from "react";
import Header from "../component/Common/Header";
import Banner from "../component/Common/Banner";
import Footer from "../component/Common/Footer";
import Layout from "../component/Chatrrom/Layout";
import Chat from "../component/Chatrrom/Chat";

export default function chatroom() {
  return (
    <>
      <Header />
      <Banner title="Chat" />
      <Layout>
        <Chat />
      </Layout>
      <Footer />
    </>
  );
}
