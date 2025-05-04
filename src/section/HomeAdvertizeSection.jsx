import React from "react";
import Typography from "../components/Typography/Typography";
import Button from "../components/Button/Button";

const HomeAdvertizeSection = () => {
  return (
    <section className="container mx-auto my-10">
      <div
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/4046791/pexels-photo-4046791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        }}
        className="bg-cover bg-no-repeat flex flex-col items-center justify-center py-20"
      >
        <Typography className="uppercase text-white" variant="h4">More Bang for Your Book</Typography>
        <Typography className="text-white font-bold my-2 font-primary" variant="h1">20% Off Select Books</Typography>
        <Button variant="secondary">Shop Now</Button>
      </div>
    </section>
  );
};

export default HomeAdvertizeSection;
