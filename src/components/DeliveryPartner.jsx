import CustomCarousel from "./CustomCarousel";
import LeftHeading from "./LeftHeading";
import Image from "next/image";

const responsive = [
  {
    breakpoint: 1000,
    settings: {
      slidesToShow: 8,
    },
  },
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 6,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
    },
  },
];

const DeliveryPartner = () => {
  return (
    <section className="container pt-6 md:pt-8 pb-8 md:pb-10 lg:pb-12">
      <LeftHeading heading="deliveryPartner" />
      <CustomCarousel slidesToShow={11} responsive={responsive}>
        {[
          "/image 1.png",
          "/image 3.png",
          "/image 4.png",
          "/image 7.png",
          "/image 8.png",
          "/image 9.png",
          "/image 10.png",
          "/image 10.png",
          "/image 1.png",
          "/image 3.png",
          "/image 4.png",
          "/image 7.png",
          "/image 8.png",
          "/image 9.png",
          "/image 10.png",
          "/image 10.png",
        ].map((img, index) => (
          <div key={index} className="w-20 min-w-[80px] h-20">
            <Image
              className="mx-auto"
              src={img}
              alt="img"
              width="80"
              height="80"
            />
          </div>
        ))}
      </CustomCarousel>
    </section>
  );
};

export default DeliveryPartner;
