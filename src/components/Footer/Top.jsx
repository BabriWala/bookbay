import React from "react";
import Typography from "../Typography/Typography";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Iconify from "../Iconify/Iconify";

const Top = () => {
  return (
    <section className=" pt-5">
      <div className="container mx-auto pb-10 px-2 md:px-0 md:py-3 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className=" font-bold text-secondary pb-8">Need Help?</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            <span>Help Center</span>
            <span>Shipping FAQs</span>
            <span>Pick up in Store</span>
            <span>Order Status</span>
            <span>Product Recalls</span>
            <span>Corrections & Updates</span>
            <span>Gift Cards</span>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-secondary pb-8">ABOUT US</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            <span>Help Center</span>
            <span>Shipping FAQs</span>
            <span>Pick up in Store</span>
            <span>Order Status</span>
            <span>Product Recalls</span>
            <span>Corrections & Updates</span>
            <span>Gift Cards</span>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-secondary pb-8">CATEGORIES</h3>
          <div className="flex flex-col gap-1 text-black opacity-50">
            <span>Help Center</span>
            <span>Shipping FAQs</span>
            <span>Pick up in Store</span>
            <span>Order Status</span>
            <span>Product Recalls</span>
            <span>Corrections & Updates</span>
            <span>Gift Cards</span>
          </div>
        </div>
        <div>
          <h3 className=" font-bold text-secondary pb-8">OUR NEWSLETTER</h3>
          <div className="flex flex-col gap-5">
            <span className="text-black opacity-50">
              Sign up for our latest news and offers:
            </span>
            <div className="flex items-center justify-between md:justify-start bg-tertiary">
              <div className=" flex items-center gap-2  px-4">
                <Input
                  //   label="Username"
                  //   name="username"
                  className="p-0 border-0 w-40 md:w-92"
                  placeholder="Your Email Addersss"
                />
              </div>
              <Button variant="secondary">
                <Iconify icon={"ic:baseline-email"}></Iconify>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Top;
