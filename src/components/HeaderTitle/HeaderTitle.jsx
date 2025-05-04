import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import Iconify from "../Iconify/Iconify";

const HeaderTitle = () => {
  return (
    <div className="py-5 flex items-center justify-between">
      <Typography variant="h2" className="text-secondary font-primary">
        Bookio Top Books
      </Typography>
      <Button className="flex items-center gap-1">
        <span>View all</span>
        <Iconify icon="mingcute:arrow-right-line"></Iconify>
      </Button>
    </div>
  );
};

export default HeaderTitle;
