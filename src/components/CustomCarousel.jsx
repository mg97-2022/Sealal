import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowIcon from "./icons/ArrowIcon";

const CustomCarousel = ({
  children,
  carouselClassName,
  containerClassName,
  slidesToShow,
  responsive,
}) => {
  const settings = {
    arrows: true, // used to show navigation arrows
    accessibility: true, // used to enable scroll
    nextArrow: <ArrowIcon reverse />, // next navigation arrow
    prevArrow: <ArrowIcon />, // previous navigation arrow
    dots: true, // used to show pagination arrows
    // dotsClass: "",
    // appendDots: dots => <ul>{dots}</ul>, // used to show custom pagination (like customPaging)
    // customPaging: (i) => {} // used to show custom pagination ({i + 1} is the current)
    autoplay: true,
    autoplaySpeed: 3000, // delay between each slide move
    centerMode: false, // used to show the current slide in the center of the page
    className: `${carouselClassName}`, // container className
    slidesToShow: slidesToShow || 3, // number of slides shown in screen
    slidesToScroll: 1, // number of slides to scroll at each time
    speed: 500, // Animation speed in milliseconds
    draggable: true, // Enable scrollable via dragging on desktop
    swipe: true, // swipe on mobile
    focusOnSelect: true, // Go to slide on click
    infinite: false, // repeat scrolling
    initialSlide: 0, // the initial slide index
    pauseOnDotsHover: false, // Prevents autoplay while hovering on dots
    pauseOnFocus: false, // Prevents autoplay while focused on slides
    pauseOnHover: true, // Prevents autoplay while hovering
    rows: 1, // number of rows per slide in the slider, (enables grid mode)
    slidesPerRow: 1, // number of slides to display in grid mode, this is useful with rows option
    // variableWidth: true, // used to change the width and the gap between slides
    // lazyLoad: "progressive" || "ondemand", // Load images or render components on demand or progressively
    // rtl: false, // reverses the slides order
    responsive: responsive,
  };
  return (
    <div className={`${containerClassName} container`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default CustomCarousel;


// appendDots: dots => (
//   <div
//     style={{
//       backgroundColor: "#ddd",
//       borderRadius: "10px",
//       padding: "10px"
//     }}
//   >
//     <ul style={{ margin: "0px" }}> {dots} </ul>
//   </div>
// ),

// customPaging: i => (
//   <div
//     style={{
//       width: "30px",
//       color: "blue",
//       border: "1px blue solid"
//     }}
//   >
//     {i + 1}
//   </div>
// )
// };