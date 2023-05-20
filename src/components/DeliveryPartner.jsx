import CustomCarousel from "./CustomCarousel";
import LeftHeading from "./LeftHeading";
import Image from "next/image";

const DeliveryPartner = () => {
  return (
    <section className="container pt-8 pb-12">
      <LeftHeading heading="deliveryPartner" />
      <CustomCarousel slidesToShow={11}>
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

export default DeliveryPartner;
