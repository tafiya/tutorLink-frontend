
const Parallax = () => {
  return (
    <div className="py-28">
   <section
      className="relative lg:h-[650px] md:h-[550px] h-[450px]  bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/demnpqwx3/image/upload/v1743197339/20944033_q2qk0v.jpg')",
      }}
    >
      <div className="bg-black/50 bg-opacity-50 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold text-center md:leading-14 leading-10 px-4">
        🌟 Elevate Your Learning Journey with Expert <br /> Tutors, Personalized Lessons,<br />  and  Flexible Scheduling for a Brighter Future! 🚀
        </h1>
      </div>
    </section>
    </div>
 
  );
};

export default Parallax;
