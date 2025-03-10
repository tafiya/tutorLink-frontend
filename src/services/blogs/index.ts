"use server"
export const getAllTBlogs = async (

) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs`,
      {
        next: {
          tags: ["BLOGS"],
        },
      }
    );
    const data = await res.json();
    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return Error(error.message);
  }
};