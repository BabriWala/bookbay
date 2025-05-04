import React from "react";
import Header from "../../components/Header/Header";
import Facility from "../../components/Facility/Facility";
import ReviewSection from "../../section/ReviewSection";
import BookCardSection from "../../section/BookCardSection";
import HomeAdvertizeSection from "../../section/HomeAdvertizeSection";
import BookOfTheMonthSection from "../../section/BookOfTheMonthSection";
import HomeBottomFeatureSection from "../../section/HomeBottomFeatureSection";
import Product from "../../components/Product/Product";
import HomeProductSection from "../../section/HomeProductSection";

const Home = () => {
  return (
    <>
      <BookCardSection></BookCardSection>
      <HomeAdvertizeSection></HomeAdvertizeSection>
      <BookOfTheMonthSection></BookOfTheMonthSection>
      <HomeProductSection></HomeProductSection>
      <HomeBottomFeatureSection></HomeBottomFeatureSection>
      <ReviewSection></ReviewSection>
      <Facility></Facility>
    </>
  );
};

export default Home;
