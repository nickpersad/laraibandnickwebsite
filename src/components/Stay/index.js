import React from "react";
import { Link } from "react-router-dom";
import ServiceSection2 from "../../components/SectionTitleS2";
import blogs from "../../api/blogs";

const Stay = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className={`wpo-blog-section section-padding ${props.blogClass}`}>
      <div className="container">
        <ServiceSection2 MainTitle={"Where to Stay"} />
        <div className="wpo-blog-items">
          <div className="row">
            {blogs.map((blog, Bitem) => (
              <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                <div className="wpo-blog-item">
                  <div className="wpo-blog-img">
                    <img src={blog.screens} alt="" />
                  </div>
                  <div className="wpo-blog-content">
                    <ul>
                      <li>Location:</li>
                      <li>Distance:</li>
                    </ul>
                    <h2>
                      <Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>
                        Hotel Name
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
