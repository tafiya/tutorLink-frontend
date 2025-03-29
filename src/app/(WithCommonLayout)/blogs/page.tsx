export const dynamic = "force-dynamic";
import BlogCard from "@/components/blog/BlogCard";
import { getAllTBlogs } from "@/services/blogs";

const BlogsPage = async () => {
  const { data } = await getAllTBlogs();

  return (
    <>
      <div className="w-full flex justify-center items-center h-64 md:h-80 ">
        <div className=" mt-16 text-center">
          <span className="block mb-2 text-lg font-semibold text-orange-500">
            {" "}
            Our Blogs{" "}
          </span>
          <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] text-gray-100">
            Our Recent News
          </h2>
          <p className="text-base  text-gray-200">
            Stay Informed & Inspired: The Latest in Education, Tutoring, and
            Learning Strategies
          </p>
        </div>
      </div>
      <section className="pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-4">
        <div className="max-w-7xl mx-auto justify-center items-center flex flex-wrap gap-12">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data?.map((blog: any) => (
              <BlogCard key={blog.id} blog={blog} />
            ))
          }
        </div>
     
      </section>
    </>
  );
};

export default BlogsPage;
