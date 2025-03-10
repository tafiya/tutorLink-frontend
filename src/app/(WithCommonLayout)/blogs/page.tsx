import BlogCard from "@/components/blog/BlogCard";
import { getAllTBlogs } from "@/services/blogs";

const BlogsPage = async() => {
   const {data}= await getAllTBlogs();
 

  return (
    <>        
    <div className="w-full flex justify-center items-center bg-[#eff6ff] h-64 md:h-80 ">
    <div className=" mt-16 text-center">
    <span className="block mb-2 text-lg font-semibold text-orange-500"> Our Blogs </span>
            <h2
              className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] dark:text-white"
            >
              Our Recent News
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
            Stay Informed & Inspired: The Latest in Education, Tutoring, and Learning Strategies
            </p>
      {/* <h2 className=" text-center text-blue-600 text-lg font-medium mt-3">
        {" "}
        All The Tutors
      </h2> */}
    </div>
  </div>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-24">
        <div className="max-w-7xl mx-auto justify-center items-center flex flex-wrap gap-12">
          {
               // eslint-disable-next-line @typescript-eslint/no-explicit-any
               data?.map((blog:any) => <BlogCard key={blog.id} blog={blog} />)
          }

        </div>
        {/* <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
      
          </div>
        </div> */}
      </section>
    </>
  );
};

export default BlogsPage;
