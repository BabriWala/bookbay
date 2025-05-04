import React from "react";
import HeaderTitle from "../components/HeaderTitle/HeaderTitle";
import Product from "../components/Product/Product";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const HomeProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Harry Porter",
      author: "John Doe",
      price: 200,
      discountPrice: 100,
      rating: 3,
      reviewCount: 5,
      tags: ["HOT", "-10%"],
      primaryImage:
        "https://images.pexels.com/photos/31922887/pexels-photo-31922887/free-photo-of-airplane-window-view-with-book-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/31918543/pexels-photo-31918543/free-photo-of-man-reading-in-cozy-library-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 150,
      discountPrice: 120,
      rating: 4,
      reviewCount: 12,
      tags: ["HOT", "-20%"],
      primaryImage:
        "https://images.pexels.com/photos/4652274/pexels-photo-4652274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/4652273/pexels-photo-4652273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      price: 180,
      discountPrice: 160,
      rating: 5,
      reviewCount: 35,
      tags: ["NEW", "-11%"],
      primaryImage:
        "https://images.pexels.com/photos/7697727/pexels-photo-7697727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/7697726/pexels-photo-7697726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Deep Work",
      author: "Cal Newport",
      price: 250,
      discountPrice: 190,
      rating: 4,
      reviewCount: 18,
      tags: ["HOT", "-24%"],
      primaryImage:
        "https://images.pexels.com/photos/8347506/pexels-photo-8347506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/8347505/pexels-photo-8347505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 220,
      discountPrice: 180,
      rating: 5,
      reviewCount: 40,
      tags: ["-18%"],
      primaryImage:
        "https://images.pexels.com/photos/1904769/pexels-photo-1904769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1904767/pexels-photo-1904767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      price: 270,
      discountPrice: 240,
      rating: 4,
      reviewCount: 28,
      tags: ["BESTSELLER", "-11%"],
      primaryImage:
        "https://images.pexels.com/photos/1334604/pexels-photo-1334604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1334603/pexels-photo-1334603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Start With Why",
      author: "Simon Sinek",
      price: 190,
      discountPrice: 150,
      rating: 4,
      reviewCount: 21,
      tags: ["HOT", "-21%"],
      primaryImage:
        "https://images.pexels.com/photos/1039741/pexels-photo-1039741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/1039740/pexels-photo-1039740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 8,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 210,
      discountPrice: 170,
      rating: 3,
      reviewCount: 16,
      tags: ["-19%"],
      primaryImage:
        "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/46273/pexels-photo-46273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 9,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 195,
      discountPrice: 160,
      rating: 4,
      reviewCount: 10,
      tags: ["RECOMMENDED", "-18%"],
      primaryImage:
        "https://images.pexels.com/photos/46275/pexels-photo-46275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/46276/pexels-photo-46276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 10,
      title: "Man's Search for Meaning",
      author: "Viktor Frankl",
      price: 160,
      discountPrice: 140,
      rating: 5,
      reviewCount: 30,
      tags: ["HOT", "-13%"],
      primaryImage:
        "https://images.pexels.com/photos/6947409/pexels-photo-6947409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      hoverImage:
        "https://images.pexels.com/photos/6947410/pexels-photo-6947410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="container mx-auto">
      <HeaderTitle></HeaderTitle>

      <Swiper
        navigation={true}
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
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HomeProductSection;
