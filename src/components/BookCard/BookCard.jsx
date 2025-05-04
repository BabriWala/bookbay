import React from "react";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

const BookCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/31777051/pexels-photo-31777051/free-photo-of-vibrant-abstract-swirl-art-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        animation: "shake 1s ease-in-out",
      }}
      className="hover:animate-shake bg-cover bg-no-repeat p-10 pt-40 cursor-pointer"
    >
      <Typography variant="h2" className="text-white font-bold mb-5">
        New Realease.
      </Typography>
      <Button variant="secondary">Shop Now</Button>
    </div>
  );
};

export default BookCard;
