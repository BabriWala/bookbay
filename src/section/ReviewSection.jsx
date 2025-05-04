import React from "react";
import Typography from "../components/Typography/Typography";
import Iconify from "../components/Iconify/Iconify";
import RevviewItem from "../components/ReviewItem/RevviewItem";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const ReviewSection = () => {
  const reviews = [
    {
      rating: 3,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 4,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 2,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 1,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 4,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 2,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 1,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 0,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 4,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 5,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
    {
      rating: 2,
      comment: "Great Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperioredolor sit amet consectetur adipisicing elit. Asperiore",
      img: "https://images.pexels.com/photos/31750448/pexels-photo-31750448/free-photo-of-smiling-man-in-black-shirt-portrait-on-black-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Amin Smith",
      designation: "Photographer",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <Typography
        className="font-primary font-bold text-secondary pb-10 "
        variant="h3"
      >
        Happy Client Say !
      </Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        loop={true}
        className="mySwiper"
      >
        {reviews &&
          reviews.length > 0 &&
          reviews.map((item, index) => {
            return (
              <SwiperSlide>
                <RevviewItem review={item} key={index}></RevviewItem>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default ReviewSection;
