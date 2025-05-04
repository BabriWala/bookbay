import React from "react";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";
import Button from "../Button/Button";

const Product = ({ product }) => {
  const {
    title,
    author,
    price,
    discountPrice,
    rating,
    reviewCount,
    tags,
    primaryImage,
    hoverImage,
  } = product;

  return (
    <div className="">
      <div className="relative h-92 group">
        <div className="absolute z-[50] top-0 w-full flex items-center justify-between p-5 cursor-pointer">
          <div className="flex items-center gap-5">
            {tags?.map((tag, i) => (
              <div
                key={i}
                className={`px-1 text-white font-bold ${
                  tag.includes("%") ? "bg-primary" : "bg-amber-400"
                }`}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Iconify icon={"mdi:heart"} />
          </div>
        </div>

        <img
          className="mx-auto w-full h-92 object-cover absolute z-0"
          src={primaryImage}
          alt={title}
        />

        <div className="hidden group-hover:block transition-all duration-300">
          <img
            src={hoverImage}
            alt={`${title} hover`}
            className="mx-auto w-full h-92 object-cover absolute z-0"
          />
          <div className="w-full absolute bottom-0 text-white grid grid-cols-2">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center text-2xl"
            >
              <Iconify icon={"ion:cart-sharp"} />
            </Button>
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center text-2xl"
            >
              <Iconify icon={"mdi:eye-outline"} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-1 py-5">
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Iconify
                key={i}
                className="text-yellow-500"
                icon={
                  i < rating
                    ? "material-symbols:star"
                    : "material-symbols:star-outline"
                }
              />
            ))}
          </div>
          <Typography>({reviewCount})</Typography>
        </div>
        <Typography variant="small" className="text-black">
          By: {author}
        </Typography>
        <Typography
          variant="h2"
          className="text-secondary font-primary font-bold"
        >
          {title}
        </Typography>
        <Typography variant="h4" className="font-bold">
          <span className="text-secondary line-through">${price}</span>{" "}
          <span className=" text-4xl text-primary">${discountPrice}</span>
        </Typography>
      </div>
    </div>
  );
};

export default Product;
