import LeftHeading from "./LeftHeading";
import LangUtils from "../utils/language";
import Link from "next/link";

import img from "public/reviews.png";
import ReviewsCard from "./ReviewsCard";
import CustomCarousel from "./CustomCarousel";

const carouselResponsive = [
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
    },
  },
];

const dummyData = [
  {
    id: 1,
    name: "mohamed gamal",
    rating: 3,
    img: img,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  },
  {
    id: 2,
    name: "mohamed gamal",
    rating: 3,
    img: img,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  },
  {
    id: 3,
    name: "mohamed gamal",
    rating: 3,
    img: img,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  },
  {
    id: 4,
    name: "mohamed gamal",
    rating: 3,
    img: img,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  },
  {
    id: 5,
    name: "mohamed gamal",
    rating: 3,
    img: img,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.",
  },
];

const CustomersReviews = ({ reviews }) => {
  const description = (
    <>
      {LangUtils.FetchWord("whatClientsSayDescription")}{" "}
      <Link className="font-bold underline" href="/">
        {LangUtils.FetchWord("here")}
      </Link>
    </>
  );

  return (
    <section className="container pt-[46px] pb-[66px]">
      <LeftHeading heading="whatClientsSay" description={description} />
      <CustomCarousel responsive={carouselResponsive}>
        {dummyData.map((review) => (
          <ReviewsCard
            key={review.id}
            name={review.name}
            img={review.img}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </CustomCarousel>
    </section>
  );
};

export default CustomersReviews;
