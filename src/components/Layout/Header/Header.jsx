
// import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mainImg2 from "../../../assets/background-img/mainImg2.jpg";
import mainImg1 from "../../../assets/background-img/main-Img.jpg";
import Veg from "../../../assets/background-img/veg.jpg";



const Header = () => {


  return (
    <div className={`container-fluid ${classes.container}`}>

      <div id="carouselExampleSlidesOnly" className={`${classes.heroSlide} carousel slide carousel-fade`} data-bs-ride="carousel">
        <div className={`carousel-inner ${classes.mainImage}`}>

          <div className={`carousel-item active`} data-bs-interval="10000">
            <img className={`d-block w-100 ${classes.carouselImg}`} src={mainImg2} alt="Full table food" />
          </div>

          <div className={`carousel-item`} data-bs-interval="10000">
            <img className={`d-block w-100 ${classes.carouselImg}`} src={mainImg1} alt="Full table food2" />
          </div>

          <div className={`carousel-item`} data-bs-interval="10000">
            <img className={`d-block w-100 ${classes.carouselImg}`} src={Veg} alt="Full table food2"/>
          </div> 


        </div>
      </div>


      <div className={`${classes.frontLogo}`}>
        <span className={`${classes["frontLogo--span1"]}`}> Crave
        </span>
        <span className={`${classes["frontLogo--span2"]}`}> Discover the best food & drinks you crave for
        </span>
      </div>
    </div>
  );
};

export default Header
