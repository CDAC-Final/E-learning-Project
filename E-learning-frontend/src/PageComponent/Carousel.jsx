import carousel1 from "../images/carousel_1.png";
import carousel2 from "../images/carousel_2.jpeg";
import carousel3 from "../images/carousel_3.jpeg";
import carousel4 from "../images/carousel_4.jpeg";

const Carousel = () => {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel2} class="d-block w-100" alt="..."  style={{height:'55vh',objectFit:'fill'}} data-bs-interval="100"/>
        </div>
        <div class="carousel-item">
          <img src={carousel3} class="d-block w-100" alt="..." style={{height:'55vh',objectFit:'fill'}} data-bs-interval="100"/>
        </div>
        <div class="carousel-item">
          <img src={carousel4} class="d-block w-100" alt="..." style={{height:'55vh',objectFit:'fill'}} data-bs-interval="100"/>
        </div>
        {/* <div class="carousel-item">
          <img src={carousel1} class="d-block w-100" alt="..." style={{height:'55vh',objectFit:'fill'}} data-bs-interval="100"/>
        </div> */}
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
