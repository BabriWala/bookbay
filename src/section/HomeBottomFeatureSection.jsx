import React from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

const HomeBottomFeatureSection = () => {
  return (
    <section className="relative h-[1000px] flex items-center text-white ">
      <img
        className="absolute w-4/7 h-[600px] object-cover -z-5"
        src="https://images.pexels.com/photos/27085501/pexels-photo-27085501/free-photo-of-overgrown-wall-of-an-apartment-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <img
        className="absolute w-4/7 mt-[200px] h-[600px] object-cover -z-4 right-0"
        src="https://images.pexels.com/photos/16805270/pexels-photo-16805270/free-photo-of-windows-of-an-overgrown-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="container mx-auto">
        <Typography variant="h5" className="mb-5 font-bold">
          WELCOME TO THE WONDERFUL WORLD OF BOOKS
        </Typography>
        <Typography variant="h2" className="mb-5 font-bold font-primary">
          Cheap Books, <br /> Fantastic Choice
        </Typography>
        <Typography variant="p" className="mb-5 w-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo ex
          magni, suscipit tenetur, distinctio facere beatae eligendi dolor nobis
          fugit rem, ducimus incidunt veritatis sequi! Harum magnam facilis nisi
          cupiditate quia nemo recusandae sint, minus corrupti reiciendis a ad
          rerum id nihil nulla dolorum natus incidunt voluptates quibusdam sit.
        </Typography>
        <Button variant="outline" className="border-white text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default HomeBottomFeatureSection;
