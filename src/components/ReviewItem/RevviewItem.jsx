import React from "react";
import Iconify from "../Iconify/Iconify";
import Typography from "../Typography/Typography";

const RevviewItem = (props) => {
  const { rating, comment, description, img, name, designation } = props.review;
  return (
    <div className="border border-gray-200 p-5">
      <div className="flex items-center  justify-between gap-20">
        <div className="">
          <div className="flex">
            <Iconify
              className={1 <= rating ? "  text-amber-300" : ""}
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className={2 <= rating ? "  text-amber-300" : ""}
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className={3 <= rating ? "  text-amber-300" : ""}
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className={4 <= rating ? "  text-amber-300" : ""}
              icon={"material-symbols:star"}
            ></Iconify>
            <Iconify
              className={5 <= rating ? "  text-amber-300" : ""}
              icon={"material-symbols:star"}
            ></Iconify>
          </div>
          <Typography className="text-secondary" variant="h5">
            {comment}
          </Typography>
        </div>
        <div>
          <Iconify
            className="text-secondary w-20 h-20"
            icon={"bxs:quote-left"}
          ></Iconify>
        </div>
      </div>
      <Typography className="text-black opacity-50 text-justify" variant="p">
        {description}
      </Typography>
      <div className="flex items-center gap-5 py-5">
        <img className="w-20 h-20 rounded-full object-cover" src={img} />
        <div className="flex flex-col">
          <Typography className="uppercase text-secondary" variant="small">
            {name}
          </Typography>
          <Typography className="" variant="small">
            {designation}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RevviewItem;
