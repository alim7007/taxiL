import React from "react";
import "./Blog.css";
// import BlogItem from "./BlogItem";
// import { imgCollections } from "./JSONADD";
// import '../App.css'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AddCardIcon from "@mui/icons-material/AddCard";
const Blog = () => {
  return (
    <div className="blog" id="blog">
      <div className="blog-container3">
        <h1>Servisler</h1>
        {/* {imgCollections.map((item, i) => (
          <BlogItem
            key={i}
            itemIndex={i}
            title={item.title}
            img={item.img}
            text={item.text}
          />
        ))} */}
        <p>
          Ercan Airport Transfer & Karşılama Günlük Gezi Ve Turistik Turlar.
          Girne, Mağusa, Lapta, Lefke, Güzelyurt Uzun Yol Taksi Hizmeti
        </p>
      </div>
      <div className="bottom-wrap">
        <div className="bottom1">
          <p>
            <span>
              <FacebookIcon />
            </span>
            <a href="https://www.facebook.com/lefkosataksihizmeti/">
              {" "}
              Facebook
            </a>
          </p>
          <p>
            <InstagramIcon />
            <a href="https://www.instagram.com/lefkosa.taxi/"> Instagram</a>
          </p>
          <p>
            <AddCardIcon />
            <h4>Kart ile ödeme geçerlidir</h4>
          </p>
        </div>
        <div className="bottom2"></div>
      </div>
    </div>
  );
};

export default Blog;
