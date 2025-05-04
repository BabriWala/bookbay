import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router";

const Bottom = () => {
  return (
    <div className="container mx-auto py-3 flex">
      <Button
        variant="secondary"
        leftIcon="fe:bar"
        rightIcon="iconamoon:arrow-down-2-light"
        className="flex items-center gap-5 uppercase"
      >
        All Departments
      </Button>
      <div className="hidden lg:flex items-center">
        <Link to="/">
          <Button
            className="flex items-center gap-2 uppercase"
            rightIcon="iconamoon:arrow-down-2-light"
            variant="navItem"
          >
            Home
          </Button>
        </Link>
        <Link to="/store">
          <Button
            className="flex items-center gap-2 uppercase"
            rightIcon="iconamoon:arrow-down-2-light"
            variant="navItem"
          >
            Shop
          </Button>
        </Link>
        <Link to="/blog">
          <Button
            className="flex items-center gap-2 uppercase"
            rightIcon="iconamoon:arrow-down-2-light"
            variant="navItem"
          >
            Blog
          </Button>
        </Link>
        <Link to="/faq">
          <Button
            className="flex items-center gap-2 uppercase"
            rightIcon="iconamoon:arrow-down-2-light"
            variant="navItem"
          >
            Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Bottom;
