import { Link } from "react-router-dom";
import bannerImg from "../../assets/header.png";
const Banner = () => {
  return (
    <div className="section__container header__container">
      <div className="header__content">
        <h4>UP TO 20% OFF</h4>
        <h1>Girl's fashion</h1>
        <p>
          Discover the latest trends and express your unique style with our
          curated collection of clothing, accessories, footwear and more.
        </p>
        <button className="btn">
          <Link to="/shop">Explore Now</Link>
        </button>
      </div>
      <div className="header__img">
        <img src={bannerImg} alt="banner" />
      </div>
    </div>
  );
};
export default Banner;
