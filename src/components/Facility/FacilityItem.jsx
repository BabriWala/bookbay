import React from "react";
import Iconify from "../Iconify/Iconify";
import Typography from "../Typography/Typography";
import { Link } from "react-router";

const FacilityItem = (props) => {
  const { icon, title, description, reference } = props.facility;
  console.log(icon, title, description, reference);

  return (
    <div className="flex gap-5">
      <Iconify className="w-20 h-20 text-primary" icon={icon}></Iconify>
      <div>
        <Typography className="text-secondary" variant="h5">
          {title}
        </Typography>
        <Typography className=" text-black opacity-50" variant="small">
          {description}
        </Typography>
        <Link to={reference}>
          <Typography
            className="flex items-center text-primary underline italic font-bold pt-5"
            variant="p"
          >
            Learn more{" "}
            <Iconify
              className="w-5 h-5"
              icon={"material-symbols-light:arrow-right-rounded"}
            ></Iconify>
          </Typography>
        </Link>
      </div>
    </div>
  );
};

export default FacilityItem;
