import React from "react";
import MenuTitle from "../../uitls/Button/MenuTitle/MenuTitle";
import Button from "../../uitls/Button/Button";
import MainBlogs from "../../Components/MainBlogs/MainBlogs";

const Blog = () => {
  return (
    <section className=" h-full">
      <MenuTitle title={"BLOG"} />
      <div className=" py-32 h-full flex flex-col items-center justify-center border-2 sm:px-16">
        <Button
          title={"BLOG"}
          className={""}
          subject={"Be First Who Read News"}
          paragraph={
            "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making."
          }
        />
        <MainBlogs />
      </div>
    </section>
  );
};

export default Blog;
