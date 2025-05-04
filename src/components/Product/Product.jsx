import React from "react";
import Typography from "../Typography/Typography";
import Iconify from "../Iconify/Iconify";
import Button from "../Button/Button";

const Product = () => {
  return (
    <div className="">
      <div className="relative h-92 group ">
        <div className="absolute z-[50] top-0 w-full flex items-center justify-between p-5 cursor-pointer">
          <div className="flex items-center gap-5">
            <div className="px-1 text-white bg-amber-400 font-bold">HOT</div>
            <div className="px-1 text-white bg-primary font-bold">-10%</div>
          </div>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Iconify icon={"mdi:heart"}></Iconify>
          </div>
        </div>
        <img
          className="mx-auto w-full h-92 object-cover absolute z-0"
          src="https://images.pexels.com/photos/31922887/pexels-photo-31922887/free-photo-of-airplane-window-view-with-book-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="hidden group-hover:block transition-all duration-300">
          <img
            src="https://images.pexels.com/photos/31918543/pexels-photo-31918543/free-photo-of-man-reading-in-cozy-library-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="mx-auto w-full h-92 object-cover absolute z-0"
          />
          <div className="w-full absolute bottom-0 text-white grid grid-cols-2">
            <Button variant="secondary" className="w-full flex items-center justify-center text-2xl">
              <Iconify icon={"ion:cart-sharp"}></Iconify>
            </Button>
            <Button variant="secondary" className="w-full flex items-center justify-center text-2xl">
              <Iconify icon={"mdi:eye-outline"}></Iconify>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 py-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <Iconify
              className="text-yellow-500"
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className="text-yellow-500"
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className="text-yellow-500"
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className="text-yellow-500"
              icon={"material-symbols:star-outline"}
            ></Iconify>
            <Iconify
              className="text-yellow-500"
              icon={"material-symbols:star-outline"}
            ></Iconify>
          </div>
          <Typography>(5)</Typography>
        </div>
        <Typography variant="small" className="text-black">
          By: JOhn Doe
        </Typography>
        <Typography
          variant="h2"
          className="text-secondary font-primary font-bold"
        >
          Harry Porter
        </Typography>
        <Typography variant="h4" className="font-bold ">
          <span className="text-secondary line-through">$100</span>{" "}
          <span className="font-primary text-4xl text-primary">$200</span>
        </Typography>
      </div>
    </div>
  );
};

export default Product;
