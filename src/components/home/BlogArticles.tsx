import { getAllTBlogs } from "@/services/blogs";
import { IBlog } from "@/types";
import Link from "next/link";
import React from "react";
import BlogCard from "../blog/BlogCard";

const BlogArticles = async () => {
  const data = await getAllTBlogs();
  const tutors: IBlog[] = data?.data || [];
  return (
    <div className="  py-20">
      <h3 className="text-orange-500 font-semibold text-center">Blogs</h3>
      <h2 className="text-2xl text-gray-100 md:text-4xl font-bold mt-4 mb-16 text-center">
        {" "}
        Recent Articles
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {tutors.slice(0, 3).map((blog: IBlog, i: number) => (
          <BlogCard key={i} blog={blog}></BlogCard>
        ))}
      </div>
      <div className=" flex justify-center mt-12">
        <Link href={"/blogs"}>
          <button className="mt-6  delay-150 duration-300 ease-in-out 
          hover:-translate-y-1 hover:scale-110 bg-blue-600 shadow-lg
           shadow-blue-600 cursor-pointer  hover:bg-blue-700 text-white font-bold 
           py-3 px-6 rounded-lg transition">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogArticles;
