import Image from "next/image";
import CustomCarousel from "./CustomCarousel";
import SectionHeader from "./SectionHeader";

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

const IntegratedPartners = () => {
  return (
    <section className="container pt-14 pb-32">
      <SectionHeader
        heading="ourIntegrated"
        headingClassName="uppercase mb-5"
      />
      <CustomCarousel
        slidesToShow={11}
        pagination={false}
        responsive={responsive}
      >
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
          <div key={index} className="flex items-center justify-center">
            <Image
              className="mx-auto h-[80px]"
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

export default IntegratedPartners;
