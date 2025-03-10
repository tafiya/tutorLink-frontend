import { getAllTBlogs } from "@/services/blogs";
import Image from "next/image";
import React from "react";

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const { data } = await getAllTBlogs();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const blog = data.find((b: any) => b.id == id);

  return (
    <div className=" max-w-7xl mx-auto py-24">
      <div className="max-w-4xl mx-auto p-6 bg-blue-50 shadow-md rounded-lg mt-6">
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{blog.title}</h1>
        <div className="text-gray-500 text-sm mt-1">📅 {blog.date}</div>
        <p className="text-gray-700 text-lg mt-4">{blog.detail}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
