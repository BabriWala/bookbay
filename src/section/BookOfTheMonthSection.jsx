import React from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

const BookOfTheMonthSection = () => {
  return (
    <section className="container mx-auto my-10">
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/8534233/pexels-photo-8534233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
        className="bg-cover bg-no-repeat flex flex-col items-center justify-center py-64"
      >
        <Typography className="uppercase text-secondary" variant="h4">
          Book Your Own Adventures
        </Typography>
        <Typography
          className="text-secondary font-bold my-2 font-primary"
          variant="h1"
        >
          More Bang for Your Book
        </Typography>
        <Button variant="secondary">Shop Now</Button>
      </div>
    </section>
  );
};

export default BookOfTheMonthSection;
