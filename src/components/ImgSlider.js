import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
    //making a settings variable 
    //These settings are not used yet anywhere
    let settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };


    return(
        
            <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src = "/images/slider-badag.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src = "/images/slider-badging.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src = "/images/slider-scale.jpg"/>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src = "/images/slider-scales.jpg"/>
                </a>
            </Wrap>

            </Carousel>
    
    )

};

//if we use Slider instead of Carousel , then the imported slider will be used
//whereas , carousel is our own custom made slider 
const Carousel = styled(Slider)`
//we are pulling the properties of the IMPORTED SLIDER 

margin-top: 20px;
  & > button { //styling the buttons on left and right
    opacity: 0; //buttons will be right there but they will be invisible
    height: 100%;
    width: 5vw;
    z-index: 1; //makes sure things are on top
    &:hover {
      opacity: 1;
      transition: opacity 0.5s;
    }
  }
  //we are now working on the dots
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  //the previous button shifts 75px to left and next button shifts to the right 
  .slick-prev {
    left: -70px;
  }
  .slick-next {
    right: -70px;
  }

`;

const Wrap = styled.div`

border-radius: 4px;
cursor: pointer;
position: relative;
a {
  overflow-y: hidden;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  display: block;
  position: relative;
  padding: 4px;
//   margin:4px;

  //This will make the thing responsive 
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition-duration: 300ms;
  }
}
`;


export default ImgSlider;