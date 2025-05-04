import React from "react";
import Iconify from "../Iconify/Iconify";
import Typography from "../Typography/Typography";
import FacilityItem from "./FacilityItem";

const Facility = () => {
  const facilities = [
    {
      icon: "ix:book",
      title: "Bookio Press",
      description: "Publish your book with B&N",
      reference: "bookio-press",
    },
    {
      icon: "iconoir:mastercard-card",
      title: "Bookio Mastercard®",
      description: "5% Back on All B&N Purchases",
      reference: "Bookio Mastercard®",
    },
    {
      icon: "mingcute:download-fill",
      title: "Download the App",
      description: "Millions of eBooks to Instantly",
      reference: "Download the App",
    },
    {
      icon: "mdi:gift",
      title: "Give a Gift Card",
      description: "The Perfect Gift for Everyone",
      reference: "Give a Gift Card",
    },
  ];

  return (
    <section className="py-5 border-t-gray-200 border-b-gray-200">
      <div className="container px-2 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* <FacilityItem facility={facilities[0]}></FacilityItem>
        <FacilityItem facility={facilities[1]}></FacilityItem>
        <FacilityItem facility={facilities[2]}></FacilityItem>
        <FacilityItem facility={facilities[3]}></FacilityItem> */}
        {facilities &&
          facilities.length > 0 &&
          facilities.map((item, index) => {
            if (index + 1 == facilities.length) {
              // 3+1 =4 == 4
              return <FacilityItem facility={item} key={index}></FacilityItem>;
            } else {
              return (
                <div className="lg:border lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:border-r-gray-200">
                  <FacilityItem facility={item} key={index}></FacilityItem>
                </div>
              );
            }
          })}
      </div>
    </section>
  );
};

export default Facility;
