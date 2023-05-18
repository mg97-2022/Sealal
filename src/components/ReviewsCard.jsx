import Image from "next/image";
import StarIcon from "./icons/StarIcon";

const ReviewsCard = ({ img, rating, name, review }) => {
  const stars = Array(5).fill();

  const ratingStars = stars.map((_, i) => (
    <StarIcon
      key={i}
      stroke={i >= rating ? "#9B9B9B" : "none"}
      fill={i >= rating ? "none" : "#F5BC4C"}
    />
  ));

  return (
    <div className="py-5 pl-5 pr-3 bg-greyLightFirst rounded-lg w-[250px] lg:w-[300px] xl:w-[390px] min-h-[245px] mx-auto">
      <div className="flex gap-2 items-center mb-4">
        <Image
          className="rounded-full w-[50px] lg:w-[60px] xl:w-[72px] h-[72px]"
          src={img}
          alt={name}
          width={72}
          height={72}
        />
        <div className="flex flex-col gap-2">
          <h4 className="text-base lg:text-lg font-semibold">{name}</h4>
          <div className="flex items-center gap-[2px]">{ratingStars}</div>
        </div>
      </div>
      <p className="text-xs text-black">{review}</p>
    </div>
  );
};

export default ReviewsCard;
