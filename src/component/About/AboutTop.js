import React from "react";
// import img
import img1 from "../../assets/img/common/Person.jpg";

const AboutTop = () => {
  return (
    <>
      <section id="about-top" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_top_img">
                <img src={img1} alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="about_top_left_content">
                <h2>ABOUT OUR EQUIPOS DE CONTRCION</h2>
                <h4>Trust.Knowledge.Value </h4>
                <p>
                  The President of EQUIPOS DE CONTRCION, Jose Vladimir Lockhart was born
                  into a family of contractors, which built roads, bridges,
                  commercial and public buildings.
                </p>
                <p>
                  These projects were located in The Dominican Republic; where
                  there was a lack of reliable suppliers of construction-related
                  articles. A problem that spread all over The Caribbean during
                  the 90’s. These articles were mostly from USA, which was the
                  logical source due to its closeness and the fact that most
                  brands were American In 1996, the location of Miami near The
                  Caribbean and Latin America, made it the perfect place to
                  establish a company dedicated to serving the needs of
                  contractors. Hence, <strong>EQUIPOS DE CONTRCION</strong> was born.
                </p>
                <p>
                  In 2000 EQUIPOS DE CONTRCION expands its service and offerings to Mexico,
                  Venezuela, Colombia and Panama. 2004, adds all Central
                  America, besides Peru and Ecuador. A few years after,
                  Argentina, Uruguay, and Paraguay are added to the list of
                  countries served. Nowaday, EQUIPOS DE CONTRCION serves contractors in
                  over 90% of Latin America and The Caribbean, selling a great
                  variety of machinery, parts, and selected construction
                  material. We continue to grow, because of the trust that our
                  customers have invested in us. Come and join our growing
                  family.​
                </p>
                <p>
                  <a href="/contact-two">Contact</a> us with your inquiries,
                  today. We promise to exceed your expectations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTop;
