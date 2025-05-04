import React from "react";
import BookCard from "../components/BookCard/BookCard";

const BookCardSection = () => {
  return (
    <section className="container px-2 md:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <BookCard></BookCard>
      <BookCard></BookCard>
      <BookCard></BookCard>
    </section>
  );
};

export default BookCardSection;
